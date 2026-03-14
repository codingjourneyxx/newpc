"use client";

import { Heart, Phone, Copy01, Building07, CreditCard01, MessageCircle01, Link01, Download01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface Component10Props {
    className?: string;
}

/** Info Row Component */
const InfoRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
    <div className="flex items-center justify-between py-2 border-b border-secondary last:border-0">
        <span className="text-xs text-tertiary">{label}</span>
        <span className={cx("text-xs font-medium", highlight ? "text-emerald-600" : "text-primary")}>{value}</span>
    </div>
);

export const Component10 = ({ className }: Component10Props) => {
    return (
        <section className={cx("w-full bg-primary", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary">
                {/* Content with dot pattern */}
                <div className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8">
                    {/* Dot Pattern Background */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Headline */}
                    <div className="relative">
                        {/* Top Label */}
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                            Community Appeal
                        </p>

                        {/* Main Headline */}
                        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal italic tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                            Be part of this{" "}
                            <span className="relative inline-block text-emerald-600">
                                blessed journey
                                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                                    <path d="M0 3C50 0.5 150 5.5 200 3" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
                            Your contribution helps build a place of worship and learning for our community.
                        </p>

                    </div>

                    {/* Card */}
                    <div className="relative mt-10 sm:mt-12 max-w-md mx-auto">
                        <div className="rounded-xs border border-secondary bg-primary p-4 shadow-2xl sm:p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                                        <Building07 className="size-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-primary">Al-Hamd Masjid wa Madrasa</h3>
                                        <p className="text-xs text-tertiary">Sahab Ganj, Basti, UP</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    Building
                                </span>
                            </div>

                            {/* Location Details */}
                            <div className="py-3 border-t border-b border-secondary">
                                <InfoRow label="Village" value="Sahab Ganj" />
                                <InfoRow label="P.O." value="Walter Ganj" />
                                <InfoRow label="District" value="Basti, Uttar Pradesh" />
                                <InfoRow label="PIN Code" value="272182" highlight />
                            </div>

                            {/* Donation Methods */}
                            <div className="pt-4 space-y-2">
                                <h4 className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-3">
                                    <Heart className="size-3.5" />
                                    Ways to Donate
                                </h4>

                                {/* Bank Transfer */}
                                <button
                                    onClick={() => navigator.clipboard.writeText("10580754654")}
                                    className="flex w-full items-center gap-3 rounded-lg border border-secondary bg-primary px-3 py-2.5 transition duration-100 ease-linear hover:bg-primary_hover"
                                >
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                        <CreditCard01 className="size-5 text-emerald-600" />
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="text-xs font-medium text-primary">Bank Transfer (SBI)</p>
                                        <p className="text-xs text-tertiary">10580754654</p>
                                    </div>
                                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary">
                                        <Copy01 className="size-4" />
                                    </div>
                                </button>

                                {/* UPI */}
                                <button
                                    onClick={() => navigator.clipboard.writeText("thealhamdtechnologies-1@oksbi")}
                                    className="flex w-full items-center gap-3 rounded-lg border border-secondary bg-primary px-3 py-2.5 transition duration-100 ease-linear hover:bg-primary_hover"
                                >
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                        <img src="/upi-logo.png" alt="UPI" className="size-6" />
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="text-xs font-medium text-primary">G-Pay / UPI</p>
                                        <p className="truncate text-xs text-tertiary">thealhamdtechnologies-1@oksbi</p>
                                    </div>
                                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary">
                                        <Copy01 className="size-4" />
                                    </div>
                                </button>

                                {/* Contact */}
                                <a
                                    href="tel:+919022726250"
                                    className="flex w-full items-center gap-3 rounded-lg border border-secondary bg-primary px-3 py-2.5 transition duration-100 ease-linear hover:bg-primary_hover"
                                >
                                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                        <MessageCircle01 className="size-5 text-blue-600" />
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="text-xs font-medium text-primary">Nibboo Hassan Khan</p>
                                        <p className="text-xs text-tertiary">+91 9022726250</p>
                                    </div>
                                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary">
                                        <Phone className="size-4" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
