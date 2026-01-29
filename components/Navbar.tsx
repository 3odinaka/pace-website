"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-500 transform ${scrolled ? "translate-y-0 bg-black/95 backdrop-blur-sm shadow-sm border-b border-white/5" : "-translate-y-full opacity-0"
                    }`}
            >
                {/* Logos */}
                <div className="relative z-50">
                    <Link href="/" className="font-serif text-3xl font-bold italic tracking-tighter text-white">
                        PACE
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 text-white text-xs font-bold tracking-widest uppercase">
                    <Link href="/" className="hover:text-brand-green transition-colors">
                        HOME
                    </Link>
                    <Link href="/#newsletter" className="hover:text-brand-green transition-colors">
                        ABOUT
                    </Link>
                    <a
                        href="https://t.me/FlourishNation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-green transition-colors"
                    >
                        SERMONS
                    </a>
                    <Link href="/#footer" className="hover:text-brand-green transition-colors">
                        FOLLOW
                    </Link>
                </div>

                {/* Spacer */}
                <div className="w-[60px] hidden md:block"></div>

                {/* Mobile Menu Toggle (Hamburger) */}
                <div className="md:hidden z-50 relative">
                    <button onClick={() => setMobileMenuOpen(true)} className="text-white hover:text-brand-green transition-colors p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Sidebar (Drawer) */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Header / Close Button */}
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-serif text-xl font-bold italic tracking-tighter text-white">PACE</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-brand-green transition-colors p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6 text-white font-bold tracking-widest uppercase text-sm">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-brand-green transition-colors border-b border-white/5 pb-4"
                        >
                            HOME
                        </Link>
                        <Link
                            href="/#newsletter"
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-brand-green transition-colors border-b border-white/5 pb-4"
                        >
                            ABOUT
                        </Link>
                        <a
                            href="https://t.me/FlourishNation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-green transition-colors border-b border-white/5 pb-4"
                        >
                            SERMONS
                        </a>
                        <Link
                            href="/#footer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-brand-green transition-colors border-b border-white/5 pb-4"
                        >
                            FOLLOW
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
