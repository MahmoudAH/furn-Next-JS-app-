import Link from 'next/link';
import PageBanner from '../../../components/PageBanner';

export const metadata = {
    title: 'تغليف الأثاث الاحترافي | الدكتور لنقل الأثاث',
    description: 'خدمات تغليف عفش وأثاث منزلي بالبابل راب، الكراتين المقواة، والبطاطين السميكة لحماية غرف النوم والزجاج والأجهزة الكهربائية.',
};

export default function ProPackingService() {
    return (
        <>
            <PageBanner
                tag="حماية قصوى لمقتنياتك"
                title="خدمة تغليف الأثاث الاحترافي"
                subtitle="خامات تغليف ألمانية مستوردة، كراتين مقواة، وبطاطين سميكة لعزل الصدمات والخدوش."
                breadcrumb="تغليف الأثاث الاحترافي"
                image="/images/banner-pro-packing-desktop.jpg"
                mobileImage="/images/banner-pro-packing-mobile.jpg"
            />

            <div className="content-container section pt-0">
                {/* Service Hero */}
                <section className="surface-card mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="tag-pill mb-3">
                                <i className="fa-solid fa-box-open"></i>
                                <span>تغليف متكامل متعدد الطبقات</span>
                            </span>
                            <h2 className="section-title">
                                تغليف يحمي كل قطعة أثاث ومقتنى ثمين كأنه جديد
                            </h2>
                            <p className="lead-text">
                                التغليف هو خط الدفاع الأول لسلامة العفش. نستخدم مواد تغليف متخصصة لكل نوع من الأثاث سواء كان خشباً، رخاماً، زجاجاً، أو أجهزة إلكترونية.
                            </p>
                            <ul className="list-unstyled mt-4" style={{ color: "var(--clr-neutral-700)" }}>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>بطاطين مبطنة سميكة للأثاث الخشبي تمنع أي احتكاك أو خدش.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>بابل راب هوائي متعدد الطبقات للأجهزة الكهربائية والشاشات والتحف.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-primary"></i>
                                    <span>صناديق كرتونية مقواة ومبطنة بفواصل للزجاجيات ومقتنيات المطبخ.</span>
                                </li>
                            </ul>
                            <div className="service-actions">
                                <a href="https://wa.me/201097060751?text=مرحباً، أريد الاستفسار عن خدمة تغليف الأثاث" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <i className="fa-brands fa-whatsapp ml-1"></i>
                                    <span>طلب معاينة التغليف</span>
                                </a>
                                <a href="tel:01097060751" className="btn btn-outline-primary">
                                    <i className="fa-solid fa-phone ml-1"></i>
                                    <span>01097060751</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img 
                                src="/images/ka.jpg" 
                                alt="تغليف أثاث احترافي" 
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

                {/* Packaging Types Grid */}
                <section className="section pt-0">
                    <div className="section-header">
                        <span className="tag-pill">
                            <i className="fa-solid fa-layer-group"></i>
                            <span>باقات وخامات التغليف</span>
                        </span>
                        <h2 className="section-title">أنواع خامات التغليف المستخدمة</h2>
                        <p className="section-subtitle">
                            نختار الخامة الأنسب لكل نوع قطعة وفقاً لحساسيتها وطبيعة نقلها لضمان الوصول الآمن.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-box"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">التغليف الكرتوني المقوى</h3>
                                <p className="text-muted mb-0">كراتين 5 طبقات مخصصة للأطقم الزجاجية، الملابس، والأجهزة الكهربائية الصغيرة مع ملصقات تعريفية لكل صندوق.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-shield"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">التغليف الفقاعي الهوائي (بابل)</h3>
                                <p className="text-muted mb-0">فقاعات هوائية سميكة لعزل الصدمات والاهتزازات وحماية الشاشات واللوحات والمرايات وأطقم الصيني الفاخرة.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="surface-card h-100" style={{ padding: "1.75rem" }}>
                                <span className="icon-circle">
                                    <i className="fa-solid fa-scroll"></i>
                                </span>
                                <h3 className="h5 fw-bold mb-2">التغليف الاستريتش الحراري</h3>
                                <p className="text-muted mb-0">رولات استريتش صناعي محكم لإغلاق الدواليب، الكنب، والمراتب لمنع دخول الأتربة، الرطوبة، والحشرات أثناء النقل.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
