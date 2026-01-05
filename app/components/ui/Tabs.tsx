import { ReactNode, createContext, useContext, useState } from "react"

interface TabsContextType {
    activeTab: string
    setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
    children: ReactNode
    defaultValue: string
    className?: string
}

interface TabsListProps {
    children: ReactNode
    className?: string
}

interface TabsTriggerProps {
    children: ReactNode
    value: string
    className?: string
}

interface TabsContentProps {
    children: ReactNode
    value: string
    className?: string
}

export function Tabs({ children, defaultValue, className = "" }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultValue)

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={`tabs ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

export function TabsList({ children, className = "" }: TabsListProps) {
    return (
        <div className={`flex border-b border-border ${className}`}>
            {children}
        </div>
    )
}

export function TabsTrigger({ children, value, className = "" }: TabsTriggerProps) {
    const context = useContext(TabsContext)
    if (!context) throw new Error("TabsTrigger must be used within Tabs")

    const { activeTab, setActiveTab } = context
    const isActive = activeTab === value

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${isActive
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-primary hover:border-primary"
                } ${className}`}
        >
            {children}
        </button>
    )
}

export function TabsContent({ children, value, className = "" }: TabsContentProps) {
    const context = useContext(TabsContext)
    if (!context) throw new Error("TabsContent must be used within Tabs")

    const { activeTab } = context

    if (activeTab !== value) return null

    return (
        <div className={`mt-4 ${className}`}>
            {children}
        </div>
    )
}