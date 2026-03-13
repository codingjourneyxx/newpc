"use client";

import { cx } from "@/utils/cx";

interface ChatBubbleProps {
    message: string;
    align?: "left" | "right";
}

const ChatBubble = ({ message, align = "left" }: ChatBubbleProps) => (
    <div
        className={cx(
            "relative max-w-xs rounded-2xl px-4 py-3 text-sm font-medium",
            align === "left"
                ? "ml-0 mr-auto bg-green-light-400/30 text-green-light-950"
                : "ml-auto mr-0 bg-green-light-950/20 text-green-light-950"
        )}
    >
        {message}
        {/* Tail */}
        <div
            className={cx(
                "absolute bottom-0 size-3",
                align === "left" ? "-left-1" : "-right-1"
            )}
        />
    </div>
);

/** Typing Indicator */
const TypingIndicator = () => (
    <div className="flex max-w-xs items-center gap-1 rounded-2xl bg-green-light-400/30 px-4 py-3">
        <span className="size-2 animate-bounce rounded-full bg-green-light-700" style={{ animationDelay: "0ms" }} />
        <span className="size-2 animate-bounce rounded-full bg-green-light-700" style={{ animationDelay: "150ms" }} />
        <span className="size-2 animate-bounce rounded-full bg-green-light-700" style={{ animationDelay: "300ms" }} />
    </div>
);

interface Component3Props {
    className?: string;
}

export const Component3 = ({ className }: Component3Props) => {
    const chatMessages = [
        { message: "Everything's red. Send help.", align: "left" as const },
        { message: "Which server is it?", align: "right" as const },
        { message: "Did you check the logs?", align: "right" as const },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary bg-green-light-500 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                <div className="mx-auto max-w-3xl">
                {/* Chat Bubbles */}
                <div className="flex flex-col gap-3">
                    {chatMessages.map((chat, index) => (
                        <ChatBubble key={index} message={chat.message} align={chat.align} />
                    ))}
                    <TypingIndicator />
                </div>

                {/* Headline */}
                <h2 className="mt-12 text-center font-serif text-3xl font-normal italic tracking-tight text-white md:text-4xl lg:text-5xl">
                    Things go <span className="not-italic">wrong.</span> All the time.
                </h2>

                {/* Description */}
                <p className="mt-6 text-center text-lg text-green-light-100 md:text-xl">
                    From minor issues to global outages, incidents are
                    <br className="hidden md:block" />
                    inevitable. But chaos doesn't have to be.
                </p>
                </div>
            </div>
        </section>
    );
};

export default Component3;
