"use client";

import { cx } from "@/utils/cx";
import { Building07, BookOpen01, Users01, Heart } from "@untitledui/icons";

interface Component3Props {
    className?: string;
}

export const Component3 = ({ className }: Component3Props) => {
    return (
        <section className={cx("w-full relative overflow-hidden", className)}>
            {/* Background with aurora image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/rightcolbg.jpg')" }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-transparent to-emerald-900/60" />

            <div className="relative mx-auto max-w-7xl border-l border-r border-white/10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Headline */}
                    <h2 className="text-center font-serif text-4xl font-normal italic tracking-tight text-white md:text-5xl lg:text-6xl">
                        Every <span className="not-italic font-semibold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">contribution</span> matters
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-center text-lg leading-relaxed text-white/80 md:text-xl">
                        Your <span className="font-semibold text-emerald-300">₹1 Rupee</span> contribution will help build a place of worship
                        <br className="hidden md:block" />
                        and education for generations to come.
                    </p>

                    {/* Feature Cards */}
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Card 1 - Masjid */}
                        <div className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400">
                                <Building07 className="size-6 text-white" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-white">Masjid</h3>
                            <p className="mt-2 text-sm text-white/70">A beautiful mosque for daily prayers and Friday gatherings</p>
                        </div>

                        {/* Card 2 - Madrasa */}
                        <div className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400">
                                <BookOpen01 className="size-6 text-white" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-white">Madrasa</h3>
                            <p className="mt-2 text-sm text-white/70">Islamic education center for children and adults</p>
                        </div>

                        {/* Card 3 - Community */}
                        <div className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400">
                                <Users01 className="size-6 text-white" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-white">Community Hall</h3>
                            <p className="mt-2 text-sm text-white/70">Space for weddings, events and community gatherings</p>
                        </div>

                        {/* Card 4 - Welfare */}
                        <div className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400">
                                <Heart className="size-6 text-white" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-white">Welfare Programs</h3>
                            <p className="mt-2 text-sm text-white/70">Support for orphans, widows and families in need</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component3;
