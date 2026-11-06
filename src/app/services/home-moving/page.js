import Link from 'next/link';
import PageBanner from '../../../components/PageBanner';
import { createPageMetadata } from '../../../lib/site';

export const metadata = createPageMetadata({
    title: "نقل المنازل والشقق",
    description: 'خدمة نقل عفش المنازل والشقق والفلل بالقاهرة والجيزة والمحافظات. ونش هيدروليكي، فك وتركيب، وسيارات شحن مغلقة.',
    path: "/services/home-moving",
    image: "/images/real/hoist/truck-lift-wide.jpeg",
    imageAlt: "سيارة نقل مجهزة لخدمة نقل المنازل",
});

export default function HomeMovingService() {
    return (
        <>
            <PageBanner
                tag="من الباب إلى الباب"
                title="خدمة نقل المنازل والشقق والفلل"
                subtitle="رحلة نقل متكاملة تشمل الفك، التغليف، التحميل بالونش الهيدروليكي، والتركيب الكامل."
                breadcrumb="نقل المنازل والشقق"
                image="/images/real/hoist/truck-lift-wide.jpeg"
            />

            <div className="content-container section pt-0">
                {/* Hero Service Section */}
                <section className="surface-card mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="tag-pill mb-3">
                                <i className="fa-solid fa-truck-ramp-box"></i>
                                <span>نقل الشقق والفلل</span>
                            </span>
                            <h2 className="section-title">
                                رحلة نقل منزلك بالكامل براحة وأمان تام
                            </h2>
                            <p className="lead-text">
                                وداعاً لمتاعب وتوتر يوم النقل. نوفر لك طاقماً كاملاً من النجارين والفنيين وعمال التحميل لإتمام نقل شقتك في يوم واحد وبأعلى درجات العناية.
                            </p>
                            <ul className="list-unstyled mt-4" style={{ color: "var(--clr-neutral-700)" }}>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>معاينة مجانية لتحديد حجم الشاحنة والونش المطلوب.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>أوناش هيدروليكية مخصصة لرفع العفش حتى الطابق 18 بأمان تام.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>إعادة تركيب غرف النوم والمطابخ والستائر في الشقة الجديدة.</span>
                                </li>
                            </ul>
                            <div className="service-actions">
                                <a href="https://wa.me/201041924242?text=مرحباً، أود حجز خدمة نقل المنزل" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <i className="fa-brands fa-whatsapp ml-1"></i>
                                    <span>حجز نقل منزلك عبر واتساب</span>
                                </a>
                                <a href="tel:01041924242" className="btn btn-primary">
                                    <i className="fa-solid fa-phone-volume ml-1"></i>
                                    <span>01041924242</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img 
                                src="/images/real/moving/loading-team.jpeg"
                                alt="فريق ينقل الأثاث المغلف عبر الونش"
                                className="img-fluid" 
                                style={{ 
                                    borderRadius: "var(--r-xl)", 
                                    height: "400px", 
                                    width: "100%", 
                                    objectFit: "cover", 
                                    boxShadow: "var(--shadow-lg)" 
                                }} 
                            />
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="section pt-0">
                    <div className="section-header">
                        <span className="tag-pill">
                            <i className="fa-solid fa-tags"></i>
                            <span>باقات تناسب ميزانيتك</span>
                        </span>
                        <h2 className="section-title">باقات نقل المنازل المتكاملة</h2>
                        <p className="section-subtitle">
                            اختر الباقة المناسبة لاحتياجاتك مع إمكانية تخصيص أي خدمة إضافية حسب طلبك.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "2rem" }}>
                                <span className="badge" style={{ background: "var(--clr-primary-50)", color: "var(--clr-primary-700)", border: "1px solid var(--clr-primary-200)", borderRadius: "999px", padding: "0.3rem 0.8rem", marginBottom: "1rem", display: "inline-block", fontWeight: 700 }}>باقة الشقق المتوسطة</span>
                                <h3 className="h4 fw-bold mb-3">باقة القاهرة والجيزة</h3>
                                <p className="text-muted mb-4">
                                    مثالية للشقق حتى 3 غرف نوم. تشمل سيارة مغلقة 4.5 متر، طاقم فنيين، فك وتركيب كامل، وتغليف أساسي شامل.
                                </p>
                                <a href="https://wa.me/201041924242?text=استفسار عن باقة القاهرة والجيزة" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
                                    استفسر عن السعر
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "2rem", border: "2px solid var(--clr-accent-500)", position: "relative" }}>
                                <span className="badge" style={{ background: "var(--clr-accent-500)", color: "var(--clr-primary-900)", borderRadius: "999px", padding: "0.3rem 0.8rem", marginBottom: "1rem", display: "inline-block", fontWeight: 700 }}>الأكثر طلباً ⭐</span>
                                <h3 className="h4 fw-bold mb-3">باقة الونش الهيدروليكي</h3>
                                <p className="text-muted mb-4">
                                    تشمل ونش رفع هيدروليكي للأدوار المرتفعة مع شاحنة مغلقة وفريق عمل كامل للتغليف بالبابل والكراتين وإعادة التركيب.
                                </p>
                                <a href="https://wa.me/201041924242?text=استفسار عن باقة الونش الهيدروليكي" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                                    احجز مع الونش
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "2rem" }}>
                                <span className="badge" style={{ background: "var(--clr-primary-50)", color: "var(--clr-primary-700)", border: "1px solid var(--clr-primary-200)", borderRadius: "999px", padding: "0.3rem 0.8rem", marginBottom: "1rem", display: "inline-block", fontWeight: 700 }}>نقل الساحل والمحافظات</span>
                                <h3 className="h4 fw-bold mb-3">باقة الفلل والمحافظات</h3>
                                <p className="text-muted mb-4">
                                    نقل الشحنات الكبيرة والمسافات الطويلة بين القاهرة والإسكندرية والساحل والصعيد بسيارات شحن كبيرة ومتابعة مستمرة.
                                </p>
                                <a href="https://wa.me/201041924242?text=استفسار عن باقة الفلل والمحافظات" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
                                    استفسر عن السعر
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
