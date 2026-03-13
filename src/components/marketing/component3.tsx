"use client";

import { cx } from "@/utils/cx";

interface DuaBubbleProps {
    message: string;
    author: string;
    align?: "left" | "right";
}

const DuaBubble = ({ message, author, align = "left" }: DuaBubbleProps) => (
    <div
        className={cx(
            "relative max-w-sm rounded-2xl px-5 py-4",
            align === "left"
                ? "ml-0 mr-auto bg-white/30 text-white"
                : "ml-auto mr-0 bg-white/20 text-white"
        )}
    >
        <p className="text-sm font-medium italic">"{message}"</p>
        <p className="mt-2 text-xs opacity-80">- {author}</p>
    </div>
);

interface Component3Props {
    className?: string;
}

export const Component3 = ({ className }: Component3Props) => {
    const duas = [
        { message: "May Allah accept your donation and reward you abundantly", author: "Village Elder", align: "left" as const },
        { message: "JazakAllah Khair for supporting our community", author: "Imam Sahab", align: "right" as const },
        { message: "Every rupee counts towards this noble cause", author: "Committee Member", align: "left" as const },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary bg-emerald-600 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    {/* Dua Bubbles */}
                    <div className="flex flex-col gap-4">
                        {duas.map((dua, index) => (
                            <DuaBubble key={index} message={dua.message} author={dua.author} align={dua.align} />
                        ))}
                    </div>

                    {/* Headline */}
                    <h2 className="mt-12 text-center font-serif text-3xl font-normal italic tracking-tight text-white md:text-4xl lg:text-5xl">
                        Every <span className="not-italic">contribution</span> matters
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-center text-lg text-emerald-100 md:text-xl">
                        Your 1 Rupee contribution will help build a place of worship
                        <br className="hidden md:block" />
                        and education for generations to come.
                    </p>

                    {/* Quran Verse */}
                    <div className="mt-8 text-center">
                        <p className="text-emerald-200 italic text-md">
                            "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise"
                        </p>
                        <p className="text-emerald-300 text-sm mt-2">- Sahih Bukhari</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component3;
