import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
    title: "Hang's Portfolio",
    description: "My personal 80s/90s terminal-styled portfolio",
    icons: {
        icon: [{ url: "/computer.svg", href: "/computer.svg" }],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen font-mono">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
