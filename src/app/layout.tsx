import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { DonateModalProvider } from "@/app/components/donate-modal";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const siteConfig = {
    name: "Al-Hamd Masjid wa Madrasa",
    description: "Help us build a masjid and madrasa in Sahab Ganj, Basti, Uttar Pradesh. Your contribution is a Sadaqah Jariyah - an ongoing charity that benefits you in this life and the hereafter.",
    url: "https://alhamdmasjid.org",
    ogImage: "/og-image.jpg",
    keywords: [
        "masjid donation",
        "mosque donation",
        "madrasa donation",
        "Islamic charity",
        "sadaqah jariyah",
        "build a mosque",
        "Basti UP",
        "Sahab Ganj",
        "Al-Hamd Masjid",
        "Islamic education",
        "Quran classes",
        "donate for mosque",
        "zakat",
        "lillah",
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} - Build a Masjid & Madrasa`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Al-Hamd Masjid wa Madrasa - Building a place of worship and learning",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: siteConfig.url,
    },
};

export const viewport: Viewport = {
    themeColor: "#059669",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light-mode">
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>
                        <DonateModalProvider>{children}</DonateModalProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
