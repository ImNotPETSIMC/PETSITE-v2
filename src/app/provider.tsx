"use client";

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

export const QueryProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>  
    )
}

export const ThemesProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    })

    return (
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
    )
};