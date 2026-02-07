import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
    const location = "Mater Purisma Event Centre, Opposite 4 Market Days, Chinatown, Enugu, Nigeria";

    // Feb 2026 Dates
    // Feb 1 (Sun), Feb 4 (Wed), Feb 8 (Sun), Feb 11 (Wed), Feb 15 (Sun), Feb 18 (Wed), Feb 22 (Sun), Feb 25 (Wed)
    const events = [
        { date: "01", day: "SUNDAY", title: "SUNDAY SERVICE", type: "sunday" },
        { date: "04", day: "WEDNESDAY", title: "MIDWEEK SERVICE", type: "midweek" },
        { date: "08", day: "SUNDAY", title: "SUNDAY SERVICE", type: "sunday" },
        { date: "11", day: "WEDNESDAY", title: "MIDWEEK SERVICE", type: "midweek" },
        { date: "15", day: "SUNDAY", title: "SUNDAY SERVICE", type: "sunday" },
        { date: "18", day: "WEDNESDAY", title: "MIDWEEK SERVICE", type: "midweek" },
        { date: "22", day: "SUNDAY", title: "SUNDAY SERVICE", type: "sunday" },
        { date: "25", day: "WEDNESDAY", title: "MIDWEEK SERVICE", type: "midweek" },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-2 uppercase">
                        UPCOMING EVENTS
                    </h1>
                </div>

                <div className="border-t border-white/20 pt-10">
                    <h2 className="text-center text-sm md:text-base font-bold tracking-[0.3em] text-white/60 mb-12 uppercase">
                        FEBRUARY 2026
                    </h2>

                    <div className="flex flex-col">
                        {events.map((event, index) => (
                            <EventCard
                                key={index}
                                date={event.date}
                                month="FEBRUARY"
                                day={event.day}
                                title={event.title}
                                location={location}
                                link="https://www.instagram.com/flourishgc_global/"
                            />
                        ))}
                    </div>
                </div>

                {/* Optional: Simple text for other months/future */}
                <div className="mt-20 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        More events to be announced
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
