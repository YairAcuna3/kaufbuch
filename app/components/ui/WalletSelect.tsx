"use client"

import { useState, useRef, useEffect } from "react"
import { IoWallet, IoChevronDown, IoCheckmark } from "react-icons/io5"

interface Wallet {
    id: string
    name: string
    isDefault: boolean
    balance: number
    parentId: string | null
    children?: Wallet[]
}

interface WalletSelectProps {
    value: string
    onChange: (walletId: string) => void
    wallets: Wallet[]
    label?: string
    required?: boolean
    showBalance?: boolean
    placeholder?: string
    allowAll?: boolean
}

export function WalletSelect({
    value,
    onChange,
    wallets,
    label,
    required = false,
    showBalance = true,
    placeholder = "Seleccionar wallet...",
    allowAll = false
}: WalletSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount)
    }

    // Organizar wallets en jerarquía
    const rootWallets = wallets.filter(w => !w.parentId)
    const getChildren = (parentId: string) => wallets.filter(w => w.parentId === parentId)

    const selectedWallet = wallets.find(w => w.id === value)

    const renderOption = (wallet: Wallet, level: number = 0) => {
        const isSelected = value === wallet.id
        const children = getChildren(wallet.id)

        return (
            <div key={wallet.id}>
                <button
                    type="button"
                    onClick={() => {
                        onChange(wallet.id)
                        setIsOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2.5 flex items-center gap-2 transition-colors hover:bg-primary/10 ${isSelected ? 'bg-primary/15 text-primary' : 'text-foreground'
                        }`}
                    style={{ paddingLeft: `${12 + level * 20}px` }}
                >
                    {level > 0 && (
                        <span className="text-muted-foreground text-xs mr-1">└</span>
                    )}
                    <IoWallet className={`w-4 h-4 shrink-0 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="flex-1 truncate font-medium">{wallet.name}</span>
                    {wallet.isDefault && (
                        <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">Principal</span>
                    )}
                    {showBalance && (
                        <span className={`text-sm tabular-nums ${wallet.balance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {formatCurrency(wallet.balance)}
                        </span>
                    )}
                    {isSelected && <IoCheckmark className="w-4 h-4 text-primary shrink-0" />}
                </button>
                {children.map(child => renderOption(child, level + 1))}
            </div>
        )
    }

    return (
        <div className="w-full" ref={containerRef}>
            {label && (
                <label className="block text-sm font-medium text-foreground mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground 
                        focus:border-primary focus:ring-2 focus:ring-primary-muted transition-all
                        flex items-center gap-3 text-left ${isOpen ? 'border-primary ring-2 ring-primary-muted' : ''}`}
                >
                    <IoWallet className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                        {selectedWallet ? (
                            <div className="flex items-center gap-2">
                                <span className="font-medium truncate">{selectedWallet.name}</span>
                                {showBalance && (
                                    <span className={`text-sm tabular-nums ${selectedWallet.balance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {formatCurrency(selectedWallet.balance)}
                                    </span>
                                )}
                            </div>
                        ) : value === "" && allowAll ? (
                            <span className="text-foreground">Todas las wallets</span>
                        ) : (
                            <span className="text-muted-foreground">{placeholder}</span>
                        )}
                    </div>
                    <IoChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                        <div className="max-h-64 overflow-y-auto">
                            {allowAll && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange("")
                                        setIsOpen(false)
                                    }}
                                    className={`w-full text-left px-3 py-2.5 flex items-center gap-2 transition-colors hover:bg-primary/10 border-b border-border ${value === "" ? 'bg-primary/15 text-primary' : 'text-foreground'
                                        }`}
                                >
                                    <IoWallet className={`w-4 h-4 ${value === "" ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="flex-1 font-medium">Todas las wallets</span>
                                    {value === "" && <IoCheckmark className="w-4 h-4 text-primary" />}
                                </button>
                            )}
                            {rootWallets.map(wallet => renderOption(wallet))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
