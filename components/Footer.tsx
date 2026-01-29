"use client";

import Link from "next/link";

export default function Footer() {
    const scrollToForm = () => {
        document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer id="footer" className="bg-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">

                {/* Column 1: Info (Socials) */}
                <div className="space-y-6">
                    <h3 className="font-serif text-3xl font-bold italic tracking-tighter text-white">
                        PACE
                    </h3>
                    <p className="text-xl font-bold tracking-widest break-all">
                        NEMERUCHE@GMAIL.COM
                    </p>
                    <div className="flex gap-4 text-gray-400 text-sm">
                        <a href="#" className="hover:text-brand-green transition-colors">TikTok</a>
                        <a href="https://web.facebook.com/ebenezer.ama.2025" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Facebook</a>
                        <a href="https://x.com/AmaEbenezer" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">X (Twitter)</a>
                        <a href="https://www.instagram.com/pst_ebenezerama/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Instagram</a>
                        <a href="https://www.youtube.com/@EBENEZERAMA-flourish" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">YouTube</a>
                    </div>
                </div>

                {/* Column 2: HOME */}
                <div>
                    <h4 className="font-bold tracking-widest uppercase mb-6 text-sm text-gray-500">HOME</h4>
                    <ul className="space-y-3 text-gray-300 text-xs font-bold tracking-wider">
                        <li><span className="cursor-default hover:text-brand-green transition-colors uppercase"><a href="https://www.instagram.com/flourishgc_global/">THE FLOURISH GENERATION CHURCH</a></span></li>
                        <li><span className="cursor-default hover:text-brand-green transition-colors uppercase"><a href="#">SCHOOL OF MASTERY</a></span></li>
                    </ul>
                </div>

                {/* Column 3: LINKS (Contact) */}
                <div>
                    <h4 className="font-bold tracking-widest uppercase mb-6 text-sm text-gray-500">LINKS</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 4: Subscribe */}
                <div>
                    <h4 className="font-bold tracking-widest uppercase mb-6 text-sm text-gray-500">SUBSCRIBE</h4>
                    <button
                        onClick={scrollToForm}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 transition-colors text-sm uppercase tracking-widest"
                    >
                        Get News & Updates
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
                <p className="font-serif italic text-lg opacity-50 mb-4 md:mb-0">PACE</p>
                <p>Copyright © 2026 Pastor Ebenezer Ama. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
