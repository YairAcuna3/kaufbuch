"use client"

interface SwitchProps {
    checked: boolean
    onChange: (checked: boolean) => void
    labelOn?: string
    labelOff?: string
}

export function Switch({ checked, onChange, labelOn, labelOff }: SwitchProps) {
    return (
        <div className="flex items-center gap-3">
            {labelOff && (
                <span className={`text-sm ${!checked ? "text-foreground" : "text-muted"}`}>
                    {labelOff}
                </span>
            )}
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? "bg-primary" : "bg-secondary border border-border"
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
            {labelOn && (
                <span className={`text-sm ${checked ? "text-foreground" : "text-muted"}`}>
                    {labelOn}
                </span>
            )}
        </div>
    )
}
