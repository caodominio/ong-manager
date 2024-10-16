'use client'
import { queryClient } from "@/lib/query"
import { QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

export function CustomQueryClientProvider({ children }: { children: ReactNode }) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
