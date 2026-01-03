"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

export default function RegisterPage() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden")
            return
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres")
            return
        }

        setLoading(true)

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, password }),
        })

        const data = await res.json()

        if (!res.ok) {
            setError(data.error || "Error al registrar")
            setLoading(false)
            return
        }

        router.push("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Kaufbuch</h1>
                    <p className="text-muted">Crea tu cuenta</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre de usuario"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elige un nombre de usuario"
                        required
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mínimo 6 caracteres"
                        required
                    />

                    <Input
                        label="Confirmar contraseña"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repite tu contraseña"
                        required
                    />

                    {error && (
                        <p className="text-danger text-sm text-center">{error}</p>
                    )}

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? "Registrando..." : "Crear cuenta"}
                    </Button>
                </form>

                <p className="text-center text-muted mt-6">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Inicia sesión
                    </Link>
                </p>
            </Card>
        </div>
    )
}
