"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Button } from "@/app/components/ui/Button"
import { Modal } from "@/app/components/ui/Modal"
import { Switch } from "@/app/components/ui/Switch"
import { Select } from "@/app/components/ui/Select"
import { formatDate } from "@/app/lib/dateUtils"

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
    tags: Tag[]
}

export default function RecordsPage() {
    const [records, setRecords] = useState<Record[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingRecord, setEditingRecord] = useState<Record | null>(null)
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState("desc")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [newTagName, setNewTagName] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)

    // Form state
    const [formName, setFormName] = useState("")
    const [formPrice, setFormPrice] = useState("")
    const [formNotes, setFormNotes] = useState("")
    const [formBuyDate, setFormBuyDate] = useState("")
    const [formIsIncome, setFormIsIncome] = useState(false)
    const [formTagIds, setFormTagIds] = useState<string[]>([])

    const fetchRecords = useCallback(async () => {
        const params = new URLSearchParams()
        if (search) params.set("search", search)
        params.set("sortBy", sortBy)
        params.set("sortOrder", sortOrder)
        if (selectedTags.length) params.set("tags", selectedTags.join(","))
        params.set("page", currentPage.toString())

        const res = await fetch(`/api/records?${params}`)
        const data = await res.json()
        setRecords(data.records)
        setTotalPages(data.pagination.totalPages)
        setTotal(data.pagination.total)
        setTotalBalance(data.totalBalance)
    }, [search, sortBy, sortOrder, selectedTags, currentPage])

    const fetchTags = async () => {
        const res = await fetch("/api/tags")
        const data = await res.json()
        setTags(data)
    }

    useEffect(() => {
        fetchRecords()
        fetchTags()
    }, [fetchRecords])

    useEffect(() => {
        setCurrentPage(1)
    }, [search, sortBy, sortOrder, selectedTags])

    const openModal = (record?: Record) => {
        if (record) {
            setEditingRecord(record)
            setFormName(record.name)
            setFormPrice(record.price ? Math.abs(record.price).toString() : "")
            setFormNotes(record.notes || "")
            setFormBuyDate(record.buyDate ? record.buyDate.split("T")[0] : "")
            setFormIsIncome(record.isIncome)
            setFormTagIds(record.tags.map((t) => t.id))
        } else {
            setEditingRecord(null)
            setFormName("")
            setFormPrice("")
            setFormNotes("")
            setFormBuyDate("")
            setFormIsIncome(false)
            setFormTagIds([])
        }
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
        fetchRecords()
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este registro?")) return
        await fetch(`/api/records/${id}`, { method: "DELETE" })
        fetchRecords()
    }

    const handleCreateTag = async () => {
        if (!newTagName.trim()) return
        const res = await fetch("/api/tags", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newTagName }),
        })
        const tag = await res.json()
        setTags([...tags, tag])
        setNewTagName("")
    }

    const toggleFilterTag = (tagId: string) => {
        setSelectedTags((prev) =>
            prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
        )
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

            {/* Filters */}
            <Card className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Input
                        placeholder="Buscar por nombre o notas..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        options={[
                            { value: "createdAt", label: "Fecha de creación" },
                            { value: "buyDate", label: "Fecha de compra" },
                            { value: "name", label: "Nombre" },
                            { value: "price", label: "Precio" },
                        ]}
                    />
                    <Select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        options={[
                            { value: "desc", label: "Mayor a menor / Z-A" },
                            { value: "asc", label: "Menor a mayor / A-Z" },
                        ]}
                    />
                    <div className="flex items-center gap-2">
                        <Input
                            placeholder="Nueva categoría"
                            value={newTagName}
                            onChange={(e) => setNewTagName(e.target.value)}
                            className="flex-1"
                        />
                        <Button onClick={handleCreateTag} size="sm">+</Button>
                    </div>
                </div>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <button
                                key={tag.id}
                                onClick={() => toggleFilterTag(tag.id)}
                                className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag.id)
                                    ? "bg-primary text-background"
                                    : "bg-secondary text-foreground border border-border hover:border-primary"
                                    }`}
                            >
                                {tag.name}
                            </button>
                        ))}
                    </div>
                )}
            </Card>

            {/* Summary */}
            <div className="mb-6 p-4 bg-card border border-border rounded-xl">
                <span className="text-muted">Balance total: </span>
                <span className={`text-xl font-bold ${totalBalance >= 0 ? "text-success" : "text-danger"}`}>
                    {totalBalance >= 0 ? "+" : ""}{totalBalance.toFixed(2)}
                </span>
                <span className="text-muted ml-4">({total} registros)</span>
            </div>

            {/* Records list */}
            <div className="space-y-3">
                {records.length === 0 ? (
                    <Card className="text-center text-muted py-12">
                        No hay registros. ¡Crea el primero!
                    </Card>
                ) : (
                    records.map((record) => (
                        <Card key={record.id}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-medium truncate">{record.name}</h3>
                                        {record.tags.map((tag) => (
                                            <span
                                                key={tag.id}
                                                className="px-2 py-0.5 bg-primary-muted text-primary text-xs rounded-full"
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    {record.notes && (
                                        <p className="text-sm text-muted mt-1 line-clamp-2">{record.notes}</p>
                                    )}
                                    {record.buyDate && (
                                        <p className="text-xs text-muted mt-1">
                                            Compra: {formatDate(record.buyDate)}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-3">
                                    <span
                                        className={`font-bold whitespace-nowrap ${record.price && record.price >= 0 ? "text-success" : "text-danger"
                                            }`}
                                    >
                                        {record.price !== null
                                            ? `${record.price >= 0 ? "+" : ""}${record.price.toFixed(2)}`
                                            : "-"}
                                    </span>
                                    <div className="flex gap-1.5">
                                        <Button variant="teal" size="sm" onClick={() => openModal(record)} className="px-2 sm:px-3">
                                            Editar
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(record.id)} className="px-2 sm:px-3">
                                            Eliminar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </Button>
                    <span className="text-sm text-muted px-4">
                        Página {currentPage} de {totalPages}
                    </span>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente
                    </Button>
                </div>
            )}

            {/* Modal */}
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
        </div>
    )
}
