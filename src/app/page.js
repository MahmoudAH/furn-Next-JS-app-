import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';

export const metadata = {
    title: 'الدكتور لنقل الأثاث | شركة نقل عفش بالقاهرة والجيزة',
    description: 'الدكتور لنقل الأثاث يقدم خدمات نقل عفش شاملة تشمل التغليف الاحترافي، الونش الهيدروليكي، والنقل الداخلي بين أحياء القاهرة والجيزة.',
    keywords: 'مواقع نقل العفش والاثاث, شركة نقل عفش بالقاهرة, شركة نقل أثاث في الجيزة, ونش رفع اثاث, تغليف الاثاث, نقل العفش, شركة شحن عفش',
    openGraph: {
        images: ['/images/hero-relocation.jpg'],
    }
};

export default function Home() {
    return (
        <>
            <HeroCarousel />

            <section className="container section">
                <div className="text-center mb-5">
                    <span className="tag-pill"><i className="fa-solid fa-box"></i><span>خدماتنا المتكاملة لنقل العفش</span></span>
                    <h2 className="section-title">كل ما تحتاجه لنقل عفشك بأمان من البداية للنهاية</h2>
                    <p className="section-subtitle">نقدم حلول نقل شاملة تشمل الفك والتغليف والنقل والتركيب مع متابعة متخصصة لضمان تجربة سهلة ومريحة.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/ka.jpg" alt="ونش رفع الأثاث في الخدمة" loading="lazy" />
                                <span className="feature-overlay">01097060751</span>
                            </div>
                            <div className="card-body">
                                <h3>نقل وتفكيك وتركيب الأثاث</h3>
                                <p>فريقنا الفني يتولى فك وتركيب الأثاث بحرفية، مع تغليف مخصص لكل قطعة قبل تحميلها لضمان سلامتها.</p>
                                <Link href="/services/pro-packing" className="btn btn-link">تعرّف على خدمة النقل <i className="fa-solid fa-arrow-left-long"></i></Link>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/mard.jpg" alt="تغليف الأثاث قبل النقل" loading="lazy" />
                                <span className="feature-overlay">تغليف آمن</span>
                            </div>
                            <div className="card-body">
                                <h3>تغليف احترافي يحمي ممتلكاتك الحساسة</h3>
                                <p>نستخدم خامات التغليف البلاستيكية والفقاعية والصناديق المبطنة لحماية الأجهزة والزجاجيات خلال الرحلة.</p>
                                <Link href="/services/home-moving" className="btn btn-link">شاهد تفاصيل التغليف <i className="fa-solid fa-arrow-left-long"></i></Link>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/hero-relocation.jpg" alt="نقل أثاث احترافي داخل مصر" loading="lazy" />
                                <span className="feature-overlay">01202750832</span>
                            </div>
                            <div className="card-body">
                                <h3>خدمة التخزين الآمن قصير وطويل المدى</h3>
                                <p>نوفر مخازن مؤمنة ومراقبة بالكاميرات لحفظ العفش مع نظام تهوية يحميه من الرطوبة والحشرات.</p>
                                <Link href="/services/business-relocation" className="btn btn-link">اطلب خدمة التخزين <i className="fa-solid fa-arrow-left-long"></i></Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="container section pt-0">
                <div className="surface-card">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="tag-pill mb-3"><i className="fa-solid fa-list-check"></i><span>لماذا نحن</span></span>
                            <h2 className="section-title" style={{ fontSize: "2rem" }}>لماذا يثق عملاؤنا في الدكتور لنقل الأثاث</h2>
                            <p className="lead-text">نلتزم بخدمات احترافية تبدأ من أول اتصال وتستمر حتى إعادة تركيب الأثاث بدقة في مكانك الجديد.</p>
                            <ul className="list-unstyled" style={{ color: "var(--neutral-700)" }}>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> معاينة مجانية لوضع خطة نقل دقيقة وتحديد عرض السعر بوضوح.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> تغليف احترافي بمواد عالية الجودة يحمي الأثاث والأجهزة الحساسة من أي تلف.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> شاحنات مجهزة وفرق مدرّبة تضمن سرعة الإنجاز مع متابعة مستمرة طوال الرحلة.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="process-grid">
                                <div className="process-item">
                                    <span className="step">01</span>
                                    <h4>المعاينة والتخطيط</h4>
                                    <p>نزورك في الوقت المتفق عليه لفحص الأثاث ومسارات الونش ثم نضع خطة عمل واضحة وجداول زمنية دقيقة.</p>
                                </div>
                                <div className="process-item">
                                    <span className="step">02</span>
                                    <h4>التغليف والتنفيذ</h4>
                                    <p>نغلف كل قطعة بعناية، ونفك ما يلزم قبل التحميل، ونستخدم معدات الرفع الحديثة لنقل آمن ونظيف.</p>
                                </div>
                                <div className="process-item">
                                    <span className="step">03</span>
                                    <h4>التسليم والتركيب</h4>
                                    <p>نصل في الموعد المحدد، نعيد تركيب الأثاث وترتيبه حسب رغبتك ونتأكد من رضاك قبل مغادرة الفريق.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="tag-pill"><i className="fa-solid fa-map-location-dot"></i><span>مناطق الخدمة</span></span>
                        <h2 className="section-title">نخدمك في القاهرة والجيزة والمدن المجاورة</h2>
                        <p className="section-subtitle">انتشارنا الواسع يضمن الوصول إليك بسرعة سواء كنت داخل القاهرة الكبرى أو في المدن الجديدة المحيطة.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100 text-center" style={{ padding: "2rem" }}>
                                <span className="icon-circle"><i className="fa-solid fa-location-dot"></i></span>
                                <h3>قسم المعاينات الميدانية</h3>
                                <p>فريق المعاينة يزورك لتحديد حجم العفش ومسارات التحميل وتقديم خطة دقيقة قبل يوم النقل.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100 text-center" style={{ padding: "2rem" }}>
                                <span className="icon-circle"><i className="fa-solid fa-road"></i></span>
                                <h3>أسطول النقل الحديث</h3>
                                <p>شاحناتنا المزودة بالونش الهيدروليكي وأنظمة GPS تتابع الرحلة لحظة بلحظة لضمان الأمان الكامل.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100 text-center" style={{ padding: "2rem" }}>
                                <span className="icon-circle"><i className="fa-solid fa-warehouse"></i></span>
                                <h3>مخازن التخزين المؤمنة</h3>
                                <p>مساحات تخزين مكيفة ومؤمنة بالكاميرات للمحافظة على الأثاث خلال الفترات القصيرة أو الطويلة.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="tag-pill"><i className="fa-solid fa-camera"></i><span>من أعمالنا</span></span>
                        <h2 className="section-title">نماذج من أعمال نقل العفش لعملائنا</h2>
                        <p className="section-subtitle">صور حقيقية لعمليات النقل والتغليف والتحميل التي ينفذها فريقنا يومياً في مختلف المناطق.</p>
                    </div>
                    <div className="gallery-grid">
                        <figure>
                            <img src="/images/WhatsApp Image 2020-09-07 at 11.13.40 PM (2) (1).jpg" alt="تغليف غرفة نوم خشبية" loading="lazy" />
                            <figcaption>تغليف غرفة نوم كاملة باستخدام خامات عالية الجودة</figcaption>
                        </figure>
                        <figure>
                            <img src="/images/WhatsApp Image 2020-09-07 at 11.13.39 PM (1).jpeg" alt="تحميل أثاث عبر ونش هيدروليكي" loading="lazy" />
                            <figcaption>تحميل الأثاث بالونش للحفاظ على سلامة القطع الثقيلة</figcaption>
                        </figure>
                        <figure>
                            <img src="/images/WhatsApp Image 2020-09-07 at 11.13.38 PM (1).jpeg" alt="تخزين أثاث داخل مخزن مؤمن" loading="lazy" />
                            <figcaption>تخزين آمن للأثاث داخل مخازن مكيفة ومراقبة</figcaption>
                        </figure>
                        <figure>
                            <img src="/images/WhatsApp Image 2020-09-07 at 11.13.39 PM.jpeg" alt="فريق العمل أثناء تركيب الأثاث" loading="lazy" />
                            <figcaption>إعادة تركيب وترتيب الأثاث في الموقع الجديد أمام العميل</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="surface-card" style={{ padding: "2.5rem", background: "rgba(159,107,63,0.08)" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <h2 className="section-title" style={{ fontSize: "1.9rem" }}>خدمة عملاء متاحة 24 ساعة طوال الأسبوع</h2>
                                <p className="lead-text" style={{ fontSize: "1.05rem" }}>نتابعك خطوة بخطوة من لحظة الاتصال وحتى اكتمال التركيب، ونوفر دعماً فورياً لأي استفسار إضافي.</p>
                            </div>
                            <div className="col-lg-4 text-lg-right text-center">
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill mb-2">احجز زيارتك المجانية الآن</a>
                                <div className="d-inline-flex align-items-center" style={{ gap: "0.5rem" }}>
                                    <i className="fa-solid fa-phone-volume text-primary ml-2"></i>
                                    <a href="tel:01097060751" className="fw-bold text-dark">01097060751</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MovingCompany",
                        "name": "الدكتور لنقل الأثاث",
                        "image": "/images/hero-relocation.jpg",
                        "url": "https://wa.me/201097060751",
                        "telephone": "+201097060751",
                        "areaServed": ["القاهرة", "الجيزة", "مدينة نصر", "6 أكتوبر", "الشيخ زايد"],
                        "sameAs": ["https://wa.me/201097060751"],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "EG",
                            "addressLocality": "القاهرة",
                            "addressRegion": "القاهرة الكبرى"
                        },
                        "priceRange": "متوسط",
                        "description": "شركة نقل عفش مصرية توفر خدمات التغليف، الونش الهيدروليكي، والنقل الداخلي بين أحياء القاهرة والجيزة."
                    })
                }}
            />
        </>
    );
}
