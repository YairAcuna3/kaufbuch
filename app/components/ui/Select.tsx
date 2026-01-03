"use client"

import { SelectHTMLAttributes, forwardRef } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, options, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-foreground mb-1">
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    className={`w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:border-primary focus:ring-2 focus:ring-primary-muted transition-all ${className}`}
                    {...props}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
)

Select.displayName = "Select"
