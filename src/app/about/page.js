import Link from 'next/link';
import PageBanner from '../../components/PageBanner';

export const metadata = {
    title: 'من نحن',
    description: 'تعرف على الونش، أسطول شاحناتنا المجهزة، فريق العمل الفني، والتزامنا بمعايير الأمان والعناية بالأثاث.',
};

export default function About() {
    return (
        <>
            {/* Consistent Internal Page Banner */}
            <PageBanner
                tag="خبرة أكثر من 20 عاماً في نقل الأثاث"
                title="من نحن - شركة الونش لنقل وتغليف الأثاث"
                subtitle="رحلتنا بدأت في القاهرة لنكون الخيار الأول والأكثر موثوقية للأسر والشركات في مصر."
                breadcrumb="من نحن"
                image="/images/about-moving-banner.svg"
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
                                بدأنا مسيرتنا في القاهرة بهدف إعادة تعريف مفهوم نقل العفش في مصر، وتحويل تجربة الانتقال من مصدر قلق وإرهاق إلى تجربة مريحة وسلسة وآمنة تماماً.
                            </p>
                            <p style={{ color: "var(--clr-neutral-700)" }}>
                                اليوم، نفتخر بامتلاكنا أسطولاً متكاملاً من الشاحنات الصندوقية المبطنة، وأحدث الأوناش الهيدروليكية التي تصل لأعلى الطوابق، إلى جانب طاقم فني معتمد يضم نجارين، كهربائيين، وخبراء تغليف متخصصين.
                            </p>
                            
                            <div className="metrics-wrap">
                                <div className="metric">
                                    <strong>+9,500</strong>
                                    <span>عملية نقل ناجحة</span>
                                </div>
                                <div className="metric">
                                    <strong>100%</strong>
                                    <span>ضمان سلامة العفش</span>
                                </div>
                                <div className="metric">
                                    <strong>+40</strong>
                                    <span>فني نجار ومحترف تغليف</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img 
                                src="/images/about-careful-moving.svg"
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
                                    <span>الضمان والأمان</span>
                                </span>
                                <h3 className="about-card-title">
                                    التزام كامل ووثيقة ضمان
                                </h3>
                                <p className="text-muted mb-0">
                                    نتحمل المسؤولية الكاملة عن كافة المنقولات من لحظة استلامها وحتى تسليمها في وجهتك الجديدة، مع تعويض فوري حال حدوث أي ضرر.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
