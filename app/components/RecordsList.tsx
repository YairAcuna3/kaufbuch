"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
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
    isGift: boolean
    tags: Tag[]
}

interface RecordsListProps {
    isIncome: boolean
    onEdit: (record: Record) => void
    onDelete: (id: string) => void
    refreshTrigger: number
}

export default function RecordsList({ isIncome, onEdit, onDelete, refreshTrigger }: RecordsListProps) {
    const [records, setRecords] = useState<Record[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("buyDate")
    const [sortOrder, setSortOrder] = useState("desc")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [newTagName, setNewTagName] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)
    const [overallBalance, setOverallBalance] = useState(0)

    const fetchRecords = useCallback(async () => {
        const params = new URLSearchParams()
        if (search) params.set("search", search)
        params.set("sortBy", sortBy)
        params.set("sortOrder", sortOrder)
        if (selectedTags.length) params.set("tags", selectedTags.join(","))
        params.set("page", currentPage.toString())
        params.set("pageSize", pageSize.toString())
        params.set("isIncome", isIncome.toString())

        const res = await fetch(`/api/records?${params}`)
        const data = await res.json()
        setRecords(data.records)
        setTotalPages(data.pagination.totalPages)
        setTotal(data.pagination.total)
        setTotalBalance(data.totalBalance)
        setOverallBalance(data.overallBalance)
    }, [search, sortBy, sortOrder, selectedTags, currentPage, pageSize, isIncome])

    const fetchTags = async () => {
        const res = await fetch("/api/tags")
        const data = await res.json()
        setTags(data)
    }

    useEffect(() => {
        fetchRecords()
        fetchTags()
    }, [fetchRecords, refreshTrigger])

    useEffect(() => {
        setCurrentPage(1)
    }, [search, sortBy, sortOrder, selectedTags, pageSize])

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

    return (
        <div>
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    {/* Saldo total - siempre visible */}
                    <div>
                        <span className="text-muted">Saldo total: </span>
                        <span className={`text-xl font-bold ${overallBalance >= 0 ? "text-success" : "text-danger"}`}>
                            {overallBalance >= 0 ? "+" : ""}{overallBalance.toFixed(2)}
                        </span>
                    </div>

                    {/* Total específico del tipo */}
                    <div className="text-right">
                        <span className="text-muted">
                            {isIncome ? "Total ingresos: " : "Total gastos: "}
                        </span>
                        <span className={`text-xl font-bold ${totalBalance >= 0 ? "text-success" : "text-danger"}`}>
                            {totalBalance >= 0 ? "+" : ""}{totalBalance.toFixed(2)}
                        </span>
                        <span className="text-muted ml-4">({total} registros)</span>
                    </div>
                </div>
            </div>

            {/* Records list */}
            <div className="space-y-3">
                {records.length === 0 ? (
                    <Card className="text-center text-muted py-12">
                        No hay {isIncome ? "ingresos" : "gastos"}. ¡Crea el primero!
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
                                            {isIncome ? "Fecha: " : "Compra: "}{formatDate(record.buyDate)}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-3">
                                    <span
                                        className={`font-bold whitespace-nowrap ${record.isGift
                                            ? "text-blue-500"
                                            : record.price && record.price >= 0
                                                ? "text-success"
                                                : "text-danger"
                                            }`}
                                    >
                                        {record.price !== null
                                            ? `${record.price >= 0 ? "+" : ""}${record.price.toFixed(2)}`
                                            : "-"}
                                    </span>
                                    <div className="flex gap-1.5">
                                        <Button variant="teal" size="sm" onClick={() => onEdit(record)} className="px-2 sm:px-3">
                                            Editar
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => onDelete(record.id)} className="px-2 sm:px-3">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Mostrar:</span>
                    <Select
                        value={pageSize.toString()}
                        onChange={(e) => setPageSize(parseInt(e.target.value))}
                        options={[
                            { value: "10", label: "10" },
                            { value: "20", label: "20" },
                            { value: "30", label: "30" },
                            { value: "50", label: "50" },
                            { value: "100", label: "100" },
                        ]}
                    />
                    <span className="text-sm text-muted">registros</span>
                </div>
                {totalPages > 1 && (
                    <div className="flex items-center gap-2">
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
            </div>
        </div>
    )
}