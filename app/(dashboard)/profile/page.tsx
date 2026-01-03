"use client"

import { useState, useEffect } from "react"
import { Card } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Textarea } from "@/app/components/ui/Textarea"
import { Button } from "@/app/components/ui/Button"

interface User {
    id: string
    name: string
    bio: string | null
    photo: string | null
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null)
    const [bio, setBio] = useState("")
    const [photo, setPhoto] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setBio(data.bio || "")
                setPhoto(data.photo || "")
            })
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const res = await fetch("/api/user", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bio, photo }),
        })

        if (res.ok) {
            const updated = await res.json()
            setUser(updated)
            setMessage("Perfil actualizado correctamente")
        } else {
            setMessage("Error al actualizar el perfil")
        }

        setLoading(false)
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-muted">Cargando...</div>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Editar Perfil</h1>

            <Card>
                <div className="flex items-center gap-6 mb-6">
                    {photo ? (
                        <img
                            src={photo}
                            alt="Foto de perfil"
                            className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-primary-muted flex items-center justify-center border-2 border-primary">
                            <span className="text-primary text-3xl font-bold">
                                {user.name[0]?.toUpperCase()}
                            </span>
                        </div>
                    )}
                    <div>
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-muted">Usuario desde hace poco</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="URL de foto de perfil"
                        type="url"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        placeholder="https://ejemplo.com/mi-foto.jpg"
                    />

                    <Textarea
                        label="Biografía"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Cuéntanos algo sobre ti..."
                        rows={4}
                    />

                    {message && (
                        <p className={`text-sm ${message.includes("Error") ? "text-danger" : "text-success"}`}>
                            {message}
                        </p>
                    )}

                    <Button type="submit" disabled={loading}>
                        {loading ? "Guardando..." : "Guardar cambios"}
                    </Button>
                </form>
            </Card>
        </div>
    )
}
