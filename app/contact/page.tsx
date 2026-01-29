import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <main className="min-h-screen bg-brand-dark text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto text-center">
                <h1 className="mb-6 font-serif text-5xl md:text-6xl font-bold">
                    CONTACT <span className="text-brand-green">US</span>
                </h1>
                <p className="mb-12 text-gray-400 text-lg">
                    Just want to say hello?
                </p>

                <form className="space-y-6 text-left">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold tracking-widest text-brand-green uppercase mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-green focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest text-brand-green uppercase mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-green focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold tracking-widest text-brand-green uppercase mb-2">Subject</label>
                        <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-green focus:outline-none transition-colors">
                            <option>General Inquiry</option>
                            <option>Mentorship</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold tracking-widest text-brand-green uppercase mb-2">Message</label>
                        <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-green focus:outline-none transition-colors"></textarea>
                    </div>

                    <button className="w-full bg-brand-green text-brand-dark font-bold py-4 hover:bg-white transition-colors tracking-widest uppercase">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}
