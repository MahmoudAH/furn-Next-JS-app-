import Link from 'next/link';
import PageBanner from '../../components/PageBanner';
import { BRAND_NAME, createPageMetadata } from '../../lib/site';

export const metadata = createPageMetadata({
    title: "من نحن",
    description: `تعرف على ${BRAND_NAME} وخدمات نقل الأثاث والعفش، التغليف، والفك والتركيب في القاهرة والجيزة وجميع المحافظات.`,
    path: "/about",
    imageAlt: "فريق نقل أثاث يعمل بعناية",
});

export default function About() {
    return (
        <>
            {/* Consistent Internal Page Banner */}
            <PageBanner
                tag="خدمات نقل الأثاث في القاهرة والجيزة وجميع المحافظات"
                title={`من نحن - ${BRAND_NAME} لنقل الأثاث`}
                subtitle={`${BRAND_NAME} تساعد الأسر والشركات على تخطيط نقل الأثاث والعفش بعناية في القاهرة والجيزة وجميع المحافظات.`}
                breadcrumb="من نحن"
                image="/images/real/fleet/moving-trucks.jpeg"
            />

            <div className="content-container section pt-0">
                {/* Story Hero Surface */}
                <section className="surface-card mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="tag-pill mb-3">
                                <i className="fa-solid fa-medal"></i>
                                <span>ريادة وأمان</span>
                            </span>
                            <h2 className="section-title">
                                شريكك الموثوق في كل خطوة لنقل مقتنياتك
                            </h2>
                            <p className="lead-text">
                                تقدم {BRAND_NAME} خدمات نقل الأثاث والعفش للأسر والشركات، مع إمكانية تنسيق التغليف والفك والتركيب وفق احتياجات كل عملية.
                            </p>
                            <p style={{ color: "var(--clr-neutral-700)" }}>
                                تبدأ خطواتنا بفهم تفاصيل الموقع والمنقولات، ثم تحديد الخدمات ووسيلة النقل المناسبة، مع توضيح نطاق العمل قبل يوم الانتقال.
                            </p>
                            
                        </div>

                        <div className="col-lg-6">
                            <img 
                                src="/images/real/packing/wrapped-sofas.jpeg"
                                alt="فريق متخصص يحمل كنبة مغلفة بعناية إلى المنزل الجديد"
                                className="img-fluid" 
                                style={{ 
                                    borderRadius: "var(--r-xl)", 
                                    boxShadow: "var(--shadow-lg)", 
                                    objectFit: "cover", 
                                    width: "100%", 
                                    height: "420px" 
                                }} 
                            />
                        </div>
                    </div>
                </section>

                {/* Core Capabilities */}
                <section className="section pt-0">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="surface-card h-100" style={{ padding: "2rem" }}>
                                <span className="tag-pill mb-3">
                                    <i className="fa-solid fa-truck"></i>
                                    <span>الأسطول المجهز</span>
                                </span>
                                <h3 className="about-card-title">
                                    شاحنات صندوقية مغلقة ومبطنة
                                </h3>
                                <p className="text-muted mb-0">
                                    أسطول مخصص لنقل الأثاث مزود بأحزمة أمان داخلية وأرضيات مبطنة لامتصاص الصدمات أثناء السير في الطرقات وحماية العفش من الأمطار والأتربة.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="surface-card h-100" style={{ padding: "2rem" }}>
                                <span className="tag-pill mb-3">
                                    <i className="fa-solid fa-user-shield"></i>
                                    <span>فريق العمل</span>
                                </span>
                                <h3 className="about-card-title">
                                    نجارون وفنيون متخصصون
                                </h3>
                                <p className="text-muted mb-0">
                                    فنيون مدربون على تفكيك وإعادة تجميع غرف النوم الحديثة والمودرن والإيطالي والمطابخ دون خدش واحد، مع التعامل المحترف مع الأجهزة الكهربائية.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="surface-card h-100" style={{ padding: "2rem" }}>
                                <span className="tag-pill mb-3">
                                    <i className="fa-solid fa-shield-heart"></i>
                                    <span>وضوح الخدمة</span>
                                </span>
                                <h3 className="about-card-title">
                                    تفاصيل واضحة قبل التنفيذ
                                </h3>
                                <p className="text-muted mb-0">
                                    نوضح الخدمات المتفق عليها وتفاصيل التعامل مع الأثاث قبل بدء النقل، ويمكنك الاستفسار عن أي متطلبات خاصة أثناء طلب المعاينة.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
