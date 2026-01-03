"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "primary" | "secondary" | "danger" | "ghost"
    size?: "sm" | "md" | "lg"
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "bg-primary text-background hover:bg-primary-dark",
        secondary: "bg-secondary text-foreground border border-border hover:border-primary",
        danger: "bg-danger text-white hover:bg-danger-hover",
        ghost: "bg-transparent text-foreground hover:bg-secondary"
    }

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
