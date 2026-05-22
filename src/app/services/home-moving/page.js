export const metadata = {
    title: 'نقل وتوزيع المنازل',
};

export default function HomeMovingService() {
    return (
        <div className="container">
            <section className="surface-card mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <span className="tag-pill mb-3"><i className="fa-solid fa-truck-fast"></i><span>نقل المنازل</span></span>
                        <h1 className="section-title" style={{ fontSize: "2rem" }}>رحلة نقل متكاملة من الباب إلى الباب</h1>
                        <p className="lead-text" style={{ fontSize: "1.05rem" }}>نوفر فريقاً كاملاً يتولى الرفع، التغليف، النقل، والتركيب داخل القاهرة والمحافظات مع إشراف مباشر على كل خطوة.</p>
                        <ul className="list-unstyled mt-4" style={{ color: "var(--neutral-700)" }}>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> معاينة مجانية وتحديد خطة زمنية واضحة قبل يوم النقل.</li>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> سيارات مغلقة بأسطح مبطنة تناسب العمارات والأحياء السكنية الضيقة.</li>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> تركيب كامل للمطابخ وغرف النوم والأجهزة بعد الوصول.</li>
                        </ul>
                        <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill">ابدأ حجز نقل منزلك</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/mard.jpg" alt="فريق نقل المنازل" className="img-fluid" style={{ borderRadius: "24px", height: "420px", width: "100%", objectFit: "cover", boxShadow: "var(--shadow-soft)" }} />
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="surface-card">
                    <h2 className="section-title" style={{ fontSize: "1.8rem" }}>باقات النقل</h2>
                    <div className="row mt-4 g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(31,41,51,0.05)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>باقة القاهرة الكبرى</h4>
                                <p>فريق مكون من 6 فنيين وسائقين، سيارة مغلقة، تغليف كامل، وتركيب في نفس اليوم للمنازل داخل القاهرة والجيزة.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(243,162,97,0.09)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>باقة المحافظات</h4>
                                <p>سيارتان أو أكثر حسب حجم العفش، متابعة GPS طوال الرحلة، واستراحة مخطط لها للتأكد من ثبات الحمولة.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(159,107,63,0.08)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>باقة الانتقال السريع</h4>
                                <p>نقل خلال 24 ساعة مع فريق إضافي للعمل على فترتين متتاليتين لإتمام النقل والتركيب في يوم واحد.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="row">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="surface-card h-100" style={{ padding: "2rem" }}>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>ماذا يشمل عرضنا؟</h3>
                            <ul className="list-unstyled" style={{ color: "var(--neutral-700)" }}>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> فني نجارة لتفكيك وتركيب غرف النوم والدواليب.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> فني كهرباء للتعامل مع الأجهزة الثقيلة مثل التكييفات والبوتاجازات.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> تغليف كامل للأجهزة المنزلية ومحتويات المطبخ بأكياس معقمة.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> تنظير أخير للمكان مع العميل والتأكد من تركيب كل قطعة في مكانها.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="surface-card" style={{ padding: "2rem", background: "rgba(243,162,97,0.08)" }}>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>التواصل والحجز</h3>
                            <p>أرسل لنا صور الغرف عبر واتساب أو تواصل معنا هاتفياً، وسنعود إليك بعرض سعر وتوقيت مناسب خلال ساعة واحدة.</p>
                            <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill">دردشة واتساب</a>
                                <a href="tel:01097060751" className="btn btn-primary rounded-pill">اتصال مباشر 01097060751</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
