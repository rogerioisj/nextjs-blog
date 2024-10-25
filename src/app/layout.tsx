import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Outro blog",
    description: "Para análise da full cycle",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} bg-primary text-primary min-h-screen flex flex-col`}>

        <header className="fixed top-0 left-0 right-0 bg-secondary text-primary p-4 shadow-md z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-semibold">
                    Outro Blog
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-blue-200">Home</Link>
                </div>
            </nav>
        </header>

        {/* Header spacer */}
        <div className="h-16"></div>

        {/* Content wrapper */}
        <div className="flex flex-col min-h-screen">
            {/* Main content */}
            <main className="container mx-auto flex-1 p-4 mb-20 overflow-auto">
                {children}
            </main>

            {/* Fixed footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-secondary text-primary p-4 text-center">
                <div className="absolute inset-x-0 top-0 h-2 bg-primary shadow-md"></div>
                <p>&copy; {new Date().getFullYear()} Outro Blog. Nenhum direito reservado.</p>
            </footer>
        </div>
        </body>
        </html>
    );
}
