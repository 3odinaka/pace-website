import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

export default function Events() {
    return (
        <main className="min-h-screen bg-brand-dark text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <h1 className="mb-12 font-serif text-5xl md:text-6xl font-bold text-center">
                    UPCOMING <span className="text-brand-green">EVENTS</span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EventCard
                        date="MAR 12, 2026"
                        title="The Leadership Summit"
                        location="London, UK"
                    />
                    <EventCard
                        date="APR 05, 2026"
                        title="Purpose Driven Life Conference"
                        location="Lagos, Nigeria"
                    />
                    <EventCard
                        date="MAY 20, 2026"
                        title="Corporate Mastery Workshop"
                        location="New York, USA"
                    />
                    <EventCard
                        date="JUN 15, 2026"
                        title="Youth Empowerment Rally"
                        location="Accra, Ghana"
                    />
                </div>
            </div>
        </main>
    );
}
