"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

const navItems = [
    { href: "/records", label: "Registros" },
    { href: "/wishes", label: "Deseos" },
    { href: "/gifts", label: "Regalos" },
    { href: "/doubts", label: "Deudas" },
]

export function Navbar() {
    const pathname = usePathname()
    const { data: session } = useSession()

    if (!session) return null

    return (
        <nav className="bg-card border-b border-border sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/records" className="text-primary font-bold text-xl">
                            Kaufbuch
                        </Link>
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg transition-colors ${pathname === item.href
                                        ? "bg-primary-muted text-primary"
                                        : "text-muted hover:text-foreground hover:bg-secondary"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/profile"
                            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                        >
                            {session.user?.image ? (
                                <Image
                                    src={session.user.image}
                                    alt="Perfil"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full object-cover border-2 border-green-500"
                                />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-primary-muted flex items-center justify-center">
                                    <span className="text-primary text-sm font-medium">
                                        {session.user?.name?.[0]?.toUpperCase()}
                                    </span>
                                </div>
                            )}
                            <span className="hidden sm:inline">{session.user?.name}</span>
                        </Link>
                        <button
                            onClick={() => signOut({ callbackUrl: "/login" })}
                            className="text-muted hover:text-danger transition-colors"
                        >
                            Salir
                        </button>
                    </div>
                </div>
                {/* Mobile nav */}
                <div className="md:hidden flex gap-1 pb-3 overflow-x-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${pathname === item.href
                                ? "bg-primary-muted text-primary"
                                : "text-muted hover:text-foreground hover:bg-secondary"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
