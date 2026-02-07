"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
    "/media/recalibration/1.jpg",
    "/media/recalibration/IMG_0011.jpg",
    "/media/recalibration/IMG_0013.jpg",
    "/media/recalibration/IMG_0021.jpg",
    "/media/recalibration/IMG_0369.jpg",
    "/media/recalibration/IMG_0373.jpg",
    "/media/recalibration/IMG_0374.jpg",
    "/media/recalibration/IMG_1499 2.jpg",
    "/media/recalibration/IMG_1535 2.jpg",
    "/media/recalibration/IMG_1551 2.jpg",
    "/media/recalibration/IMG_1579.jpg",
    "/media/recalibration/IMG_1599 2.jpg",
    "/media/recalibration/IMG_1639 2.jpg",
    "/media/recalibration/IMG_2121.jpg",
    "/media/recalibration/IMG_2349.jpg",
    "/media/recalibration/IMG_2350.jpg",
    "/media/recalibration/IMG_2668.jpg",
    "/media/recalibration/IMG_3090-2.jpg",
    "/media/recalibration/IMG_3111.jpg",
    "/media/recalibration/IMG_3120.jpg",
    "/media/recalibration/IMG_3122.jpg",
    "/media/recalibration/IMG_3130-2.jpg",
    "/media/recalibration/IMG_3132.jpg",
    "/media/recalibration/IMG_3140.jpg",
    "/media/recalibration/IMG_3155-2.jpg",
    "/media/recalibration/IMG_3190.jpg",
    "/media/recalibration/IMG_3252-2.jpg",
    "/media/recalibration/IMG_3255.jpg",
    "/media/recalibration/IMG_3259.jpg",
    "/media/recalibration/IMG_3260.jpg",
    "/media/recalibration/IMG_3380.jpg",
    "/media/recalibration/IMG_3381.jpg",
    "/media/recalibration/IMG_3384.jpg",
    "/media/recalibration/IMG_3386.jpg",
    "/media/recalibration/IMG_3387.jpg",
    "/media/recalibration/IMG_3388.jpg",
    "/media/recalibration/IMG_3391.jpg",
    "/media/recalibration/IMG_3402.jpg",
    "/media/recalibration/IMG_3412.jpg",
    "/media/recalibration/IMG_3414.jpg",
    "/media/recalibration/IMG_3418.jpg",
    "/media/recalibration/IMG_3450.jpg",
    "/media/recalibration/IMG_3454.jpg",
    "/media/recalibration/IMG_3463.jpg",
    "/media/recalibration/IMG_3466.jpg",
    "/media/recalibration/IMG_3468.jpg",
    "/media/recalibration/IMG_3469.jpg",
    "/media/recalibration/IMG_3474.jpg",
    "/media/recalibration/IMG_3476.jpg",
    "/media/recalibration/IMG_3484.jpg",
    "/media/recalibration/IMG_3488.jpg",
    "/media/recalibration/IMG_3511.jpg",
    "/media/recalibration/IMG_3515.jpg",
    "/media/recalibration/IMG_3518.jpg",
    "/media/recalibration/IMG_3520.jpg",
    "/media/recalibration/IMG_3526.jpg",
    "/media/recalibration/IMG_3531.jpg",
    "/media/recalibration/IMG_3539.jpg",
    "/media/recalibration/IMG_3560.jpg",
    "/media/recalibration/IMG_3562.jpg",
    "/media/recalibration/IMG_3567.jpg",
    "/media/recalibration/IMG_3568.jpg",
    "/media/recalibration/IMG_3574.jpg",
    "/media/recalibration/IMG_3614.jpg",
    "/media/recalibration/IMG_3651.jpg",
    "/media/recalibration/IMG_3652.jpg",
    "/media/recalibration/IMG_3655.jpg",
    "/media/recalibration/IMG_3656.jpg",
    "/media/recalibration/IMG_3661.jpg",
    "/media/recalibration/IMG_3667.jpg",
    "/media/recalibration/IMG_3669.jpg",
    "/media/recalibration/IMG_3671.jpg",
    "/media/recalibration/IMG_3682.jpg",
    "/media/recalibration/IMG_3686.jpg",
    "/media/recalibration/IMG_3691.jpg",
    "/media/recalibration/IMG_3694.jpg",
    "/media/recalibration/IMG_3695.jpg",
    "/media/recalibration/IMG_3720.jpg",
    "/media/recalibration/IMG_3723.jpg",
    "/media/recalibration/IMG_3725.jpg",
    "/media/recalibration/IMG_3739.jpg",
    "/media/recalibration/IMG_3750.jpg",
    "/media/recalibration/IMG_3783.jpg",
    "/media/recalibration/IMG_3786.jpg",
    "/media/recalibration/IMG_3803.jpg",
    "/media/recalibration/IMG_3805.jpg",
    "/media/recalibration/_MG_2704.jpg",
    "/media/recalibration/_MG_2712.jpg",
    "/media/recalibration/img2.jpg",
    "/media/recalibration/img3.jpg",
    "/media/recalibration/img4.jpg",
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
                        MEDIA
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
