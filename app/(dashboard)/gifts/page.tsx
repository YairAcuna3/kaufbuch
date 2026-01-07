"use client"

import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"

interface Group {
    id: string
    name: string
}

interface Gift {
    id: string
    name: string
    price: number | null
    toWho: string | null
    notes: string | null
    order: number
    groupId: string | null
    group: Group | null
}

export default function GiftsPage() {
    const [gifts, setGifts] = useState<Gift[]>([])
    const [groups, setGroups] = useState<Group[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
    const [editingGift, setEditingGift] = useState<Gift | null>(null)

    const [formName, setFormName] = useState("")
    const [formPrice, setFormPrice] = useState("")
    const [formToWho, setFormToWho] = useState("")
    const [formNotes, setFormNotes] = useState("")
    const [formGroupId, setFormGroupId] = useState<string | null>(null)
    const [newGroupName, setNewGroupName] = useState("")

    const fetchData = async () => {
        const res = await fetch("/api/gifts")
        const data = await res.json()
        setGifts(data.gifts)
        setGroups(data.groups)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const openModal = (gift?: Gift) => {
        if (gift) {
            setEditingGift(gift)
            setFormName(gift.name)
            setFormPrice(gift.price?.toString() || "")
            setFormToWho(gift.toWho || "")
            setFormNotes(gift.notes || "")
            setFormGroupId(gift.groupId)
        } else {
            setEditingGift(null)
            setFormName("")
            setFormPrice("")
            setFormToWho("")
            setFormNotes("")
            setFormGroupId(null)
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingGift(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            name: formName,
            price: formPrice ? parseFloat(formPrice) : null,
            toWho: formToWho || null,
            notes: formNotes || null,
            groupId: formGroupId,
        }

        if (editingGift) {
            await fetch(`/api/gifts/${editingGift.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        } else {
            await fetch("/api/gifts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        }

        closeModal()
        fetchData()
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este regalo?")) return
        await fetch(`/api/gifts/${id}`, { method: "DELETE" })
        fetchData()
    }

    const handleCreateGroup = async () => {
        if (!newGroupName.trim()) return
        await fetch("/api/groups", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newGroupName, type: "gift" }),
        })
        setNewGroupName("")
        setIsGroupModalOpen(false)
        fetchData()
    }

    const handleDeleteGroup = async (id: string) => {
        if (!confirm("¿Eliminar este grupo?")) return
        await fetch(`/api/groups/${id}`, { method: "DELETE" })
        fetchData()
    }

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return

        const sourceGroupId = result.source.droppableId === "ungrouped" ? null : result.source.droppableId
        const destGroupId = result.destination.droppableId === "ungrouped" ? null : result.destination.droppableId

        // Obtener items del grupo origen ordenados por su posición actual en el render
        const sourceItems = gifts
            .filter(g => g.groupId === sourceGroupId)
            .map(g => ({ ...g }))

        // Obtener items del grupo destino
        const destItems = sourceGroupId === destGroupId
            ? sourceItems
            : gifts.filter(g => g.groupId === destGroupId).map(g => ({ ...g }))

        // Remover el item del origen
        const [movedItem] = sourceItems.splice(result.source.index, 1)
        movedItem.groupId = destGroupId

        // Insertar en el destino
        if (sourceGroupId === destGroupId) {
            sourceItems.splice(result.destination.index, 0, movedItem)
        } else {
            destItems.splice(result.destination.index, 0, movedItem)
        }

        // Reconstruir el array completo de gifts
        const otherGifts = gifts.filter(g =>
            g.groupId !== sourceGroupId && g.groupId !== destGroupId
        )

        const updatedGifts = sourceGroupId === destGroupId
            ? [...otherGifts, ...sourceItems]
            : [...otherGifts, ...sourceItems, ...destItems]

        // Actualizar estado inmediatamente (optimistic update)
        setGifts(updatedGifts)

        // Preparar items para enviar al servidor
        const itemsToUpdate = sourceGroupId === destGroupId
            ? sourceItems.map((item, index) => ({
                id: item.id,
                order: index,
                groupId: item.groupId,
            }))
            : [
                ...sourceItems.map((item, index) => ({
                    id: item.id,
                    order: index,
                    groupId: item.groupId,
                })),
                ...destItems.map((item, index) => ({
                    id: item.id,
                    order: index,
                    groupId: item.groupId,
                }))
            ]

        try {
            await fetch("/api/gifts/reorder", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: itemsToUpdate }),
            })
        } catch (error) {
            console.error("Error al reordenar:", error)
            fetchData()
        }
    }

    const ungroupedGifts = gifts.filter((g) => !g.groupId)
    const totalPrice = gifts.reduce((sum, gift) => sum + (gift.price || 0), 0)

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Regalos</h1>
                    <span className="text-lg font-semibold text-primary">Total: S/ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setIsGroupModalOpen(true)}>
                        + Grupo
                    </Button>
                    <Button onClick={() => openModal()}>+ Nuevo regalo</Button>
                </div>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-muted">Sin grupo</h2>
                    <Droppable droppableId="ungrouped">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`min-h-[100px] p-3 rounded-xl border-2 border-dashed transition-colors ${snapshot.isDraggingOver ? "border-primary bg-primary-muted" : "border-border"
                                    }`}
                            >
                                {ungroupedGifts.length === 0 && !snapshot.isDraggingOver && (
                                    <p className="text-muted text-center py-8">Arrastra regalos aquí o crea uno nuevo</p>
                                )}
                                {ungroupedGifts.map((gift, index) => (
                                    <Draggable key={gift.id} draggableId={gift.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`mb-2 ${snapshot.isDragging ? "opacity-80" : ""}`}
                                            >
                                                <GiftCard gift={gift} onEdit={openModal} onDelete={handleDelete} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>

                {groups.map((group) => {
                    const groupGifts = gifts.filter((g) => g.groupId === group.id)
                    return (
                        <div key={group.id} className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-lg font-semibold">{group.name}</h2>
                                <Button variant="ghost" size="sm" onClick={() => handleDeleteGroup(group.id)}>
                                    Eliminar grupo
                                </Button>
                            </div>
                            <Droppable droppableId={group.id}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`min-h-[100px] p-3 rounded-xl border-2 border-dashed transition-colors ${snapshot.isDraggingOver ? "border-primary bg-primary-muted" : "border-border"
                                            }`}
                                    >
                                        {groupGifts.length === 0 && !snapshot.isDraggingOver && (
                                            <p className="text-muted text-center py-8">Arrastra regalos a este grupo</p>
                                        )}
                                        {groupGifts.map((gift, index) => (
                                            <Draggable key={gift.id} draggableId={gift.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`mb-2 ${snapshot.isDragging ? "opacity-80" : ""}`}
                                                    >
                                                        <GiftCard gift={gift} onEdit={openModal} onDelete={handleDelete} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    )
                })}
            </DragDropContext>

            <Modal isOpen={isModalOpen} onClose={closeModal} title={editingGift ? "Editar regalo" : "Nuevo regalo"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="Nombre" value={formName} onChange={(e) => setFormName(e.target.value)} required />
                    <Input label="Para quién" value={formToWho} onChange={(e) => setFormToWho(e.target.value)} />
                    <Input label="Precio" type="number" step="0.01" value={formPrice} onChange={(e) => setFormPrice(e.target.value)} />
                    <Textarea label="Notas" value={formNotes} onChange={(e) => setFormNotes(e.target.value)} rows={3} />
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Grupo</label>
                        <select
                            value={formGroupId || ""}
                            onChange={(e) => setFormGroupId(e.target.value || null)}
                            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground"
                        >
                            <option value="">Sin grupo</option>
                            {groups.map((g) => (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1">{editingGift ? "Guardar" : "Crear"}</Button>
                        <Button type="button" variant="secondary" onClick={closeModal}>Cancelar</Button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isGroupModalOpen} onClose={() => setIsGroupModalOpen(false)} title="Nuevo grupo">
                <div className="space-y-4">
                    <Input label="Nombre del grupo" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} />
                    <div className="flex gap-3">
                        <Button onClick={handleCreateGroup} className="flex-1">Crear</Button>
                        <Button variant="secondary" onClick={() => setIsGroupModalOpen(false)}>Cancelar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

function GiftCard({ gift, onEdit, onDelete }: { gift: Gift; onEdit: (g: Gift) => void; onDelete: (id: string) => void }) {
    return (
        <Card className="cursor-grab active:cursor-grabbing">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-muted">⋮⋮</span>
                        <h3 className="font-medium truncate">{gift.name}</h3>
                        {gift.toWho && <span className="text-sm text-muted">→ {gift.toWho}</span>}
                    </div>
                    {gift.notes && <p className="text-sm text-muted mt-1 ml-5 line-clamp-2">{gift.notes}</p>}
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 ml-5 sm:ml-0">
                    {gift.price !== null && <span className="font-bold text-primary whitespace-nowrap">S/ {gift.price.toFixed(2)}</span>}
                    <div className="flex gap-1.5">
                        <Button variant="teal" size="sm" onClick={() => onEdit(gift)} title="Editar">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => onDelete(gift.id)} title="Eliminar">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
