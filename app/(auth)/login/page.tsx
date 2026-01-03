"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

export default function LoginPage() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        const result = await signIn("credentials", {
            name,
            password,
            redirect: false,
        })

        if (result?.error) {
            setError("Credenciales inválidas")
            setLoading(false)
        } else {
            router.push("/records")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Kaufbuch</h1>
                    <p className="text-muted">Inicia sesión en tu cuenta</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre de usuario"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre de usuario"
                        required
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Tu contraseña"
                        required
                    />

                    {error && (
                        <p className="text-danger text-sm text-center">{error}</p>
                    )}

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? "Iniciando..." : "Iniciar sesión"}
                    </Button>
                </form>

                <p className="text-center text-muted mt-6">
                    ¿No tienes cuenta?{" "}
                    <Link href="/register" className="text-primary hover:underline">
                        Regístrate
                    </Link>
                </p>
            </Card>
        </div>
    )
}
