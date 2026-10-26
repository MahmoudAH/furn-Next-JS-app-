import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';

export const metadata = {
    title: 'الونش لنقل وتغليف الأثاث | نقل عفش بالقاهرة والجيزة',
    description: 'الونش يقدم خدمات نقل عفش شاملة تشمل التغليف الاحترافي، الونش الهيدروليكي، وسيارات النقل المجهزة في القاهرة والجيزة والمحافظات.',
    keywords: 'شركة نقل عفش بالقاهرة, شركة نقل أثاث بالجيزة, ونش رفع اثاث, تغليف الاثاث, فك وتركيب عفش, اسعار نقل الاثاث في مصر',
    openGraph: {
        images: ['/images/real/hoist/truck-lift-wide.jpeg'],
    }
};

export default function Home() {
    return (
        <>
            {/* 1. HERO SLIDER */}
            <HeroCarousel />

            {/* 2. CORE SERVICES */}
            <section className="content-container section pt-0">
                <div className="section-header">
                    <span className="tag-pill">
                        <i className="fa-solid fa-cubes-stacked"></i>
                        <span>خدماتنا المتكاملة</span>
                    </span>
                    <h2 className="section-title">كل ما تحتاجه لنقل عفشك بأمان تام من البداية للنهاية</h2>
                    <p className="section-subtitle">
                        نقدم باقات نقل متكاملة تشمل الفك، التغليف بالخامات المستوردة، التحميل بأحدث الأوناش الهيدروليكية، والتركيب في مكانك الجديد.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Service 1 */}
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/real/assembly/bed-assembly.jpeg" alt="فني يعيد تركيب أثاث غرفة النوم" loading="eager" />
                                <span className="feature-overlay">ونش هيدروليكي حتى الدور 18</span>
                            </div>
                            <div className="card-body">
                                <h3>نقل وتفكيك وتركيب الأثاث</h3>
                                <p>نجارون متخصصون في فك وتركيب غرف النوم، المطابخ، والستائر بدقة متناهية ودون أي تجريح أو خدوش.</p>
                                <Link href="/services/pro-packing" className="btn-link">
                                    <span>تفاصيل خدمة الفك والتركيب</span>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* Service 2 */}
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/real/packing/team-wrapping.jpeg" alt="فريق يغلّف قطعة أثاث لحمايتها أثناء النقل" loading="eager" />
                                <span className="feature-overlay">خامات تغليف ألمانية</span>
                            </div>
                            <div className="card-body">
                                <h3>تغليف احترافي للأجهزة والزجاج</h3>
                                <p>حماية متعددة الطبقات بالفقاعات، الكراتين المبطنة، والاستريتش الحراري للحفاظ على الأجهزة الحساسة والتحف.</p>
                                <Link href="/services/home-moving" className="btn-link">
                                    <span>شاهد تفاصيل التغليف الآمن</span>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* Service 3 */}
                    <div className="col-md-6 col-lg-4">
                        <article className="feature-card">
                            <div className="feature-visual">
                                <img src="/images/real/hoist/truck-lift-wide.jpeg" alt="ونش هيدروليكي يساعد على رفع الأثاث بأمان" loading="eager" />
                                <span className="feature-overlay">سيارات صندوقية مبطنة</span>
                            </div>
                            <div className="card-body">
                                <h3>نقل المنازل والشركات والمخازن</h3>
                                <p>شاحنات صندوقية مغلقة ومجهزة لنقل أثاث الشقق والمكاتب والمعارض مع إمكانية التخزين الآمن المؤقت.</p>
                                <Link href="/services/business-relocation" className="btn-link">
                                    <span>حلول نقل الشركات والمنازل</span>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US & WORK PROCESS */}
            <section className="content-container section pt-0">
                <div className="surface-card trust-section">
                    <div className="trust-overview">
                        <div className="trust-intro">
                            <span className="tag-pill">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>لماذا تختار الونش؟</span>
                            </span>
                            <h2 className="section-title">
                                لماذا يثق بنا آلاف العملاء في نقل مقتنياتهم؟
                            </h2>
                            <p className="lead-text">
                                نحن ندرك قيمة ممتلكاتك وذكرياتك، لذلك صممنا منظومة عمل محكمة ترتكز على الانضباط والدقة في المواعيد وسلامة الأثاث.
                            </p>
                        </div>
                        <ul className="trust-benefits">
                            <li className="trust-benefit">
                                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                                <span>
                                    <strong>معاينة مجانية واستشارة فورية:</strong> نقيم حجم العفش ومسار الونش ونقدم لك عرض سعر واضح ومحدد دون أي رسوم خفية.
                                </span>
                            </li>
                            <li className="trust-benefit">
                                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                                <span>
                                    <strong>تأمين شامل وسلامة مضمونة 100%:</strong> نلتزم بتعويض أو إصلاح أي قطعة تتأثر أثناء عملية النقل لا قدر الله.
                                </span>
                            </li>
                            <li className="trust-benefit">
                                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                                <span>
                                    <strong>فرق فنية مدربة بزي موحد:</strong> نجارون، كهربائيون، وفنيو رفع عفش على أعلى درجات المهنية والأمانة.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="trust-process">
                        <div className="trust-process-heading">
                            <span>خطوات واضحة من البداية للنهاية</span>
                            <h3>رحلة نقل مريحة وآمنة</h3>
                        </div>
                        <div className="process-grid">
                            <div className="process-item">
                                <span className="step">01</span>
                                <h4>المعاينة والاتفاق</h4>
                                <p>نستقبل طلبك عبر الواتساب أو الهاتف، ونحدد متطلبات النقل وعدد الغرف والأوناش المطلوبة بدقة.</p>
                            </div>
                            <div className="process-item">
                                <span className="step">02</span>
                                <h4>الفك والتغليف والتحميل</h4>
                                <p>نصل في الموعد المحدد بالدقيقة، نفك القطع ونغلف كل عنصر بخامات متخصصة ونحمله بالونش الهيدروليكي.</p>
                            </div>
                            <div className="process-item">
                                <span className="step">03</span>
                                <h4>التسليم وإعادة التركيب</h4>
                                <p>نفرغ العفش في عنوانك الجديد، ونعيد تركيب الغرف والمطابخ والأجهزة ونتأكد من رضاك الكامل قبل المغادرة.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. WORK GALLERY (REAL PROOFS) */}
            <section className="section pt-0">
                <div className="content-container">
                    <div className="section-header">
                        <span className="tag-pill">
                            <i className="fa-solid fa-camera-retro"></i>
                            <span>معرض الأعمال</span>
                        </span>
                        <h2 className="section-title">نماذج حقيقية من عمليات النقل والتغليف اليومية</h2>
                        <p className="section-subtitle">
                            صور حقيقية لفرق عملنا أثناء فك وتغليف وتحميل الأثاث بأعلى معايير الحماية لعملائنا في مختلف المناطق.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <figure className="gallery-card mb-0">
                            <div className="gallery-img-wrap">
                                <img src="/images/real/packing/wrapped-sofas.jpeg" alt="أرائك مغلفة لحمايتها قبل نقلها" loading="eager" />
                                <span className="gallery-badge-overlay"><i className="fa-solid fa-shield-halved ml-1"></i> تغليف آمن</span>
                            </div>
                            <figcaption>
                                <h4>تغليف غرف النوم الكاملة</h4>
                                <p>حماية شاملة بالبابل متعدد الطبقات والاستريتش الحراري لمنع أي احتكاك أثناء النقل.</p>
                            </figcaption>
                        </figure>

                        <figure className="gallery-card mb-0">
                            <div className="gallery-img-wrap">
                                <img src="/images/real/hoist/building-lift.jpeg" alt="ونش هيدروليكي يرفع الأثاث إلى طابق مرتفع" loading="eager" />
                                <span className="gallery-badge-overlay"><i className="fa-solid fa-up-long ml-1"></i> ونش هيدروليكي</span>
                            </div>
                            <figcaption>
                                <h4>رفع العفش للأدوار المرتفعة</h4>
                                <p>أوناش حديثة تصل للطابق الثامن عشر لتحميل وتنزيل القطع الثقيلة والزجاجية دون خدوش.</p>
                            </figcaption>
                        </figure>

                        <figure className="gallery-card mb-0">
                            <div className="gallery-img-wrap">
                                <img src="/images/real/packing/wrapped-appliances.jpeg" alt="أجهزة منزلية مغلفة لحمايتها أثناء النقل" loading="eager" />
                                <span className="gallery-badge-overlay"><i className="fa-solid fa-box ml-1"></i> صناديق مقواة</span>
                            </div>
                            <figcaption>
                                <h4>تغليف الأجهزة والمقتنيات الثمينة</h4>
                                <p>كراتين خماسية الطبقات مبطنة بفواصل لعزل الصدمات وحماية الأطقم الصيني والشاشات.</p>
                            </figcaption>
                        </figure>

                        <figure className="gallery-card mb-0">
                            <div className="gallery-img-wrap">
                                <img src="/images/real/assembly/bed-assembly.jpeg" alt="فني يعمل على تركيب سرير في المنزل" loading="eager" />
                                <span className="gallery-badge-overlay"><i className="fa-solid fa-screwdriver-wrench ml-1"></i> فك وتركيب</span>
                            </div>
                            <figcaption>
                                <h4>إعادة التركيب والتسليم النهائي</h4>
                                <p>فريق نجارة متخصص لإعادة تركيب غرف النوم والمطابخ والستائر بدقة متناهية أمام العميل.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* 6. PROMO BANNER */}
            <div className="content-container promo-container-spacing">
                <div className="promo-banner">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-3 mb-lg-0">
                            <span className="badge" style={{ background: "rgba(255, 153, 0, 0.25)", color: "#fef08a", border: "1px solid rgba(255, 153, 0, 0.5)", borderRadius: "999px", padding: "0.35rem 0.85rem", marginBottom: "0.5rem", display: "inline-block" }}>
                                <i className="fa-solid fa-bolt ml-1"></i> عرض خاص لفترة محدودة
                            </span>
                            <h3 className="text-white fw-bold mb-1">
                                خصم 20% على خدمات نقل العفش مع المعاينة والونش الهيدروليكي!
                            </h3>
                            <p className="mb-0 text-white-50">
                                احصل على أفضل سعر لنقل شقتك أو فيلتك داخل القاهرة الكبرى والمدن الجديدة (التجمع، أكتوبر، زايد، الشروق).
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end text-start">
                            <a
                                href="https://wa.me/201097060751?text=مرحباً، أود الاستفادة من خصم الـ 20% على نقل العفش"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <i className="fa-brands fa-whatsapp ml-1"></i>
                                <span>احصل على الخصم الآن</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. SERVICE COVERAGE AREAS */}
            <section className="section pt-0">
                <div className="content-container">
                    <div className="section-header">
                        <span className="tag-pill">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>نطاق الخدمة</span>
                        </span>
                        <h2 className="section-title">نغطي كافة محافظات ومناطق جمهورية مصر العربية</h2>
                        <p className="section-subtitle">
                            جاهزون لخدمتك في جميع أحياء القاهرة والجيزة والمدن الجديدة، بالإضافة لرحلات النقل بين المحافظات.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="service-feature-box">
                                <span className="icon-circle">
                                    <i className="fa-solid fa-city"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">القاهرة والمدن الجديدة</h3>
                                <p className="text-muted mb-0">مدينة نصر، مصر الجديدة، التجمع الخامس، الرحاب، مدينتي، الشروق، العاصمة الإدارية، والمعادي.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-feature-box">
                                <span className="icon-circle">
                                    <i className="fa-solid fa-truck-moving"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">الجيزة وضواحيها</h3>
                                <p className="text-muted mb-0">الدقي، المهندسين، 6 أكتوبر، الشيخ زايد، حدائق الأهرام، الهرم، وفيصل بأحدث الأوناش.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-feature-box">
                                <span className="icon-circle">
                                    <i className="fa-solid fa-route"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">المحافظات والساحل</h3>
                                <p className="text-muted mb-0">الإسكندرية، الساحل الشمالي، الدلتا، القناة، والصعيد بسيارات شحن حديثة ومراقبة بنظام GPS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL 24/7 CALL TO ACTION */}
            <section className="section pt-0">
                <div className="content-container">
                    <div className="cta-banner-premium">
                        <div className="cta-banner-backdrop"></div>
                        <div className="cta-banner-layout">
                            <div className="cta-banner-copy">
                                <span className="cta-pill-tag">
                                    <i className="fa-solid fa-clock"></i>
                                    <span>دعم واستجابة فورية 24/7</span>
                                </span>
                                <h2 className="cta-banner-title">
                                    جاهز لنقل عفشك بأقل مجهود وأعلى درجات الأمان؟
                                </h2>
                                <p className="cta-banner-text">
                                    تواصل معنا الآن عبر الواتساب أو الهاتف، وسنوافيك بعرض سعر فوري وخطة نقل محكمة ومعاينة مجانية في الوقت المناسب لك.
                                </p>
                                <div className="cta-trust-items">
                                    <span className="cta-trust-check">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>معاينة مجانية بدون التزام</span>
                                    </span>
                                    <span className="cta-trust-check">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>ضمان سلامة العفش 100%</span>
                                    </span>
                                    <span className="cta-trust-check">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>أسعار ثابتة دون مصاريف خفية</span>
                                    </span>
                                </div>
                            </div>
                            <div className="cta-banner-actions">
                                <div className="cta-buttons-stack">
                                    <a
                                        href="https://wa.me/201097060751?text=مرحباً، أود حجز موعد لنقل العفش"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-whatsapp cta-main-btn"
                                    >
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <span>احجز بالواتساب الآن</span>
                                    </a>
                                    <a
                                        href="tel:01097060751"
                                        className="btn cta-phone-btn"
                                    >
                                        <i className="fa-solid fa-phone-volume"></i>
                                        <span dir="ltr">01097060751</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Schema Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MovingCompany",
                        "name": "الونش لنقل وتغليف الأثاث",
                        "image": "https://furniture-moving-eg.com/images/real/hoist/truck-lift-wide.jpeg",
                        "url": "https://furniture-moving-eg.com/",
                        "telephone": "+201097060751",
                        "areaServed": ["القاهرة", "الجيزة", "مدينة نصر", "التجمع الخامس", "6 أكتوبر", "الشيخ زايد", "المعادي"],
                        "sameAs": ["https://wa.me/201097060751"],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "EG",
                            "addressLocality": "القاهرة",
                            "addressRegion": "القاهرة الكبرى"
                        },
                        "priceRange": "$$",
                        "description": "شركة متخصصة في نقل وتغليف الأثاث والعفش بالقاهرة والجيزة مع خدمات الونش الهيدروليكي وسيارات مغلقة ومجهزة."
                    })
                }}
            />
        </>
    );
}
