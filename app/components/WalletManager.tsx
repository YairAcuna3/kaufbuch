"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Input } from "@/app/components/ui/Input"
import { Select } from "@/app/components/ui/Select"
import { IoMdSnow } from "react-icons/io"
import { AiOutlineQuestionCircle } from "react-icons/ai"

interface Wallet {
    id: string
    name: string
    isDefault: boolean
    isFrozen: boolean
    parentId: string | null
    balance: number
    children?: Wallet[]
}

interface WalletManagerProps {
    isOpen: boolean
    onClose: () => void
    onWalletChange?: () => void
}

export default function WalletManager({ isOpen, onClose, onWalletChange }: WalletManagerProps) {
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [frozenWallets, setFrozenWallets] = useState<Wallet[]>([])
    const [loading, setLoading] = useState(false)
    const [isFormModalOpen, setIsFormModalOpen] = useState(false)
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false)
    const [isFreezeModalOpen, setIsFreezeModalOpen] = useState(false)
    const [editingWallet, setEditingWallet] = useState<Wallet | null>(null)
    const [freezingWallet, setFreezingWallet] = useState<Wallet | null>(null)
    const [isFrozenListModalOpen, setIsFrozenListModalOpen] = useState(false)

    // Form state
    const [formName, setFormName] = useState("")
    const [formParentId, setFormParentId] = useState("")

    // Transfer state
    const [transferFrom, setTransferFrom] = useState("")
    const [transferTo, setTransferTo] = useState("")
    const [transferAmount, setTransferAmount] = useState("")

    // Freeze state
    const [freezeTargetWallet, setFreezeTargetWallet] = useState("")

    // Balance visibility state
    const [showTotalBalance, setShowTotalBalance] = useState(false)

    const fetchWallets = async () => {
        try {
            setLoading(true)
            const [activeRes, frozenRes] = await Promise.all([
                fetch("/api/wallets"),
                fetch("/api/wallets?includeFrozen=true")
            ])
            const activeData = await activeRes.json()
            const allData = await frozenRes.json()

            setWallets(activeData.filter((w: Wallet) => !w.isFrozen))
            setFrozenWallets(allData.filter((w: Wallet) => w.isFrozen))
        } catch (error) {
            console.error("Error fetching wallets:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
            fetchWallets()
        }
    }, [isOpen])

    const openFormModal = (wallet?: Wallet) => {
        if (wallet) {
            setEditingWallet(wallet)
            setFormName(wallet.name)
            setFormParentId(wallet.parentId || "")
        } else {
            setEditingWallet(null)
            setFormName("")
            setFormParentId("")
        }
        setIsFormModalOpen(true)
    }

    const closeFormModal = () => {
        setIsFormModalOpen(false)
        setEditingWallet(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            name: formName,
            parentId: formParentId || null,
        }

        try {
            if (editingWallet) {
                await fetch(`/api/wallets/${editingWallet.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            } else {
                await fetch("/api/wallets", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            }

            closeFormModal()
            fetchWallets()
            onWalletChange?.()
        } catch (error) {
            console.error("Error saving wallet:", error)
        }
    }

    const handleDelete = async (wallet: Wallet) => {
        if (wallet.isDefault) {
            alert("No se puede eliminar la wallet principal")
            return
        }
        if (!confirm(`¿Eliminar la wallet "${wallet.name}"?`)) return

        try {
            const res = await fetch(`/api/wallets/${wallet.id}`, { method: "DELETE" })
            if (!res.ok) {
                const data = await res.json()
                alert(data.error || "Error al eliminar")
                return
            }
            fetchWallets()
            onWalletChange?.()
        } catch (error) {
            console.error("Error deleting wallet:", error)
        }
    }

    const openFreezeModal = (wallet: Wallet) => {
        setFreezingWallet(wallet)
        setFreezeTargetWallet("")
        setIsFreezeModalOpen(true)
    }

    const handleFreeze = async () => {
        if (!freezingWallet) return

        try {
            const res = await fetch(`/api/wallets/${freezingWallet.id}/freeze`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    targetWalletId: freezeTargetWallet || null,
                }),
            })

            const data = await res.json()
            if (!res.ok) {
                if (data.balance !== undefined) {
                    alert(`${data.error}\nBalance actual: ${formatCurrency(data.balance)}`)
                } else {
                    alert(data.error || "Error al congelar")
                }
                return
            }

            setIsFreezeModalOpen(false)
            setFreezingWallet(null)
            fetchWallets()
            onWalletChange?.()
        } catch (error) {
            console.error("Error freezing wallet:", error)
        }
    }

    const handleUnfreeze = async (wallet: Wallet) => {
        try {
            const res = await fetch(`/api/wallets/${wallet.id}/unfreeze`, {
                method: "POST",
            })

            if (!res.ok) {
                const data = await res.json()
                alert(data.error || "Error al reactivar")
                return
            }

            fetchWallets()
            onWalletChange?.()
        } catch (error) {
            console.error("Error unfreezing wallet:", error)
        }
    }

    const handleTransfer = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch("/api/wallets/transfer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fromWalletId: transferFrom,
                    toWalletId: transferTo,
                    amount: parseFloat(transferAmount),
                }),
            })

            if (!res.ok) {
                const data = await res.json()
                alert(data.error || "Error en la transferencia")
                return
            }

            setIsTransferModalOpen(false)
            setTransferFrom("")
            setTransferTo("")
            setTransferAmount("")
            fetchWallets()
            onWalletChange?.()
        } catch (error) {
            console.error("Error transferring:", error)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount)
    }

    const totalBalance = wallets.reduce((sum, w) => sum + w.balance, 0)

    // Organizar wallets en jerarquía
    const rootWallets = wallets.filter(w => !w.parentId)
    const getChildren = (parentId: string) => wallets.filter(w => w.parentId === parentId)

    const renderWallet = (wallet: Wallet, level: number = 0) => (
        <div key={wallet.id} style={{ marginLeft: level * 20 }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 border border-border rounded-lg mb-2">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">{wallet.name}</span>
                        {wallet.isDefault && (
                            <span className="text-xs">🔒</span>
                        )}
                    </div>
                    <span className={`text-sm ${wallet.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(wallet.balance)}
                    </span>
                </div>
                <div className="flex gap-1 flex-wrap">
                    <Button size="sm" variant="secondary" onClick={() => openFormModal(wallet)} title="Editar">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </Button>
                    {!wallet.isDefault && (
                        <>
                            <Button size="sm" variant="teal" onClick={() => openFreezeModal(wallet)} title="Congelar">
                                <IoMdSnow className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="danger" onClick={() => handleDelete(wallet)} title="Eliminar">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </Button>
                        </>
                    )}
                </div>
            </div>
            {getChildren(wallet.id).map(child => renderWallet(child, level + 1))}
        </div>
    )

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title={
                    <span className="flex items-center gap-2">
                        Gestionar Wallets
                        <button
                            type="button"
                            onClick={() => setShowTotalBalance(!showTotalBalance)}
                            className="text-muted hover:text-foreground transition-colors"
                            title="Ver balance total"
                        >
                            <AiOutlineQuestionCircle className="w-5 h-5" />
                        </button>
                    </span>
                }
                size="lg"
            >
                <div className="space-y-4">
                    {showTotalBalance && (
                        <div className="p-3 bg-muted/20 rounded-lg">
                            <p className="text-sm text-muted-foreground">Balance total:</p>
                            <p className={`text-xl font-bold ${totalBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatCurrency(totalBalance)}
                            </p>
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="flex gap-2 w-full sm:w-auto">
                            <Button onClick={() => openFormModal()} className="flex-1 sm:flex-none">
                                + Nueva
                            </Button>
                            <Button variant="teal" onClick={() => setIsTransferModalOpen(true)} className="flex-1 sm:flex-none">
                                Transferir
                            </Button>
                            {frozenWallets.length > 0 && (
                                <Button variant="secondary" onClick={() => setIsFrozenListModalOpen(true)} title="Ver wallets congeladas">
                                    <IoMdSnow className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </div>

                    {loading ? (
                        <p className="text-center text-muted py-8">Cargando...</p>
                    ) : (
                        <div className="space-y-2 max-h-80 overflow-y-auto">
                            {rootWallets.map(wallet => renderWallet(wallet))}
                        </div>
                    )}


                </div>
            </Modal>

            {/* Form Modal */}
            <Modal
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={editingWallet ? "Editar wallet" : "Nueva wallet"}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                        disabled={editingWallet?.isDefault}
                    />
                    <Select
                        label="Dentro de (opcional)"
                        value={formParentId}
                        onChange={(e) => setFormParentId(e.target.value)}
                        options={[
                            { value: "", label: "Ninguna (raíz)" },
                            ...wallets
                                .filter(w => w.id !== editingWallet?.id)
                                .map(w => ({ value: w.id, label: w.name }))
                        ]}
                    />
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1">
                            {editingWallet ? "Guardar" : "Crear"}
                        </Button>
                        <Button type="button" variant="secondary" onClick={closeFormModal}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal>

            {/* Transfer Modal */}
            <Modal
                isOpen={isTransferModalOpen}
                onClose={() => setIsTransferModalOpen(false)}
                title="Transferir entre wallets"
            >
                <form onSubmit={handleTransfer} className="space-y-4">
                    <Select
                        label="Desde"
                        value={transferFrom}
                        onChange={(e) => setTransferFrom(e.target.value)}
                        required
                        options={[
                            { value: "", label: "Seleccionar..." },
                            ...wallets.map(w => ({
                                value: w.id,
                                label: `${w.name} (${formatCurrency(w.balance)})`
                            }))
                        ]}
                    />
                    <Select
                        label="Hacia"
                        value={transferTo}
                        onChange={(e) => setTransferTo(e.target.value)}
                        required
                        options={[
                            { value: "", label: "Seleccionar..." },
                            ...wallets
                                .filter(w => w.id !== transferFrom)
                                .map(w => ({
                                    value: w.id,
                                    label: `${w.name} (${formatCurrency(w.balance)})`
                                }))
                        ]}
                    />
                    <Input
                        label="Monto"
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        required
                    />
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1">Transferir</Button>
                        <Button type="button" variant="secondary" onClick={() => setIsTransferModalOpen(false)}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal>

            {/* Freeze Modal */}
            <Modal
                isOpen={isFreezeModalOpen}
                onClose={() => setIsFreezeModalOpen(false)}
                title={`Congelar "${freezingWallet?.name}"`}
            >
                <div className="space-y-4">
                    {freezingWallet && freezingWallet.balance !== 0 && (
                        <>
                            <p className="text-sm text-muted">
                                Esta wallet tiene un balance de{" "}
                                <span className={freezingWallet.balance >= 0 ? 'text-green-600' : 'text-red-600'}>
                                    {formatCurrency(freezingWallet.balance)}
                                </span>.
                                Debes transferirlo a otra wallet antes de congelar.
                            </p>
                            <Select
                                label="Transferir balance a"
                                value={freezeTargetWallet}
                                onChange={(e) => setFreezeTargetWallet(e.target.value)}
                                required
                                options={[
                                    { value: "", label: "Seleccionar..." },
                                    ...wallets
                                        .filter(w => w.id !== freezingWallet?.id)
                                        .map(w => ({ value: w.id, label: w.name }))
                                ]}
                            />
                        </>
                    )}
                    {freezingWallet && freezingWallet.balance === 0 && (
                        <p className="text-sm text-muted">
                            Esta wallet no tiene balance. Se congelará directamente.
                        </p>
                    )}
                    <div className="flex gap-3 pt-4">
                        <Button
                            onClick={handleFreeze}
                            className="flex-1"
                            disabled={freezingWallet?.balance !== 0 && !freezeTargetWallet}
                        >
                            Congelar
                        </Button>
                        <Button variant="secondary" onClick={() => setIsFreezeModalOpen(false)}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Frozen Wallets List Modal */}
            <Modal
                isOpen={isFrozenListModalOpen}
                onClose={() => setIsFrozenListModalOpen(false)}
                title={
                    <span className="flex items-center gap-2">
                        <IoMdSnow className="w-5 h-5" />
                        Wallets congeladas
                    </span>
                }
            >
                <div className="space-y-2">
                    {frozenWallets.length === 0 ? (
                        <p className="text-center text-muted py-4">No hay wallets congeladas</p>
                    ) : (
                        frozenWallets.map(wallet => (
                            <div key={wallet.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                                <div>
                                    <span className="font-medium">{wallet.name}</span>
                                    <span className="text-sm text-muted ml-2">
                                        {formatCurrency(wallet.balance)}
                                    </span>
                                </div>
                                <Button size="sm" variant="secondary" onClick={() => handleUnfreeze(wallet)}>
                                    Reactivar
                                </Button>
                            </div>
                        ))
                    )}
                </div>
            </Modal>
        </>
    )
}
