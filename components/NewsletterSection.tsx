"use client";

import Image from "next/image";
import { useActionState } from "react";
import { subscribeUser, State } from "@/app/actions";

const initialState: State = {
    message: "",
    errors: {},
};

export default function NewsletterSection() {
    const [state, formAction, isPending] = useActionState(subscribeUser, initialState);

    const scrollToForm = () => {
        document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="newsletter" className="min-h-screen bg-black flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Text & Form */}
                <div className="space-y-8 relative z-10">
                    <div className="space-y-6">
                        <h2 className="text-white font-serif text-3xl md:text-4xl leading-tight">
                            A Voice for the <br />
                            <span className="text-brand-green italic">Next Generation.</span>
                        </h2>
                        <div className="text-gray-400 text-lg leading-relaxed max-w-lg space-y-4">
                            <p>
                                <strong className="text-white">Let me tell you something I noticed.</strong><br />
                                Some of my most important thoughts never make it to the pulpit—not because they aren&apos;t important, but because there isn&apos;t enough time. They come during conversations, reading, or quiet reflection. I realized many of you are dealing with things that don&apos;t wait for Sunday.
                            </p>
                            <p>
                                <strong className="text-white">So I’m starting a newsletter.</strong><br />
                                It’s a space for doctrine, scripture, and clear teachings you can actually sit with. Before we launch, we’re opening a waiting list. If you want to grow, think deeply, and take these conversations beyond the service, this is for you.
                            </p>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="group flex items-center gap-3 text-white font-bold tracking-widest text-sm uppercase hover:text-brand-green transition-colors"
                        >
                            <span>Read More</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    {/* Form */}
                    <div id="signup-form" className="pt-12 border-t border-white/10 mt-12 w-full max-w-md">
                        <h3 className="text-white font-serif text-2xl mb-6">Join the Waiting List</h3>

                        {state?.success ? (
                            <div className="bg-brand-green/10 border border-brand-green text-brand-green p-6 rounded-sm animate-fade-in-up">
                                <h4 className="font-bold mb-2">You&apos;re in!</h4>
                                <p>{state.message}</p>
                            </div>
                        ) : (
                            <form action={formAction} className="space-y-4">
                                <div>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green transition-colors font-light"
                                    />
                                    {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green transition-colors font-light"
                                    />
                                    {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number (Optional)"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green transition-colors font-light"
                                    />
                                </div>

                                {state?.message && !state?.success && (
                                    <p className="text-red-400 text-sm mt-2">{state.message}</p>
                                )}

                                <button
                                    disabled={isPending}
                                    className="w-full mt-8 bg-white text-black font-bold py-4 hover:bg-brand-green hover:text-white transition-colors uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "Joining..." : "Subscribe"}
                                </button>
                            </form>
                        )}

                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-[600px] lg:h-[800px] w-full lg:translate-x-12">
                    {/* Background Box Decoration */}
                    <div className="absolute top-10 right-10 w-full h-full border border-brand-green/20 -z-10 hidden lg:block" />

                    <div className="relative w-full h-full bg-white/5">
                        <Image
                            src="/images/blue_suit_new.jpg"
                            alt="Pastor Ebenezer Ama"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    <div className="absolute -bottom-10 -left-10 bg-black p-6 border border-white/10 hidden lg:block max-w-xs">
                        <p className="text-brand-green text-xs font-bold tracking-widest mb-1.5 uppercase">Lead Pastor</p>
                        <p className="text-white font-serif text-xl leading-tight">Flourish Generation Church</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
