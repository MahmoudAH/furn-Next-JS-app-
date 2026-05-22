export const metadata = {
    title: 'حلول الشركات والمشروعات',
};

export default function BusinessRelocationService() {
    return (
        <div className="container">
            <section className="surface-card mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <span className="tag-pill mb-3"><i className="fa-solid fa-building"></i><span>خدمة الشركات</span></span>
                        <h1 className="section-title" style={{ fontSize: "2rem" }}>نقل مكاتب، معارض، ومشروعات تجارية بأعلى معايير السلامة</h1>
                        <p className="lead-text" style={{ fontSize: "1.05rem" }}>ندير عمليات النقل للمؤسسات داخل مصر بما يشمل الأثاث المكتبي، مراكز البيانات، المعارض التجارية، والفنادق مع خطط تنفيذ على مراحل.</p>
                        <ul className="list-unstyled mt-4" style={{ color: "var(--neutral-700)" }}>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> مدير مشروع متخصص يتابع جميع الفرق الفنية وأوقات التوقف.</li>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> حلول تغليف مخصصة للأجهزة الحساسة وخطوط الإنتاج.</li>
                            <li className="mb-3"><i className="fa-solid fa-check text-primary ml-2"></i> إمكانية العمل ليلاً أو في عطلات نهاية الأسبوع لتقليل أثر التوقف.</li>
                        </ul>
                        <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill">ترتيب اجتماع تعريفي</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/taa.jpg" alt="نقل مشروعات تجارية" className="img-fluid" style={{ borderRadius: "24px", height: "420px", width: "100%", objectFit: "cover", boxShadow: "var(--shadow-soft)" }} />
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="surface-card">
                    <h2 className="section-title" style={{ fontSize: "1.8rem" }}>مجالات نخدمها</h2>
                    <div className="row mt-4 g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(159,107,63,0.08)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>المكاتب والشركات</h4>
                                <p>تخطيط مسبق لانتقال الأقسام، تفكيك وحدات العمل، وتركيب الشبكات الكهربائية والبيانات في الوجهة الجديدة.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(243,162,97,0.09)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>الفنادق والمعارض</h4>
                                <p>تعامل خاص مع الأثاث الفاخر والتحف، وتنسيق مع فرق التصميم الداخلي لضمان فتح الموقع في الموعد.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem", background: "rgba(31,41,51,0.05)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>المعامل الطبية</h4>
                                <p>تغليف وعزل للأجهزة الحساسة مع ضبط درجات الحرارة داخل السيارات وفرق متخصصة في عمليات التحميل.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="surface-card h-100" style={{ padding: "2rem" }}>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>ما الذي نقدمه للشركات؟</h3>
                            <ul className="list-unstyled" style={{ color: "var(--neutral-700)" }}>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> تقرير جدولة تفصيلي يحدد المسؤوليات ومراحل العمل.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> فريق IT لنقل الأجهزة الخادمة، السيرفرات، ومراكز النسخ الاحتياطي.</li>
                                <li className="mb-3"><i className="fa-solid fa-circle-check text-primary ml-2"></i> تخزين مؤقت آمن لأي مخزون أو أجهزة إضافية طوال فترة الانتقال.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="surface-card" style={{ padding: "2rem", background: "rgba(243,162,97,0.08)" }}>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>آلية التعاقد</h3>
                            <p>نبدأ بدراسة احتياجات المشروع، ثم نقدم عرضاً فنياً ومالياً مفصلاً، يلي ذلك جدولة التنفيذ وتحديد نقطة اتصال واحدة مع الفريق.</p>
                            <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill">تواصل مباشر عبر واتساب</a>
                                <a href="tel:01202750832" className="btn btn-primary rounded-pill">اتصل بمدير المشاريع 01202750832</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
