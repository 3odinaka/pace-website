import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-black flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0 overflow-hidden">

            {/* Text Content - Left Side */}
            <div className="w-full md:w-1/2 z-10 animate-fade-in-up px-6 md:pl-12 lg:pl-24 flex flex-col justify-center h-full pt-10 md:pt-0">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] uppercase tracking-tighter">
                    EBENEZER<br />
                    <span className="text-gray-200">AMA</span>
                </h1>
                <div className="h-1 w-24 bg-brand-green my-8"></div>
                <p className="text-gray-400 font-medium tracking-widest text-sm md:text-base uppercase max-w-md">
                    Pastor | Author | Coach | Entrepreneur | Mentor
                </p>
            </div>

            {/* Image - Right Side */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative">
                {/* Grayscale Portrait */}
                <div className="relative w-full h-full grayscale">
                    <Image
                        src="/images/hero_portrait.jpg"
                        alt="Ebenezer Ama"
                        fill
                        className="object-cover object-top md:object-cover md:object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-black/80"></div>
                </div>
            </div>
        </section>
    );
}
