"use client"

import { ReactNode, useEffect } from "react"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: ReactNode
    children: ReactNode
    size?: "sm" | "md" | "lg" | "xl"
}

export function Modal({ isOpen, onClose, title, children, size = "md" }: ModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
        }
        return () => {
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl"
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm md:backdrop-blur-none"
                onClick={onClose}
            />
            <div className={`relative bg-card border border-border rounded-xl p-6 w-full ${sizeClasses[size]} mx-4 max-h-[90vh] overflow-y-auto`}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-muted hover:text-foreground transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
