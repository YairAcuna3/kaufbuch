"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import { Select } from "@/app/components/ui/Select"
import { formatDate } from "@/app/lib/dateUtils"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

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
    wallet?: { id: string; name: string }
}

interface RecordsListProps {
    isIncome: boolean
    onEdit: (record: Record) => void
    onDelete: (id: string) => void
    refreshTrigger: number
    walletId?: string
}

export default function RecordsList({ isIncome, onEdit, onDelete, refreshTrigger, walletId }: RecordsListProps) {
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
    const [walletBalance, setWalletBalance] = useState<number | null>(null)
    const [showBalance, setShowBalance] = useState(false)

    const fetchRecords = useCallback(async () => {
        const params = new URLSearchParams()
        if (search) params.set("search", search)
        params.set("sortBy", sortBy)
        params.set("sortOrder", sortOrder)
        if (selectedTags.length) params.set("tags", selectedTags.join(","))
        params.set("page", currentPage.toString())
        params.set("pageSize", pageSize.toString())
        params.set("isIncome", isIncome.toString())
        if (walletId) params.set("walletId", walletId)

        const res = await fetch(`/api/records?${params}`)
        const data = await res.json()
        setRecords(data.records)
        setTotalPages(data.pagination.totalPages)
        setTotal(data.pagination.total)
        setTotalBalance(data.totalBalance)
        setOverallBalance(data.overallBalance)
        setWalletBalance(data.walletBalance)
    }, [search, sortBy, sortOrder, selectedTags, currentPage, pageSize, isIncome, walletId])

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
    }, [search, sortBy, sortOrder, selectedTags, pageSize, walletId])

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
                <div className="flex flex-col gap-3">
                    {/* Saldo total - oculto por defecto */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-border sm:border-b-0 sm:pb-0">
                        <div className="flex items-center gap-2">
                            <span className="text-sm sm:text-base text-muted">Saldo total:</span>
                            {showBalance ? (
                                <span className={`text-xl sm:text-2xl font-bold ${overallBalance >= 0 ? "text-success" : "text-danger"}`}>
                                    {overallBalance >= 0 ? "+" : ""}{overallBalance.toFixed(2)}
                                </span>
                            ) : (
                                <span className="text-xl sm:text-2xl font-bold text-muted">••••••</span>
                            )}
                            <button
                                type="button"
                                onClick={() => setShowBalance(!showBalance)}
                                className="text-muted hover:text-foreground transition-colors p-1"
                                title={showBalance ? "Ocultar saldo" : "Mostrar saldo"}
                            >
                                {showBalance ? (
                                    <AiOutlineEyeInvisible className="w-5 h-5" />
                                ) : (
                                    <AiOutlineEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        {/* Saldo de wallet seleccionada - siempre visible */}
                        {walletBalance !== null && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base text-muted">Wallet:</span>
                                <span className={`text-lg sm:text-xl font-bold ${walletBalance >= 0 ? "text-success" : "text-danger"}`}>
                                    {walletBalance >= 0 ? "+" : ""}{walletBalance.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Total específico del tipo - solo visible cuando hay búsqueda */}
                    {search && showBalance && (
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 pt-2">
                            <div className="flex items-baseline gap-2">
                                <span className="text-sm sm:text-base text-muted">
                                    {isIncome ? "Total ingresos:" : "Total gastos:"}
                                </span>
                                <span className={`text-lg sm:text-xl font-bold ${totalBalance >= 0 ? "text-success" : "text-danger"}`}>
                                    {totalBalance >= 0 ? "+" : ""}{totalBalance.toFixed(2)}
                                </span>
                            </div>
                            <span className="text-xs sm:text-sm text-muted">({total} registros)</span>
                        </div>
                    )}
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
                                        {record.wallet && (
                                            <span className="px-2 py-0.5 bg-secondary text-muted text-xs rounded-full">
                                                {record.wallet.name}
                                            </span>
                                        )}
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
                                        <Button variant="teal" size="sm" onClick={() => onEdit(record)} title="Editar">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => onDelete(record.id)} title="Eliminar">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
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
