"use client"

import { useState, useEffect } from "react"
import { Card } from "@/app/components/ui/Card"
import { Select } from "@/app/components/ui/Select"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

interface DailyData {
    day: number
    income: number
    expense: number
}

interface StatsData {
    dailyData: DailyData[]
    availableMonths: string[]
    totals: {
        income: number
        expense: number
        balance: number
    }
}

const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export default function StatsPage() {
    const [data, setData] = useState<StatsData | null>(null)
    const [selectedMonth, setSelectedMonth] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const fetchStats = async (yearMonth?: string) => {
        setIsLoading(true)
        const params = new URLSearchParams()

        if (yearMonth) {
            const [year, month] = yearMonth.split("-")
            params.set("year", year)
            params.set("month", month)
        }

        const res = await fetch(`/api/stats?${params}`)
        const statsData = await res.json()
        setData(statsData)

        // Si no hay mes seleccionado, usar el primero disponible o el actual
        if (!selectedMonth && statsData.availableMonths.length > 0) {
            setSelectedMonth(statsData.availableMonths[0])
        }

        setIsLoading(false)
    }

    useEffect(() => {
        fetchStats()
    }, [])

    useEffect(() => {
        if (selectedMonth) {
            fetchStats(selectedMonth)
        }
    }, [selectedMonth])

    const formatMonthLabel = (yearMonth: string) => {
        const [year, month] = yearMonth.split("-")
        return `${MONTH_NAMES[parseInt(month) - 1]} ${year}`
    }

    const monthOptions = data?.availableMonths.map((m) => ({
        value: m,
        label: formatMonthLabel(m),
    })) || []

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h1 className="text-2xl font-bold">Estadísticas</h1>

                {monthOptions.length > 0 && (
                    <div className="w-full sm:w-64">
                        <Select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            options={monthOptions}
                        />
                    </div>
                )}
            </div>

            {isLoading ? (
                <Card className="text-center text-muted py-12">Cargando...</Card>
            ) : !data || data.availableMonths.length === 0 ? (
                <Card className="text-center text-muted py-12">
                    No hay registros con fecha de compra para mostrar estadísticas.
                </Card>
            ) : (
                <>
                    {/* Totales del mes */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-muted mb-1">Ingresos</p>
                                <p className="text-2xl font-bold text-success">
                                    +{data.totals.income.toFixed(2)}
                                </p>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-muted mb-1">Gastos</p>
                                <p className="text-2xl font-bold text-danger">
                                    -{data.totals.expense.toFixed(2)}
                                </p>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-muted mb-1">Balance</p>
                                <p className={`text-2xl font-bold ${data.totals.balance >= 0 ? "text-success" : "text-danger"}`}>
                                    {data.totals.balance >= 0 ? "+" : ""}{data.totals.balance.toFixed(2)}
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Gráfico */}
                    <Card>
                        <h2 className="text-lg font-semibold mb-4">
                            {selectedMonth && formatMonthLabel(selectedMonth)}
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data.dailyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                                    <XAxis
                                        dataKey="day"
                                        stroke="var(--color-muted)"
                                        tick={{ fill: "var(--color-muted)" }}
                                    />
                                    <YAxis
                                        stroke="var(--color-muted)"
                                        tick={{ fill: "var(--color-muted)" }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "var(--color-card)",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "8px",
                                        }}
                                        labelStyle={{ color: "var(--color-foreground)" }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="income"
                                        name="Ingresos"
                                        stroke="#22c55e"
                                        strokeWidth={2}
                                        dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="expense"
                                        name="Gastos"
                                        stroke="#ef4444"
                                        strokeWidth={2}
                                        dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </>
            )}
        </div>
    )
}
