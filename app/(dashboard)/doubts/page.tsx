"use client"

import { useState, useEffect } from "react"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Switch } from "@/app/components/ui/Switch"
import { Select } from "@/app/components/ui/Select"
import { WalletSelect } from "@/app/components/ui/WalletSelect"

interface Wallet {
    id: string
    name: string
    isDefault: boolean
    balance: number
    parentId: string | null
}

interface Doubt {
    id: string
    toWho: string
    doubt: boolean // true = debo, false = me deben
    amount: number
    wasPay: boolean
    wallet?: { id: string; name: string }
}

export default function DoubtsPage() {
    const [doubts, setDoubts] = useState<Doubt[]>([])
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [selectedWalletFilter, setSelectedWalletFilter] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingDoubt, setEditingDoubt] = useState<Doubt | null>(null)

    const [formToWho, setFormToWho] = useState("")
    const [formDoubt, setFormDoubt] = useState(true)
    const [formAmount, setFormAmount] = useState("")
    const [formWasPay, setFormWasPay] = useState(false)
    const [formWalletId, setFormWalletId] = useState("")

    const fetchData = async () => {
        const params = new URLSearchParams()
        if (selectedWalletFilter) params.set("walletId", selectedWalletFilter)

        const res = await fetch(`/api/doubts?${params}`)
        const data = await res.json()
        setDoubts(data)
    }

    const fetchWallets = async () => {
        const res = await fetch("/api/wallets")
        const data = await res.json()
        setWallets(data)
    }

    useEffect(() => {
        fetchWallets()
    }, [])

    useEffect(() => {
        fetchData()
    }, [selectedWalletFilter])

    const openModal = (doubt?: Doubt) => {
        if (doubt) {
            setEditingDoubt(doubt)
            setFormToWho(doubt.toWho)
            setFormDoubt(doubt.doubt)
            setFormAmount(doubt.amount.toString())
            setFormWasPay(doubt.wasPay)
            setFormWalletId(doubt.wallet?.id || "")
        } else {
            setEditingDoubt(null)
            setFormToWho("")
            setFormDoubt(true)
            setFormAmount("")
            setFormWasPay(false)
            const defaultWallet = wallets.find(w => w.isDefault)
            setFormWalletId(selectedWalletFilter || defaultWallet?.id || "")
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingDoubt(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            toWho: formToWho,
            doubt: formDoubt,
            amount: parseFloat(formAmount),
            wasPay: formWasPay,
            walletId: formWalletId || null,
        }

        if (editingDoubt) {
            await fetch(`/api/doubts/${editingDoubt.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        } else {
            await fetch("/api/doubts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        }

        closeModal()
        fetchData()
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar esta deuda?")) return
        await fetch(`/api/doubts/${id}`, { method: "DELETE" })
        fetchData()
    }

    const togglePaid = async (doubt: Doubt) => {
        await fetch(`/api/doubts/${doubt.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...doubt, wasPay: !doubt.wasPay, walletId: doubt.wallet?.id }),
        })
        fetchData()
    }

    const iOwe = doubts.filter((d) => d.doubt && !d.wasPay)
    const theyOweMe = doubts.filter((d) => !d.doubt && !d.wasPay)
    const paid = doubts.filter((d) => d.wasPay)

    const totalIOwe = iOwe.reduce((sum, d) => sum + d.amount, 0)
    const totalTheyOweMe = theyOweMe.reduce((sum, d) => sum + d.amount, 0)

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h1 className="text-2xl font-bold">Deudas</h1>
                <Button onClick={() => openModal()}>+ Nueva deuda</Button>
            </div>

            {/* Wallet filter */}
            {wallets.length > 1 && (
                <div className="mb-4">
                    <WalletSelect
                        value={selectedWalletFilter}
                        onChange={setSelectedWalletFilter}
                        wallets={wallets}
                        allowAll={true}
                        showBalance={true}
                    />
                </div>
            )}

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="text-center">
                    <p className="text-muted mb-1">Debo</p>
                    <p className="text-2xl font-bold text-danger">S/ {totalIOwe.toFixed(2)}</p>
                </Card>
                <Card className="text-center">
                    <p className="text-muted mb-1">Me deben</p>
                    <p className="text-2xl font-bold text-success">S/ {totalTheyOweMe.toFixed(2)}</p>
                </Card>
                <Card className="text-center bg-gray-900!">
                    <p className="text-muted mb-1">Balance</p>
                    <p className={`text-2xl font-bold ${totalTheyOweMe - totalIOwe >= 0 ? "text-success" : "text-danger"}`}>
                        S/ {(totalTheyOweMe - totalIOwe).toFixed(2)}
                    </p>
                </Card>
            </div>

            {/* I owe */}
            {iOwe.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-danger">Debo</h2>
                    <div className="space-y-3">
                        {iOwe.map((doubt) => (
                            <DoubtCard
                                key={doubt.id}
                                doubt={doubt}
                                onEdit={openModal}
                                onDelete={handleDelete}
                                onTogglePaid={togglePaid}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* They owe me */}
            {theyOweMe.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-success">Me deben</h2>
                    <div className="space-y-3">
                        {theyOweMe.map((doubt) => (
                            <DoubtCard
                                key={doubt.id}
                                doubt={doubt}
                                onEdit={openModal}
                                onDelete={handleDelete}
                                onTogglePaid={togglePaid}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Paid */}
            {paid.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-muted">Pagadas</h2>
                    <div className="space-y-3 opacity-60">
                        {paid.map((doubt) => (
                            <DoubtCard
                                key={doubt.id}
                                doubt={doubt}
                                onEdit={openModal}
                                onDelete={handleDelete}
                                onTogglePaid={togglePaid}
                            />
                        ))}
                    </div>
                </div>
            )}

            {doubts.length === 0 && (
                <Card className="text-center text-muted py-12">
                    No hay deudas registradas. ¡Bien hecho!
                </Card>
            )}

            <Modal isOpen={isModalOpen} onClose={closeModal} title={editingDoubt ? "Editar deuda" : "Nueva deuda"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Persona"
                        value={formToWho}
                        onChange={(e) => setFormToWho(e.target.value)}
                        placeholder="¿A quién o quién te debe?"
                        required
                    />
                    <Input
                        label="Cantidad"
                        type="number"
                        step="0.01"
                        value={formAmount}
                        onChange={(e) => setFormAmount(e.target.value)}
                        required
                    />
                    {wallets.length > 0 && (
                        <WalletSelect
                            label="Wallet"
                            value={formWalletId}
                            onChange={setFormWalletId}
                            wallets={wallets}
                            showBalance={true}
                        />
                    )}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Tipo</label>
                        <Switch
                            checked={formDoubt}
                            onChange={setFormDoubt}
                            labelOff="Me deben"
                            labelOn="Debo"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Estado</label>
                        <Switch
                            checked={formWasPay}
                            onChange={setFormWasPay}
                            labelOff="Pendiente"
                            labelOn="Pagada"
                        />
                    </div>
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1">
                            {editingDoubt ? "Guardar" : "Crear"}
                        </Button>
                        <Button type="button" variant="secondary" onClick={closeModal}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

function DoubtCard({
    doubt,
    onEdit,
    onDelete,
    onTogglePaid,
}: {
    doubt: Doubt
    onEdit: (d: Doubt) => void
    onDelete: (id: string) => void
    onTogglePaid: (d: Doubt) => void
}) {
    return (
        <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className={`font-medium ${doubt.wasPay ? "line-through text-muted" : ""}`}>
                            {doubt.toWho}
                        </h3>
                        {doubt.wallet && (
                            <span className="text-xs bg-secondary text-muted px-2 py-0.5 rounded">
                                {doubt.wallet.name}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-muted">
                        {doubt.doubt ? "Le debo" : "Me debe"}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className={`font-bold text-lg ${doubt.doubt ? "text-danger" : "text-success"}`}>
                    S/ {doubt.amount.toFixed(2)}
                </span>
                <div className="flex items-center gap-3">
                    <Switch
                        checked={doubt.wasPay}
                        onChange={() => onTogglePaid(doubt)}
                        labelOff="Pendiente"
                        labelOn="Pagada"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="teal" size="sm" onClick={() => onEdit(doubt)} title="Editar">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => onDelete(doubt.id)} title="Eliminar">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
