import Navbar from "@/components/Navbar";
import MediaPlayer from "@/components/MediaPlayer";

export default function Media() {
    return (
        <main className="min-h-screen bg-brand-dark text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <h1 className="mb-12 font-serif text-5xl md:text-6xl font-bold text-center">
                    MEDIA & <span className="text-brand-green">RESOURCES</span>
                </h1>

                <div className="space-y-4">
                    <MediaPlayer
                        title="How to Find Your True Purpose"
                        type="Audio"
                        duration="45:00"
                    />
                    <MediaPlayer
                        title="Leading Through Crisis"
                        type="Video"
                        duration="15:30"
                    />
                    <MediaPlayer
                        title="The Art of Communication"
                        type="Audio"
                        duration="32:15"
                    />
                    <MediaPlayer
                        title="Building a Legacy"
                        type="Video"
                        duration="28:45"
                    />
                </div>
            </div>
        </main>
    );
}
