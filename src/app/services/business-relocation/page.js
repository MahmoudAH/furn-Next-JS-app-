import Link from 'next/link';
import PageBanner from '../../../components/PageBanner';

export const metadata = {
    title: 'حلول الشركات والمكاتب',
    description: 'نقل مقرات الشركات، المكاتب الإدارية، المعارض التجارية، وغرف السيرفرات باحترافية عالية وجداول زمنية مرنة تقلل فترات التوقف.',
};

export default function BusinessRelocationService() {
    return (
        <>
            <PageBanner
                tag="حلول متخصصة لقطاع الأعمال"
                title="خدمة نقل مقرات الشركات والمكاتب"
                subtitle="خطط تنفيذ مرنة أثناء عطلات نهاية الأسبوع أو المساء لضمان استمرارية أعمالكم دون أي تعطل."
                breadcrumb="حلول الشركات والمكاتب"
                image="/images/real/fleet/moving-trucks.jpeg"
            />

            <div className="content-container section pt-0">
                {/* Service Hero */}
                <section className="surface-card mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="tag-pill mb-3">
                                <i className="fa-solid fa-building"></i>
                                <span>حلول الشركات والمشروعات</span>
                            </span>
                            <h2 className="section-title">
                                نقل مقرات الشركات والمكاتب دون تعطيل سير العمل
                            </h2>
                            <p className="lead-text">
                                ندرك في الونش أن كل ساعة توقف في الشركة تعني تكلفة. لذلك نوفر خطط نقل مرنة خلال العطلات الأسبوعية أو الفترات المسائية مع إشراف هندسي وتنفيذي دقيق.
                            </p>
                            <ul className="list-unstyled mt-4" style={{ color: "var(--clr-neutral-700)" }}>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>مدير مشروع مخصص ينسق عملية النقل من البداية حتى التسليم.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>تغليف خاص ومؤمن للشاشات وأجهزة الحاسوب وغرف السيرفرات.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>إعادة تجميع محطات العمل (Workstations) وترتيب الملفات بالأرقام.</span>
                                </li>
                            </ul>
                            <div className="service-actions">
                                <a href="https://wa.me/201097060751?text=مرحباً، أود التنسيق لنقل مقر شركة" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <i className="fa-brands fa-whatsapp ml-1"></i>
                                    <span>طلب عرض سعر للشركات</span>
                                </a>
                                <a href="tel:01202750832" className="btn btn-primary">
                                    <i className="fa-solid fa-phone ml-1"></i>
                                    <span>01202750832 (مدير المشروعات)</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img 
                                src="/images/real/hoist/truck-lift-wide.jpeg"
                                alt="ونش رفع الأثاث ضمن تجهيزات عملية الانتقال"
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

                {/* Corporate Sectors */}
                <section className="section pt-0">
                    <div className="section-header">
                        <span className="tag-pill">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>قطاعات نخدمها</span>
                        </span>
                        <h2 className="section-title">مجالات التخصص لقطاع الأعمال</h2>
                        <p className="section-subtitle">
                            حلول لوجستية مصممة خصيصاً للشركات والمؤسسات والعيادات والمعارض.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-building-columns"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">المقرات الإدارية والشركات</h3>
                                <p className="text-muted mb-0">نقل مكاتب المديرين، غرف الاجتماعات، وحدات عمل الموظفين، وأرشيف الملفات مع توثيق ترقيم الصناديق.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-hotel"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">الفنادق والقرى السياحية</h3>
                                <p className="text-muted mb-0">نقل وتفريغ وتوزيع أثاث الغرف الفندقية والمطاعم والتجهيزات مع الالتزام التام بالجداول الزمنية للافتتاح.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-server"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">الأجهزة والعيادات الطبية</h3>
                                <p className="text-muted mb-0">تغليف مضاد للصدمات والاهتزاز للأجهزة الطبية ومعامل التحاليل وفرق عمل مدربة على التعامل بحرص شديد.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
