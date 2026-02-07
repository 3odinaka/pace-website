"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const images = [
    "/media/recalibration/media__1770441522123.jpg",
    "/media/recalibration/media__1770441545650.png",
    "/media/recalibration/media__1770444978266.jpg",
    "/media/recalibration/media__1770444982883.jpg",
    "/media/recalibration/media__1770444985208.jpg",
    "/media/recalibration/media__1770444992804.jpg",
    "/media/recalibration/media__1770445001776.jpg",
];

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-4">
                    THE RECALIBRATION 2025
                </h1>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 uppercase tracking-widest text-sm">
                    A visual journey through our defining moments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] group overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <Image
                                src={src}
                                alt={`Recalibration 2025 - Gallery Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
