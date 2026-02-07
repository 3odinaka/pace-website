"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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
