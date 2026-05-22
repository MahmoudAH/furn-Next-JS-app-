export const metadata = {
    title: 'من نحن',
};

export default function About() {
    return (
        <div className="container">
            <section className="surface-card mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <span className="tag-pill mb-3"><i className="fa-solid fa-people-carry-box"></i><span>قصتنا في مصر</span></span>
                        <h1 className="section-title" style={{ fontSize: "2.2rem" }}>المارد لنقل الأثاث… شريكك في النقل الآمن منذ 2003</h1>
                        <p className="lead-text" style={{ fontSize: "1.05rem" }}>بدأنا في القاهرة بفريق صغير وشاحنة واحدة، واليوم نخدم محافظات مصر كافة بأسطول مجهز وفنيين متخصصين في فك وتركيب الأثاث المنزلي والمكتبي.</p>
                        <p>خبرتنا تمتد لعشرين عاماً مع آلاف العمليات الناجحة، من النقل الداخلي داخل القاهرة وحتى الرحلات الطويلة إلى الساحل الشمالي، الصعيد، ومدن القناة. نؤمن أن النقل المريح يبدأ بالتخطيط الجيد، لذلك نوفّر معاينة مجانية، خطة عمل مكتوبة، وجدولاً واضحاً للعميل خطوة بخطوة.</p>
                        <div className="metrics-wrap" style={{ marginTop: "1.75rem" }}>
                            <div className="metric">
                                <strong>+7500</strong>
                                <span>عملية نقل منزل وشركة مكتملة</span>
                            </div>
                            <div className="metric">
                                <strong>120</strong>
                                <span>فني نقل وتغليف ونجارة داخل الفريق</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/WhatsApp Image 2020-09-07 at 11.13.40 PM (2) (1).jpg" alt="فريق المارد أثناء النقل" className="img-fluid" style={{ borderRadius: "24px", boxShadow: "var(--shadow-soft)", objectFit: "cover", width: "100%", height: "420px" }} />
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="surface-card h-100" style={{ padding: "2rem" }}>
                            <span className="tag-pill mb-3"><i className="fa-solid fa-truck"></i><span>أسطولنا</span></span>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>سيارات نقل مغلقة ومجهزة</h3>
                            <p>أسطول سيارات مغلقة متعددة الأحجام، مزودة بالرافعات، الأشرطة المطاطية، وأرضيات مبطنة لحماية العفش أثناء الرحلات الطويلة داخل مصر.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="surface-card h-100" style={{ padding: "2rem" }}>
                            <span className="tag-pill mb-3"><i className="fa-solid fa-user-shield"></i><span>الفريق</span></span>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>خبراء فك وتركيب وتغليف</h3>
                            <p>نخبة من الفنيين والنجارين المختصين في غرف النوم، المطابخ، الأنتيكات، والأجهزة الحساسة بملابس موحدة ومعايير سلامة مشددة.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="surface-card h-100" style={{ padding: "2rem" }}>
                            <span className="tag-pill mb-3"><i className="fa-solid fa-shield-heart"></i><span>الضمان</span></span>
                            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>تأمين شامل على العفش</h3>
                            <p>تغطية تأمينية فورية على الأثاث المنزلي والشركات ضد الكسر والخدوش، مع تعويض فوري في حال حدوث أي ضرر لا قدر الله.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="surface-card">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h2 className="section-title" style={{ fontSize: "1.9rem" }}>قيمنا ترشد كل رحلة نقل</h2>
                            <ul className="list-unstyled" style={{ marginTop: "1.5rem", color: "var(--neutral-700)" }}>
                                <li className="mb-3"><i className="fa-solid fa-check-circle text-primary ml-2"></i> الالتزام بالمواعيد: جداول زمنية دقيقة مع متابعة بالهاتف أو الواتساب قبل الوصول.</li>
                                <li className="mb-3"><i className="fa-solid fa-check-circle text-primary ml-2"></i> الشفافية: عرض سعر موثق يشمل التغليف، النقل، التركيب، وأي خدمات إضافية دون مصاريف مفاجئة.</li>
                                <li className="mb-3"><i className="fa-solid fa-check-circle text-primary ml-2"></i> السلامة أولاً: معدات حماية شخصية، تغليف مرقم، وتثبيت آمن داخل السيارات.</li>
                                <li className="mb-3"><i className="fa-solid fa-check-circle text-primary ml-2"></i> دعم ما بعد النقل: فريق صيانة لإصلاح أي قطعة، وخدمة تنظيف خفيفة للمنزل بعد التفريغ عند الطلب.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="surface-card" style={{ padding: "1.75rem", background: "rgba(243,162,97,0.08)" }}>
                                <h4 style={{ fontWeight: 700, marginBottom: "1rem" }}>رسالتنا</h4>
                                <p style={{ marginBottom: "1.5rem" }}>أن يشعر كل عميل بالاطمئنان من لحظة التواصل وحتى إعادة ترتيب آخر قطعة في منزله أو مكتبه، مع فريق يراعي التفاصيل الصغيرة قبل الكبيرة.</p>
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill">تحدث مع خدمة العملاء</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
