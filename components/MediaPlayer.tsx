export default function MediaPlayer({
    title,
    type,
    duration,
}: {
    title: string;
    type: "Audio" | "Video";
    duration: string;
}) {
    return (
        <div className="flex items-center justify-between border-b border-white/10 py-6 transition-all hover:bg-white/5 px-4 cursor-pointer group">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                    {type === "Audio" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    )}
                </div>
                <div>
                    <h4 className="font-serif text-lg font-bold text-white">{title}</h4>
                    <p className="text-sm text-gray-500">{type} • {duration}</p>
                </div>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-bold text-brand-green">PLAY</span>
            </div>
        </div>
    );
}
