import { Tajawal, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["300", "400", "500", "700"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"], display: "swap" });

export const metadata = {
    title: {
        template: '%s | الدكتور لنقل الأثاث',
        default: 'الدكتور لنقل الأثاث',
    },
    description: 'الدكتور لنقل الأثاث شركة متخصصة في نقل العفش بالقاهرة والجيزة مع خدمات تغليف احترافية، ونش رفع، وتخزين آمن للعفش.',
    keywords: 'نقل عفش, نقل الاثاث, شركات نقل عفش, نقل عفش بالقاهرة, ونش رفع الاثاث, تغليف الاثاث, نقل عفش في مصر',
    openGraph: {
        title: 'الدكتور لنقل الأثاث',
        description: 'الدكتور لنقل الأثاث شركة متخصصة في نقل العفش بالقاهرة والجيزة مع خدمات تغليف احترافية، ونش رفع، وتخزين آمن للعفش.',
        url: 'https://wa.me/201097060751',
        siteName: 'الدكتور لنقل الأثاث',
        images: [
            {
                url: '/images/hero-relocation.jpg',
            },
        ],
        locale: 'ar_EG',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'الدكتور لنقل الأثاث',
        description: 'الدكتور لنقل الأثاث شركة متخصصة في نقل العفش بالقاهرة والجيزة مع خدمات تغليف احترافية، ونش رفع، وتخزين آمن للعفش.',
        images: ['/images/hero-relocation.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl" className={`${tajawal.className} ${playfair.variable}`}>
            <head>
                <link rel="stylesheet" href="/css/app.css" />
                <link rel="stylesheet" href="/css/theme.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body className="bg-light text-body" style={{ fontFamily: "'Tajawal', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
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
