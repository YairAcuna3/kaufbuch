import { redirect } from "next/navigation"
import { auth } from "@/app/lib/auth"
import { Navbar } from "@/app/components/Navbar"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
        </div>
    )
}
