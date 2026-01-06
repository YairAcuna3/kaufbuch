"use client"

import { useState, useEffect } from "react"
import { Select } from "@/app/components/ui/Select"

interface Wallet {
    id: string
    name: string
    isDefault: boolean
    balance: number
}

interface WalletSelectorProps {
    value: string
    onChange: (walletId: string) => void
    label?: string
    required?: boolean
    showBalance?: boolean
}

export default function WalletSelector({
    value,
    onChange,
    label = "Wallet",
    required = false,
    showBalance = false
}: WalletSelectorProps) {
    const [wallets, setWallets] = useState<Wallet[]>([])

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const res = await fetch("/api/wallets")
                const data = await res.json()
                setWallets(data)

                // Si no hay valor seleccionado, seleccionar la default
                if (!value && data.length > 0) {
                    const defaultWallet = data.find((w: Wallet) => w.isDefault)
                    if (defaultWallet) {
                        onChange(defaultWallet.id)
                    }
                }
            } catch (error) {
                console.error("Error fetching wallets:", error)
            }
        }
        fetchWallets()
    }, [])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount)
    }

    return (
        <Select
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            options={wallets.map(w => ({
                value: w.id,
                label: showBalance
                    ? `${w.name} (${formatCurrency(w.balance)})`
                    : w.name
            }))}
        />
    )
}
