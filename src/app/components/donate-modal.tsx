"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { Copy01, CreditCard01, MessageCircle01, Phone, X } from "@untitledui/icons";

// Donation Data
const BANK_ACC = "10580754654";
const UPI_ID = "thealhamdtechnologies-1@oksbi";

// Context
type DonateModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const DonateModalContext = createContext<DonateModalContextType | null>(null);

export const useDonateModal = () => {
    const context = useContext(DonateModalContext);
    if (!context) {
        throw new Error("useDonateModal must be used within a DonateModalProvider");
    }
    return context;
};

// Modal Component
const DonateModalContent = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = async (text: string, field: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 p-1.5 sm:p-2 rounded-full bg-secondary hover:bg-tertiary transition-colors"
                >
                    <X className="size-4 sm:size-5 text-primary" />
                </button>

                <div className="grid h-full lg:grid-cols-2 max-h-[95vh] sm:max-h-[90vh]">
                    {/* Left Side - Info (Desktop) */}
                    <div className="relative hidden lg:flex flex-col justify-center p-6 xl:p-10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 overflow-y-auto">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                        <div className="relative">
                            {/* QR Code at Top */}
                            <div className="mb-6 flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                                <p className="text-xs font-medium text-white/80 mb-3">Scan QR Code to Pay</p>
                                <div className="rounded-lg bg-white p-2 shadow-lg">
                                    <img src="/qr-code.jpeg" alt="UPI QR Code" className="size-48 xl:size-80" />
                                </div>
                            </div>

                            <h2 className="font-serif text-2xl xl:text-3xl font-normal italic text-white">
                                Support this blessed project
                            </h2>
                            <p className="mt-3 text-sm xl:text-base text-emerald-100 leading-relaxed">
                                Your donation is a Sadaqah Jariyah - an ongoing charity that will benefit you even after your lifetime.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Donation Options */}
                    <div className="flex flex-col p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto max-h-[95vh] sm:max-h-[90vh] lg:max-h-none">
                        {/* Mobile Header with QR */}
                        <div className="lg:hidden">
                            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Support this blessed project</h3>

                            {/* Mobile QR Code */}
                            <div className="mb-4 flex items-center gap-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-3 sm:p-4">
                                <div className="rounded-lg bg-white p-1.5 shadow-lg shrink-0">
                                    <img src="/qr-code.jpeg" alt="UPI QR Code" className="size-20 sm:size-24" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-medium text-white">Scan to Pay</p>
                                    <p className="text-[10px] sm:text-xs text-emerald-100 mt-1">Use any UPI app to scan and donate instantly</p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                                    <CreditCard01 className="size-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">Choose a donation method</h3>
                                    <p className="text-sm text-tertiary">Click to copy the details</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            {/* Bank Transfer */}
                            <button
                                onClick={() => handleCopy(BANK_ACC, "bank")}
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50">
                                    <CreditCard01 className="size-5 sm:size-6 text-emerald-600" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">Bank Transfer (SBI)</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Name: THE AL-HAMD TECHNOLOGIES</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary font-medium">A/C: {BANK_ACC}</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">IFSC: SBIN0003320 • Branch: Basti</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {copiedField === "bank" ? (
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-600">Copied!</span>
                                    ) : (
                                        <Copy01 className="size-4 sm:size-5 text-tertiary" />
                                    )}
                                </div>
                            </button>

                            {/* UPI */}
                            <button
                                onClick={() => handleCopy(UPI_ID, "upi")}
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50">
                                    <img src="/upi-logo.png" alt="UPI" className="size-5 sm:size-7" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">G-Pay / PhonePe / Paytm / UPI</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary font-medium truncate">{UPI_ID}</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Instant transfer via any UPI app</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {copiedField === "upi" ? (
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-600">Copied!</span>
                                    ) : (
                                        <Copy01 className="size-4 sm:size-5 text-tertiary" />
                                    )}
                                </div>
                            </button>

                            {/* WhatsApp Contact */}
                            <a
                                href="https://wa.me/919022726250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-green-50">
                                    <MessageCircle01 className="size-5 sm:size-6 text-green-600" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">Contact on WhatsApp</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Nibboo Hassan Khan</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">For donation receipts & queries</p>
                                </div>
                                <Phone className="size-4 sm:size-5 text-tertiary shrink-0" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-tertiary">
                            <a href="tel:+919022726250" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                <Phone className="size-3 sm:size-3.5" />
                                +91 9022726250
                            </a>
                            <span className="hidden sm:inline text-secondary">•</span>
                            <span>Sahab Ganj, Basti, UP</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

// Provider Component
export const DonateModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <DonateModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <DonateModalContent isOpen={isOpen} onClose={closeModal} />
        </DonateModalContext.Provider>
    );
};

// Donate Button Component (for easy reuse)
export const DonateButton = ({
    children,
    className,
    ...props
}: {
    children: ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { openModal } = useDonateModal();

    return (
        <button onClick={openModal} className={className} {...props}>
            {children}
        </button>
    );
};
