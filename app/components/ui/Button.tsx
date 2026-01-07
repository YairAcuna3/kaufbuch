"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "primary" | "secondary" | "danger" | "ghost" | "teal"
    size?: "sm" | "md" | "lg"
    loading?: boolean
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = "font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "bg-primary text-background hover:bg-primary-dark",
        secondary: "bg-secondary text-foreground border border-border hover:border-primary",
        danger: "bg-danger text-white hover:bg-danger-hover",
        ghost: "bg-transparent text-foreground hover:bg-secondary",
        teal: "bg-teal text-white hover:bg-teal-hover active:bg-teal-light transition-colors"
    }

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    }

    const Spinner = () => (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    )

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="flex items-center justify-center gap-2">
                    <Spinner />
                    {children}
                </span>
            ) : children}
        </button>
    )
}
