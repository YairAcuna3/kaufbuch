"use client"

import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Switch } from "@/app/components/ui/Switch"
import { WalletSelect } from "@/app/components/ui/WalletSelect"

interface Group {
    id: string
    name: string
}

interface Wish {
    id: string
    name: string
    price: number | null
    notes: string | null
    link: string | null
    order: number
    groupId: string | null
    group: Group | null
}

interface Wallet {
    id: string
    name: string
    isDefault: boolean
    balance: number
    parentId: string | null
    children?: Wallet[]
}

export default function WishesPage() {
    const [wishes, setWishes] = useState<Wish[]>([])
    const [groups, setGroups] = useState<Group[]>([])
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
    const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
    const [editingWish, setEditingWish] = useState<Wish | null>(null)
    const [purchasingWish, setPurchasingWish] = useState<Wish | null>(null)

    const [formName, setFormName] = useState("")
    const [formPrice, setFormPrice] = useState("")
    const [formNotes, setFormNotes] = useState("")
    const [formLink, setFormLink] = useState("")
    const [formGroupId, setFormGroupId] = useState<string | null>(null)
    const [newGroupName, setNewGroupName] = useState("")
    const [editingGroup, setEditingGroup] = useState<Group | null>(null)
    const [editGroupName, setEditGroupName] = useState("")
    const [isReorderGroupsModalOpen, setIsReorderGroupsModalOpen] = useState(false)
    const [reorderGroups, setReorderGroups] = useState<Group[]>([])

    // Purchase form state
    const [purchasePrice, setPurchasePrice] = useState("")
    const [purchaseWalletId, setPurchaseWalletId] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [purchaseNotes, setPurchaseNotes] = useState("")
    const [purchaseIsIncome, setPurchaseIsIncome] = useState(false)
    const [purchaseIsGift, setPurchaseIsGift] = useState(false)

    const fetchData = async () => {
        const res = await fetch("/api/wishes")
        const data = await res.json()
        setWishes(data.wishes)
        setGroups(data.groups)
    }

    const fetchWallets = async () => {
        const res = await fetch("/api/wallets")
        const data = await res.json()
        setWallets(data)
        const defaultWallet = data.find((w: Wallet) => w.isDefault)
        if (defaultWallet) {
            setPurchaseWalletId(defaultWallet.id)
        }
    }

    useEffect(() => {
        fetchData()
        fetchWallets()
    }, [])

    const openModal = (wish?: Wish) => {
        if (wish) {
            setEditingWish(wish)
            setFormName(wish.name)
            setFormPrice(wish.price?.toString() || "")
            setFormNotes(wish.notes || "")
            setFormLink(wish.link || "")
            setFormGroupId(wish.groupId)
        } else {
            setEditingWish(null)
            setFormName("")
            setFormPrice("")
            setFormNotes("")
            setFormLink("")
            setFormGroupId(null)
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingWish(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            name: formName,
            price: formPrice ? parseFloat(formPrice) : null,
            notes: formNotes || null,
            link: formLink || null,
            groupId: formGroupId,
        }

        if (editingWish) {
            await fetch(`/api/wishes/${editingWish.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        } else {
            await fetch("/api/wishes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
        }

        closeModal()
        fetchData()
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este deseo?")) return
        await fetch(`/api/wishes/${id}`, { method: "DELETE" })
        fetchData()
    }

    const openPurchaseModal = (wish: Wish) => {
        setPurchasingWish(wish)
        setPurchasePrice(wish.price?.toString() || "")
        setPurchaseDate(new Date().toISOString().split("T")[0])
        setPurchaseNotes(wish.notes || "")
        setPurchaseIsIncome(false)
        setPurchaseIsGift(false)
        // Set default wallet
        const defaultWallet = wallets.find((w: Wallet) => w.isDefault)
        if (defaultWallet) {
            setPurchaseWalletId(defaultWallet.id)
        }
        setIsPurchaseModalOpen(true)
    }

    const closePurchaseModal = () => {
        setIsPurchaseModalOpen(false)
        setPurchasingWish(null)
    }

    const handlePurchase = async () => {
        if (!purchasingWish) return

        await fetch(`/api/wishes/${purchasingWish.id}/purchase`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                walletId: purchaseWalletId || null,
                price: purchasePrice ? parseFloat(purchasePrice) : null,
                buyDate: purchaseDate || null,
                notes: purchaseNotes || null,
                isIncome: purchaseIsIncome,
                isGift: purchaseIsGift,
            }),
        })

        closePurchaseModal()
        fetchData()
    }

    const handleCreateGroup = async () => {
        if (!newGroupName.trim()) return
        await fetch("/api/groups", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newGroupName, type: "wish" }),
        })
        setNewGroupName("")
        setIsGroupModalOpen(false)
        fetchData()
    }

    const handleDeleteGroup = async (id: string) => {
        if (!confirm("¿Eliminar este grupo? Los deseos se moverán a 'Sin grupo'")) return
        await fetch(`/api/groups/${id}`, { method: "DELETE" })
        fetchData()
    }

    const openEditGroup = (group: Group) => {
        setEditingGroup(group)
        setEditGroupName(group.name)
    }

    const handleEditGroup = async () => {
        if (!editingGroup || !editGroupName.trim()) return
        await fetch(`/api/groups/${editingGroup.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: editGroupName }),
        })
        setEditingGroup(null)
        setEditGroupName("")
        fetchData()
    }

    const openReorderGroupsModal = () => {
        setReorderGroups([...groups])
        setIsReorderGroupsModalOpen(true)
    }

    const onGroupDragEnd = async (result: DropResult) => {
        if (!result.destination) return
        const items = Array.from(reorderGroups)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setReorderGroups(items)
    }

    const handleSaveGroupOrder = async () => {
        const itemsToUpdate = reorderGroups.map((group, index) => ({
            id: group.id,
            order: index,
        }))

        try {
            await fetch("/api/groups/reorder", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: itemsToUpdate }),
            })
            setIsReorderGroupsModalOpen(false)
            fetchData()
        } catch (error) {
            console.error("Error al reordenar grupos:", error)
        }
    }

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return

        const sourceGroupId = result.source.droppableId === "ungrouped" ? null : result.source.droppableId
        const destGroupId = result.destination.droppableId === "ungrouped" ? null : result.destination.droppableId

        // Obtener items del grupo origen ordenados por su posición actual
        const sourceItems = wishes
            .filter(w => w.groupId === sourceGroupId)
            .map(w => ({ ...w }))

        // Obtener items del grupo destino
        const destItems = sourceGroupId === destGroupId
            ? sourceItems
            : wishes.filter(w => w.groupId === destGroupId).map(w => ({ ...w }))

        // Remover el item del origen
        const [movedItem] = sourceItems.splice(result.source.index, 1)
        movedItem.groupId = destGroupId

        // Insertar en el destino
        if (sourceGroupId === destGroupId) {
            sourceItems.splice(result.destination.index, 0, movedItem)
        } else {
            destItems.splice(result.destination.index, 0, movedItem)
        }

        // Reconstruir el array completo de wishes
        const otherWishes = wishes.filter(w =>
            w.groupId !== sourceGroupId && w.groupId !== destGroupId
        )

        const updatedWishes = sourceGroupId === destGroupId
            ? [...otherWishes, ...sourceItems]
            : [...otherWishes, ...sourceItems, ...destItems]

        // Actualizar estado inmediatamente (optimistic update)
        setWishes(updatedWishes)

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
            await fetch("/api/wishes/reorder", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: itemsToUpdate }),
            })
        } catch (error) {
            console.error("Error al reordenar:", error)
            fetchData()
        }
    }

    const ungroupedWishes = wishes.filter((w) => !w.groupId)
    const totalWishes = wishes.reduce((sum, w) => sum + (w.price || 0), 0)

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Lista de Deseos</h1>
                    <span className="text-lg font-semibold text-primary">Total: S/ {totalWishes.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={openReorderGroupsModal}>
                        Ordenar grupos
                    </Button>
                    <Button variant="secondary" onClick={() => setIsGroupModalOpen(true)}>
                        + Grupo
                    </Button>
                    <Button onClick={() => openModal()}>+ Nuevo deseo</Button>
                </div>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                {/* Ungrouped */}
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
                                {ungroupedWishes.length === 0 && !snapshot.isDraggingOver && (
                                    <p className="text-muted text-center py-8">Arrastra deseos aquí o crea uno nuevo</p>
                                )}
                                {ungroupedWishes.map((wish, index) => (
                                    <Draggable key={wish.id} draggableId={wish.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`mb-2 ${snapshot.isDragging ? "opacity-80" : ""}`}
                                            >
                                                <WishCard wish={wish} onEdit={openModal} onDelete={handleDelete} onPurchase={openPurchaseModal} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>

                {/* Groups */}
                {groups.map((group) => {
                    const groupWishes = wishes.filter((w) => w.groupId === group.id)
                    return (
                        <div key={group.id} className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-lg font-semibold">{group.name}</h2>
                                    <Button variant="ghost" size="sm" onClick={() => openEditGroup(group)} title="Editar grupo">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </Button>
                                </div>
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
                                        {groupWishes.length === 0 && !snapshot.isDraggingOver && (
                                            <p className="text-muted text-center py-8">Arrastra deseos a este grupo</p>
                                        )}
                                        {groupWishes.map((wish, index) => (
                                            <Draggable key={wish.id} draggableId={wish.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`mb-2 ${snapshot.isDragging ? "opacity-80" : ""}`}
                                                    >
                                                        <WishCard wish={wish} onEdit={openModal} onDelete={handleDelete} onPurchase={openPurchaseModal} />
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

            {/* Wish Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={editingWish ? "Editar deseo" : "Nuevo deseo"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="Nombre" value={formName} onChange={(e) => setFormName(e.target.value)} required />
                    <Input label="Precio" type="number" step="0.01" value={formPrice} onChange={(e) => setFormPrice(e.target.value)} />
                    <Input label="Link" type="url" value={formLink} onChange={(e) => setFormLink(e.target.value)} placeholder="https://..." />
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
                        <Button type="submit" className="flex-1">{editingWish ? "Guardar" : "Crear"}</Button>
                        <Button type="button" variant="secondary" onClick={closeModal}>Cancelar</Button>
                    </div>
                </form>
            </Modal>

            {/* Group Modal */}
            <Modal isOpen={isGroupModalOpen} onClose={() => setIsGroupModalOpen(false)} title="Nuevo grupo">
                <div className="space-y-4">
                    <Input label="Nombre del grupo" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} />
                    <div className="flex gap-3">
                        <Button onClick={handleCreateGroup} className="flex-1">Crear</Button>
                        <Button variant="secondary" onClick={() => setIsGroupModalOpen(false)}>Cancelar</Button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={!!editingGroup} onClose={() => setEditingGroup(null)} title="Editar grupo">
                <div className="space-y-4">
                    <Input label="Nombre del grupo" value={editGroupName} onChange={(e) => setEditGroupName(e.target.value)} />
                    <div className="flex gap-3">
                        <Button onClick={handleEditGroup} className="flex-1">Guardar</Button>
                        <Button variant="secondary" onClick={() => setEditingGroup(null)}>Cancelar</Button>
                    </div>
                </div>
            </Modal>

            {/* Purchase Modal */}
            <Modal isOpen={isPurchaseModalOpen} onClose={closePurchaseModal} title="Marcar como comprado">
                <div className="space-y-4">
                    {purchasingWish && (
                        <p className="text-muted">¿Marcar &quot;{purchasingWish.name}&quot; como comprado?</p>
                    )}
                    <Input
                        label="Precio final"
                        type="number"
                        step="0.01"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        placeholder="Precio de compra"
                    />
                    <Input
                        label="Fecha de compra"
                        type="date"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                    />
                    {wallets.length > 0 && (
                        <WalletSelect
                            label="Wallet"
                            value={purchaseWalletId}
                            onChange={setPurchaseWalletId}
                            wallets={wallets}
                            showBalance={true}
                        />
                    )}
                    <Textarea
                        label="Notas"
                        value={purchaseNotes}
                        onChange={(e) => setPurchaseNotes(e.target.value)}
                        rows={3}
                    />
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Tipo</label>
                        <Switch
                            checked={purchaseIsIncome}
                            onChange={setPurchaseIsIncome}
                            labelOff="Gasto"
                            labelOn="Ingreso"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">¿Es regalo?</label>
                        <Switch
                            checked={purchaseIsGift}
                            onChange={setPurchaseIsGift}
                            labelOff="No"
                            labelOn="Sí"
                        />
                    </div>
                    <div className="flex gap-3 pt-4">
                        <Button onClick={handlePurchase} className="flex-1">Comprado</Button>
                        <Button variant="secondary" onClick={closePurchaseModal}>Cancelar</Button>
                    </div>
                </div>
            </Modal>

            {/* Reorder Groups Modal */}
            <Modal isOpen={isReorderGroupsModalOpen} onClose={() => setIsReorderGroupsModalOpen(false)} title="Ordenar grupos">
                <div className="space-y-4">
                    {reorderGroups.length === 0 ? (
                        <p className="text-muted text-center py-4">No hay grupos para ordenar</p>
                    ) : (
                        <DragDropContext onDragEnd={onGroupDragEnd}>
                            <Droppable droppableId="groups-reorder">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
                                        {reorderGroups.map((group, index) => (
                                            <Draggable key={group.id} draggableId={`group-${group.id}`} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`p-3 rounded-lg border border-border bg-card flex items-center gap-2 cursor-grab active:cursor-grabbing ${snapshot.isDragging ? "opacity-80 shadow-lg" : ""}`}
                                                    >
                                                        <span className="text-muted">⋮⋮</span>
                                                        <span className="font-medium">{group.name}</span>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    )}
                    <div className="flex gap-3 pt-4">
                        <Button onClick={handleSaveGroupOrder} className="flex-1" disabled={reorderGroups.length === 0}>Guardar</Button>
                        <Button variant="secondary" onClick={() => setIsReorderGroupsModalOpen(false)}>Cancelar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

function WishCard({ wish, onEdit, onDelete, onPurchase }: { wish: Wish; onEdit: (w: Wish) => void; onDelete: (id: string) => void; onPurchase: (w: Wish) => void }) {
    return (
        <Card className="cursor-grab active:cursor-grabbing">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-muted">⋮⋮</span>
                        <h3 className="font-medium truncate">{wish.name}</h3>
                    </div>
                    {wish.notes && <p className="text-sm text-muted mt-1 ml-5 line-clamp-2">{wish.notes}</p>}
                    {wish.link && (
                        <a href={wish.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-1 ml-5 block truncate">
                            Ver enlace
                        </a>
                    )}
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 ml-5 sm:ml-0">
                    {wish.price !== null && <span className="font-bold text-primary whitespace-nowrap">S/ {wish.price.toFixed(2)}</span>}
                    <div className="flex gap-1.5">
                        <Button variant="secondary" size="sm" onClick={() => onPurchase(wish)} title="Marcar como comprado">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </Button>
                        <Button variant="teal" size="sm" onClick={() => onEdit(wish)} title="Editar">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => onDelete(wish.id)} title="Eliminar">
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
