import { Rubik } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BRAND_NAME, SITE_URL } from "../lib/site";

// Configure Rubik Google Font with Arabic subset and balanced weight hierarchy
const rubik = Rubik({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-rubik",
    display: "swap"
});

export const metadata = {
    title: {
        template: `%s | ${BRAND_NAME}`,
        default: `نقل عفش في القاهرة والجيزة وجميع المحافظات | ${BRAND_NAME}`,
    },
    description: `${BRAND_NAME} لنقل الأثاث والعفش في القاهرة والجيزة وجميع المحافظات. خدمات نقل المنازل والمكاتب، التغليف، الفك والتركيب، ورفع الأثاث حسب احتياجك.`,
    applicationName: BRAND_NAME,
    authors: [{ name: BRAND_NAME }],
    publisher: BRAND_NAME,
    metadataBase: new URL(SITE_URL),
    openGraph: {
        title: `نقل عفش في القاهرة والجيزة وجميع المحافظات | ${BRAND_NAME}`,
        description: `${BRAND_NAME} لخدمات نقل الأثاث والعفش، التغليف، والفك والتركيب في القاهرة والجيزة وجميع المحافظات.`,
        siteName: BRAND_NAME,
        locale: 'ar_EG',
        type: 'website',
        images: [
            {
                url: '/images/real/hoist/truck-lift-wide.jpeg',
                alt: 'سيارة مجهزة لنقل الأثاث في مصر',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `نقل عفش في القاهرة والجيزة وجميع المحافظات | ${BRAND_NAME}`,
        description: `${BRAND_NAME} لنقل الأثاث والعفش مع خدمات التغليف والفك والتركيب.`,
        images: ['/images/real/hoist/truck-lift-wide.jpeg'],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/images/egy-move-brand.jpg',
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
                <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
                {/* Bootstrap base grid & layout */}
                <link rel="stylesheet" href="/css/app.css" />
                {/* Modern design tokens & components */}
                <link rel="stylesheet" href="/css/theme.css" />
                {/* Font Awesome 6 */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                    integrity="sha384-PPIZEGYM1v8zp5Py7UjFb79S58UeqCL9pYVnVPURKEqvioPROaVAJKKLzvH2rDnI"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
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
