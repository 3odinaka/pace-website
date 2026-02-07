import Link from "next/link";

interface EventCardProps {
    date: string;       // "01"
    month: string;      // "FEBRUARY"
    day: string;        // "SUNDAY"
    title: string;      // "SUNDAY SERVICE"
    location: string;
    link?: string;
}

export default function EventCard({ date, month, day, title, location, link = "#" }: EventCardProps) {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 py-8 group transition-all hover:bg-white/5 px-4 md:px-0">
            {/* Date Section - Left */}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 mb-4 md:mb-0 min-w-[120px]">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white group-hover:text-brand-green transition-colors">
                    {date}
                </span>
                <div className="flex flex-col md:flex-row md:gap-2">
                    <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
                        {month}
                    </span>
                </div>
                <span className="text-sm font-bold tracking-widest text-gray-300 uppercase mt-1">
                    {day}
                </span>
            </div>

            {/* Content Section - Middle */}
            <div className="flex-1 md:px-12 mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light font-sans tracking-wide">
                    {location}
                </p>
            </div>

            {/* Action Section - Right */}
            <div className="min-w-[120px] text-right">
                <Link
                    href={link}
                    className="text-xs font-bold tracking-widest text-brand-green uppercase border-b border-brand-green pb-1 hover:text-white hover:border-white transition-all inline-block"
                >
                    VIEW DETAIL
                </Link>
            </div>
        </div>
    );
}
