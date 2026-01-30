"use client";

import Link from "next/link";
import Image from "next/image";
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
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-500 transform ${scrolled ? "bg-black/95 backdrop-blur-sm shadow-sm border-b border-white/5 py-4" : "bg-transparent py-6"
                    }`}
            >
                {/* Logos */}
                <div className="relative z-50">
                    <Link href="/" className="block relative w-48 h-16">
                        <Image
                            src="/images/logo.png"
                            alt="Ebenezer Ama Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
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

                {/* Social Icons (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-6 text-white">
                    <a href="https://web.facebook.com/ebenezer.ama.2025" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="https://x.com/AmaEbenezer" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/pst_ebenezerama/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                    <a href="https://www.youtube.com/@EBENEZERAMA-flourish" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </a>
                </div>

                {/* Spacer (Hidden on Large screens) */}
                <div className="w-[60px] hidden md:block lg:hidden"></div>

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

                        <div className="flex gap-6 mt-4">
                            <a href="https://web.facebook.com/ebenezer.ama.2025" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://x.com/AmaEbenezer" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/pst_ebenezerama/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@EBENEZERAMA-flourish" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
