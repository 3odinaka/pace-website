"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
    "/media/recalibration/media__1770441522123.jpg",
    "/media/recalibration/media__1770441545650.png",
    "/media/recalibration/media__1770444978266.jpg",
    "/media/recalibration/media__1770444982883.jpg",
    "/media/recalibration/media__1770444985208.jpg",
    "/media/recalibration/media__1770444992804.jpg",
    "/media/recalibration/media__1770445001776.jpg",
];

export default function MediaCarousel() {
    // Triple the array to ensure smooth infinite scrolling without gaps
    const carouselImages = [...images, ...images, ...images];

    return (
        <section className="py-20 bg-black overflow-hidden border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-2">
                        Gallery
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-white font-bold">
                        THE RECALIBRATION 2025
                    </h3>
                </div>
                <Link
                    href="/media"
                    className="hidden md:inline-block text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider font-bold"
                >
                    View All Photos
                </Link>
            </div>

            {/* Infinite Marquee */}
            <div className="relative w-full">
                <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {carouselImages.map((src, index) => (
                        <div
                            key={`${src}-${index}`}
                            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group overflow-hidden"
                        >
                            <Image
                                src={src}
                                alt={`Recalibration 2025 - Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile "View All" button */}
            <div className="mt-10 px-6 md:hidden flex justify-center">
                <Link
                    href="/media"
                    className="text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-xs uppercase tracking-wider font-bold"
                >
                    View All Photos
                </Link>
            </div>
        </section>
    );
}
