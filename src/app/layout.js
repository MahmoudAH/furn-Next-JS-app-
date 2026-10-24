import { Rubik } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Configure Rubik Google Font with Arabic subset and balanced weight hierarchy
const rubik = Rubik({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-rubik",
    display: "swap"
});

export const metadata = {
    title: {
        template: '%s | الدكتور لنقل وتغليف الأثاث',
        default: 'الدكتور لنقل وتغليف الأثاث | أسرع وأأمن خدمة نقل في مصر',
    },
    description: 'شركة الدكتور لنقل الأثاث والعفش بالقاهرة والجيزة. خدمات تغليف احترافية متعددة الطبقات، أوناش هيدروليكية لرفع الأثاث، فك وتركيب بأيدي نجارين محترفين، وسيارات مغلقة ومجهزة.',
    keywords: 'نقل عفش, نقل اثاث, ونش رفع اثاث, تغليف عفش, شركات نقل اثاث بالقاهرة, نقل عفش الجيزة, نقل اثاث مصر, الدكتور لنقل الاثاث',
    authors: [{ name: 'الدكتور لنقل وتغليف الأثاث' }],
    metadataBase: new URL('https://furniture-moving-eg.com'),
    openGraph: {
        title: 'الدكتور لنقل وتغليف الأثاث | أفضل خدمة نقل عفش في مصر',
        description: 'حلول نقل متكاملة، ونش هيدروليكي، فك وتركيب وتغليف آمن بأفضل الأسعار وأعلى معايير الأمان.',
        url: 'https://wa.me/201097060751',
        siteName: 'الدكتور لنقل الأثاث',
        images: [
            {
                url: '/images/hero-relocation.jpg',
                width: 1200,
                height: 630,
                alt: 'الدكتور لنقل الأثاث',
            },
        ],
        locale: 'ar_EG',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'الدكتور لنقل وتغليف الأثاث',
        description: 'شركة متخصصة في نقل العفش بالقاهرة والجيزة مع خدمات تغليف احترافية، ونش رفع، وتأمين الأثاث.',
        images: ['/images/hero-relocation.jpg'],
    },
    icons: {
        icon: '/images/logo.svg',
    }
};

export const viewport = {
    themeColor: '#0a4944',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl" className={rubik.variable}>
            <head>
                {/* Bootstrap base grid & layout */}
                <link rel="stylesheet" href="/css/app.css" />
                {/* Modern design tokens & components */}
                <link rel="stylesheet" href="/css/theme.css" />
                {/* Font Awesome 6 */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body style={{ fontFamily: "var(--font-rubik), 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                <div id="app" className="min-vh-100 d-flex flex-column">
                    <Header />
                    <main className="flex-grow-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
