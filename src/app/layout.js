import { Rubik } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_URL } from "../lib/site";

// Configure Rubik Google Font with Arabic subset and balanced weight hierarchy
const rubik = Rubik({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-rubik",
    display: "swap"
});

export const metadata = {
    title: {
        template: '%s | الونش لنقل وتغليف الأثاث',
        default: 'الونش لنقل وتغليف الأثاث | نقل آمن للأثاث في مصر',
    },
    description: 'الونش لنقل وتغليف الأثاث في القاهرة والجيزة. نقل منازل وشركات، تغليف احترافي، أوناش هيدروليكية، فك وتركيب، وسيارات نقل مجهزة.',
    keywords: 'الونش, نقل عفش, نقل أثاث, ونش رفع أثاث, تغليف عفش, شركات نقل أثاث بالقاهرة, نقل عفش الجيزة, نقل أثاث مصر',
    authors: [{ name: 'الونش لنقل وتغليف الأثاث' }],
    metadataBase: new URL(SITE_URL),
    openGraph: {
        title: 'الونش لنقل وتغليف الأثاث | نقل آمن ومحترف في مصر',
        description: 'حلول نقل متكاملة، ونش هيدروليكي، فك وتركيب وتغليف آمن بأفضل الأسعار وأعلى معايير الأمان.',
        url: 'https://furniture-moving-eg.com/',
        siteName: 'الونش لنقل وتغليف الأثاث',
        images: [
            {
                url: '/images/real/hoist/truck-lift-wide.jpeg',
                alt: 'ونش هيدروليكي مجهز لرفع الأثاث في مصر',
            },
        ],
        locale: 'ar_EG',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'الونش لنقل وتغليف الأثاث',
        description: 'خدمات نقل العفش بالقاهرة والجيزة مع تغليف احترافي، ونش رفع، وتأمين الأثاث.',
        images: ['/images/real/hoist/truck-lift-wide.jpeg'],
    },
    icons: {
        icon: '/images/logo-alwensh-mini.svg',
    }
};

export const viewport = {
    themeColor: '#101e30',
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
