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

            <div className="relative mx-auto max-w-7xl border-l border-r border-white/10 px-4 py-12 sm:px-6 sm:py-16 md:py-28 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Headline */}
                    <h2 className="text-center font-serif text-2xl font-normal italic tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Every <span className="not-italic font-semibold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">contribution</span> matters
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-center text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
                        Your <span className="font-semibold text-emerald-300">₹1 Rupee</span> contribution will help build a place of worship
                        <br className="hidden md:block" />
                        and education for generations to come.
                    </p>

                    {/* Feature Cards */}
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4">
                        {/* Card 1 - Masjid */}
                        <div className="group rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] sm:rounded-2xl sm:p-6">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 sm:size-12 sm:rounded-xl">
                                <Building07 className="size-4 text-white sm:size-6" />
                            </div>
                            <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-lg">Masjid</h3>
                            <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">A beautiful mosque for daily prayers and Friday gatherings</p>
                        </div>

                        {/* Card 2 - Madrasa */}
                        <div className="group rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] sm:rounded-2xl sm:p-6">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 sm:size-12 sm:rounded-xl">
                                <BookOpen01 className="size-4 text-white sm:size-6" />
                            </div>
                            <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-lg">Madrasa</h3>
                            <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">Islamic education center for children and adults</p>
                        </div>

                        {/* Card 3 - Community */}
                        <div className="group rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] sm:rounded-2xl sm:p-6">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 sm:size-12 sm:rounded-xl">
                                <Users01 className="size-4 text-white sm:size-6" />
                            </div>
                            <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-lg">Community Hall</h3>
                            <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">Space for weddings, events and community gatherings</p>
                        </div>

                        {/* Card 4 - Welfare */}
                        <div className="group rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] sm:rounded-2xl sm:p-6">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 sm:size-12 sm:rounded-xl">
                                <Heart className="size-4 text-white sm:size-6" />
                            </div>
                            <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-lg">Welfare Programs</h3>
                            <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">Support for orphans, widows and families in need</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component3;
