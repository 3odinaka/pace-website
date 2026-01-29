export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-start justify-center px-6 md:px-24 bg-black">
            <div className="animate-fade-in-up">
                <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold text-white leading-none uppercase tracking-tighter">
                    EBENEZER<br />
                    AMA
                </h1>
                <div className="h-px w-full max-w-xl bg-white/20 my-8"></div>
                <p className="text-white font-medium tracking-widest text-sm md:text-base uppercase max-w-2xl">
                    Pastor | Author | Coach | Entrepreneur | Mentor
                </p>
            </div>

            {/* Floating Widget from screenshot (Yellow star icon thing) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400/20 p-2 rounded-l-lg backdrop-blur-md cursor-pointer hover:bg-yellow-400/40 transition-colors">
                <div className="text-yellow-400 text-2xl font-bold">✶</div>
            </div>
        </section>
    );
}
