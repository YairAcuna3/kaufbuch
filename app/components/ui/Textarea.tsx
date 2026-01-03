"use client"

import { TextareaHTMLAttributes, forwardRef } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-foreground mb-1">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted focus:border-primary focus:ring-2 focus:ring-primary-muted transition-all resize-none ${className}`}
                    {...props}
                />
            </div>
        )
    }
)

Textarea.displayName = "Textarea"
