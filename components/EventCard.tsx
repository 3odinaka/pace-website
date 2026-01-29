export default function EventCard({
    date,
    title,
    location,
}: {
    date: string;
    title: string;
    location: string;
}) {
    return (
        <div className="group relative border border-white/10 bg-white/5 p-6 transition-all hover:border-brand-green hover:bg-white/10">
            <div className="mb-4 text-sm font-bold tracking-widest text-brand-green uppercase">
                {date}
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-white group-hover:text-brand-green transition-colors">
                {title}
            </h3>
            <p className="text-gray-400">{location}</p>

            <div className="mt-6">
                <span className="text-sm font-bold text-white underline decoration-brand-green underline-offset-4 group-hover:text-brand-green">
                    GET TICKETS
                </span>
            </div>
        </div>
    );
}
