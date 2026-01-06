"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Select } from "@/app/components/ui/Select"

interface Wallet {
    id: string
    name: string
    isDefault: boolean
}

interface BalanceAdjustment {
    id: string
    amount: number
    reason: string | null
    createdAt: string
    wallet?: { id: string; name: string }
}

interface BalanceAdjustmentsProps {
    isOpen: boolean
    onClose: () => void
    walletId?: string
    onRefresh?: () => void
}

export default function BalanceAdjustments({ isOpen, onClose, walletId, onRefresh }: BalanceAdjustmentsProps) {
    const [adjustments, setAdjustments] = useState<BalanceAdjustment[]>([])
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [isFormModalOpen, setIsFormModalOpen] = useState(false)
    const [editingAdjustment, setEditingAdjustment] = useState<BalanceAdjustment | null>(null)
    const [loading, setLoading] = useState(false)

    // Form state
    const [formAmount, setFormAmount] = useState("")
    const [formReason, setFormReason] = useState("")
    const [formWalletId, setFormWalletId] = useState("")

    const fetchAdjustments = async () => {
        try {
            setLoading(true)
            const params = new URLSearchParams()
            if (walletId) params.set("walletId", walletId)

            const res = await fetch(`/api/balance-adjustments?${params}`)
            const data = await res.json()
            setAdjustments(data)
        } catch (error) {
            console.error("Error fetching adjustments:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchWallets = async () => {
        try {
            const res = await fetch("/api/wallets")
            const data = await res.json()
            setWallets(data)
        } catch (error) {
            console.error("Error fetching wallets:", error)
        }
    }

    useEffect(() => {
        if (isOpen) {
            fetchAdjustments()
            fetchWallets()
        }
    }, [isOpen, walletId])

    const openFormModal = (adjustment?: BalanceAdjustment) => {
        if (adjustment) {
            setEditingAdjustment(adjustment)
            setFormAmount(adjustment.amount.toString())
            setFormReason(adjustment.reason || "")
            setFormWalletId(adjustment.wallet?.id || "")
        } else {
            setEditingAdjustment(null)
            setFormAmount("")
            setFormReason("")
            // Usar la wallet filtrada o la default
            const defaultWallet = wallets.find(w => w.isDefault)
            setFormWalletId(walletId || defaultWallet?.id || "")
        }
        setIsFormModalOpen(true)
    }

    const closeFormModal = () => {
        setIsFormModalOpen(false)
        setEditingAdjustment(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            amount: parseFloat(formAmount),
            reason: formReason || null,
            walletId: formWalletId || null,
        }

        try {
            if (editingAdjustment) {
                await fetch(`/api/balance-adjustments/${editingAdjustment.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            } else {
                await fetch("/api/balance-adjustments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            }

            closeFormModal()
            fetchAdjustments()
            onRefresh?.()
        } catch (error) {
            console.error("Error saving adjustment:", error)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este ajuste de balance?")) return

        try {
            await fetch(`/api/balance-adjustments/${id}`, { method: "DELETE" })
            fetchAdjustments()
            onRefresh?.()
        } catch (error) {
            console.error("Error deleting adjustment:", error)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const totalAdjustments = adjustments.reduce((sum, adj) => sum + adj.amount, 0)

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Ajustes de Balance"
                size="lg"
            >
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <div>
                            <p className="text-sm text-muted-foreground">Total de ajustes:</p>
                            <p className={`text-lg font-semibold ${totalAdjustments >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatCurrency(totalAdjustments)}
                            </p>
                        </div>
                        <Button onClick={() => openFormModal()} className="w-full sm:w-auto">+ Nuevo ajuste</Button>
                    </div>

                    {loading ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">Cargando...</p>
                        </div>
                    ) : adjustments.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">No hay ajustes de balance</p>
                        </div>
                    ) : (
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {adjustments.map((adjustment) => (
                                <div
                                    key={adjustment.id}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 border border-border rounded-lg"
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                            <span className={`font-medium text-base sm:text-lg ${adjustment.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(adjustment.amount)}
                                            </span>
                                            {adjustment.wallet && (
                                                <span className="text-xs bg-secondary text-muted px-2 py-0.5 rounded">
                                                    {adjustment.wallet.name}
                                                </span>
                                            )}
                                            {adjustment.reason && (
                                                <span className="text-sm text-muted-foreground truncate">
                                                    {adjustment.reason}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {formatDate(adjustment.createdAt)}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => openFormModal(adjustment)}
                                            className="flex-1 sm:flex-none"
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => handleDelete(adjustment.id)}
                                            className="flex-1 sm:flex-none"
                                        >
                                            Eliminar
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Modal>

            {/* Form Modal */}
            <Modal
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={editingAdjustment ? "Editar ajuste" : "Nuevo ajuste"}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Cantidad"
                        type="number"
                        step="0.01"
                        value={formAmount}
                        onChange={(e) => setFormAmount(e.target.value)}
                        required
                        placeholder="Ingresa un valor positivo o negativo"
                    />
                    {wallets.length > 0 && (
                        <Select
                            label="Wallet"
                            value={formWalletId}
                            onChange={(e) => setFormWalletId(e.target.value)}
                            options={wallets.map(w => ({ value: w.id, label: w.name }))}
                        />
                    )}
                    <Textarea
                        label="Motivo (opcional)"
                        value={formReason}
                        onChange={(e) => setFormReason(e.target.value)}
                        rows={3}
                        placeholder="Describe el motivo del ajuste..."
                    />
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button type="submit" className="flex-1 w-full">
                            {editingAdjustment ? "Guardar" : "Crear"}
                        </Button>
                        <Button type="button" variant="secondary" onClick={closeFormModal} className="w-full sm:w-auto">
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
