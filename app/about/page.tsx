import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-brand-dark text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <h1 className="mb-12 font-serif text-5xl md:text-6xl font-bold text-center">
                    <span className="text-brand-green">IDENTITY</span> & PURPOSE
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                        <Image
                            src="/images/uploaded_media_0_1769634742620.jpg"
                            alt="Tyrone Junior Portrait"
                            fill
                            className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-green/30 -z-10" />
                    </div>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            <strong className="text-white block mb-2 text-xl">A Visionary Thought Leader</strong>
                            Tyrone Junior is a dynamic speaker, author, and consultant dedicated to empowering individuals to discover their unique purpose. With a background in leadership and personal development, he bridges the gap between potential and reality.
                        </p>
                        <p>
                            His mission is simple: to create systems and platforms that allow people to lead with authority and clarity. Whether through his books, podcasts, or live events, Tyrone challenges conventional thinking and inspires radical transformation.
                        </p>
                        <p>
                            "I believe that everyone possesses an innate greatness waiting to be unleashed. My job is to provide the keys to unlock that door."
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
