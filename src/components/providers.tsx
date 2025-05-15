"use client";

import type { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
        attribute="class"
        defaultTheme="dark" // Set default to dark
        enableSystem={false} // Disable system preference to enforce dark default
    >
      {children}
    </NextThemesProvider>
  );
}
