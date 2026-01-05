"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Switch } from "@/app/components/ui/Switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/Tabs"
import RecordsList from "@/app/components/RecordsList"
import BalanceAdjustments from "@/app/components/BalanceAdjustments"

interface Tag {
    id: string
    name: string
}

interface Record {
    id: string
    name: string
    price: number | null
    notes: string | null
    buyDate: string | null
    isIncome: boolean
    isGift: boolean
    tags: Tag[]
}

export default function RecordsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isBalanceAdjustmentsOpen, setIsBalanceAdjustmentsOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState<Record | null>(null)
    const [refreshTrigger, setRefreshTrigger] = useState(0)
    const [tags, setTags] = useState<Tag[]>([])

    // Form state
    const [formName, setFormName] = useState("")
    const [formPrice, setFormPrice] = useState("")
    const [formNotes, setFormNotes] = useState("")
    const [formBuyDate, setFormBuyDate] = useState("")
    const [formIsIncome, setFormIsIncome] = useState(false)
    const [formIsGift, setFormIsGift] = useState(false)
    const [formTagIds, setFormTagIds] = useState<string[]>([])

    const fetchTags = async () => {
        const res = await fetch("/api/tags")
        const data = await res.json()
        setTags(data)
    }

    const openModal = (record?: Record) => {
        if (record) {
            setEditingRecord(record)
            setFormName(record.name)
            setFormPrice(record.price ? Math.abs(record.price).toString() : "")
            setFormNotes(record.notes || "")
            setFormBuyDate(record.buyDate ? record.buyDate.split("T")[0] : "")
            setFormIsIncome(record.isIncome)
            setFormIsGift(record.isGift)
            setFormTagIds(record.tags.map((t) => t.id))
        } else {
            setEditingRecord(null)
            setFormName("")
            setFormPrice("")
            setFormNotes("")
            setFormBuyDate("")
            setFormIsIncome(false)
            setFormIsGift(false)
            setFormTagIds([])
        }
        fetchTags()
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingRecord(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            name: formName,
            price: formPrice ? parseFloat(formPrice) : null,
            notes: formNotes || null,
            buyDate: formBuyDate || null,
            isIncome: formIsIncome,
            isGift: formIsGift,
            tagIds: formTagIds,
        }

        if (editingRecord) {
            await fetch(`/api/records/${editingRecord.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        } else {
            await fetch("/api/records", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        }

        closeModal()
        setRefreshTrigger(prev => prev + 1)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este registro?")) return
        await fetch(`/api/records/${id}`, { method: "DELETE" })
        setRefreshTrigger(prev => prev + 1)
    }

    const toggleFormTag = (tagId: string) => {
        setFormTagIds((prev) =>
            prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
        )
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h1 className="text-2xl font-bold">Registros</h1>
                <Button onClick={() => openModal()}>+ Nuevo registro</Button>
            </div>

            <Tabs defaultValue="expenses">
                <div className="flex justify-between items-center mb-4">
                    <TabsList>
                        <TabsTrigger value="expenses">Gastos</TabsTrigger>
                        <TabsTrigger value="income">Ingresos</TabsTrigger>
                    </TabsList>

                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setIsBalanceAdjustmentsOpen(true)}
                        className="flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Ajustes
                    </Button>
                </div>

                <TabsContent value="expenses">
                    <RecordsList
                        isIncome={false}
                        onEdit={openModal}
                        onDelete={handleDelete}
                        refreshTrigger={refreshTrigger}
                    />
                </TabsContent>

                <TabsContent value="income">
                    <RecordsList
                        isIncome={true}
                        onEdit={openModal}
                        onDelete={handleDelete}
                        refreshTrigger={refreshTrigger}
                    />
                </TabsContent>
            </Tabs>

            {/* Record Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingRecord ? "Editar registro" : "Nuevo registro"}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                    />
                    <Input
                        label="Precio"
                        type="number"
                        step="0.01"
                        value={formPrice}
                        onChange={(e) => setFormPrice(e.target.value)}
                    />
                    <Input
                        label="Fecha de compra"
                        type="date"
                        value={formBuyDate}
                        onChange={(e) => setFormBuyDate(e.target.value)}
                    />
                    <Textarea
                        label="Notas"
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        rows={3}
                    />
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Tipo</label>
                        <Switch
                            checked={formIsIncome}
                            onChange={setFormIsIncome}
                            labelOff="Gasto"
                            labelOn="Ingreso"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">¿Es regalo?</label>
                        <Switch
                            checked={formIsGift}
                            onChange={setFormIsGift}
                            labelOff="No"
                            labelOn="Sí"
                        />
                    </div>
                    {tags.length > 0 && (
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Categorías</label>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <button
                                        key={tag.id}
                                        type="button"
                                        onClick={() => toggleFormTag(tag.id)}
                                        className={`px-3 py-1 rounded-full text-sm transition-colors ${formTagIds.includes(tag.id)
                                            ? "bg-primary text-background"
                                            : "bg-secondary text-foreground border border-border"
                                            }`}
                                    >
                                        {tag.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1">
                            {editingRecord ? "Guardar" : "Crear"}
                        </Button>
                        <Button type="button" variant="secondary" onClick={closeModal}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Modal>

            {/* Balance Adjustments Modal */}
            <BalanceAdjustments
                isOpen={isBalanceAdjustmentsOpen}
                onClose={() => setIsBalanceAdjustmentsOpen(false)}
            />
        </div>
    )
}
