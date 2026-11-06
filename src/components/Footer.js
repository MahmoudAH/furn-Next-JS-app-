import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="site-footer-modern" dir="rtl">
                <div className="content-container">
                    <div className="footer-grid-layout">
                        {/* 1. About the Brand */}
                        <div className="footer-col-about">
                            <div className="footer-brand-header">
                                <BrandLogo className="brand-logo" />
                            </div>
                            <p className="footer-about-text">
                                ايجي موف لخدمات نقل الأثاث والعفش في القاهرة والجيزة. نساعدك في تخطيط النقل، تغليف الأثاث، والفك والتركيب وفق تفاصيل كل عملية.
                            </p>
                            <div className="footer-social-strip">
                                <a href="https://wa.me/201041924242" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="tel:01041924242" aria-label="Phone" className="footer-social-btn">
                                    <i className="fa-solid fa-phone"></i>
                                </a>
                            </div>
                        </div>

                        {/* 2. Services Links */}
                        <div className="footer-col-nav">
                            <h4 className="footer-section-title">خدماتنا</h4>
                            <ul className="footer-link-items">
                                <li><Link href="/services/pro-packing">تغليف الأثاث الاحترافي</Link></li>
                                <li><Link href="/services/home-moving">نقل المنازل والشقق</Link></li>
                                <li><Link href="/services/business-relocation">حلول الشركات والمكاتب</Link></li>
                                <li><Link href="/services/home-moving">ونش رفع العفش الهيدروليكي</Link></li>
                                <li><Link href="/services/pro-packing">فك وتركيب المطابخ والستائر</Link></li>
                            </ul>
                        </div>

                        {/* 3. Quick Links */}
                        <div className="footer-col-nav">
                            <h4 className="footer-section-title">روابط سريعة</h4>
                            <ul className="footer-link-items">
                                <li><Link href="/">الرئيسية</Link></li>
                                <li><Link href="/about">من نحن</Link></li>
                                <li><Link href="/blog">المدونة</Link></li>
                                <li><Link href="/contact">طلب معاينة مجانية</Link></li>
                                <li><Link href="/contact">تواصل مع الإدارة</Link></li>
                                <li><a href="https://wa.me/201041924242" target="_blank" rel="noopener noreferrer">دردشة واتساب مباشرة</a></li>
                            </ul>
                        </div>

                        {/* 4. Contact Info */}
                        <div className="footer-col-contact">
                            <h4 className="footer-section-title">بيانات التواصل المباشر</h4>
                            <ul className="footer-contact-list">
                                <li className="footer-contact-entry">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <div>
                                        <span className="contact-label">خدمة العملاء والحجوزات</span>
                                        <a href="tel:01041924242" className="contact-val">01041924242</a>
                                    </div>
                                </li>
                                <li className="footer-contact-entry">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <div>
                                        <span className="contact-label">واتساب الاستفسارات والأسعار</span>
                                        <a href="https://wa.me/201041924242" target="_blank" rel="noopener noreferrer" className="contact-val">
                                            إرسال صور العفش لعرض السعر
                                        </a>
                                    </div>
                                </li>
                                <li className="footer-contact-entry">
                                    <i className="fa-solid fa-clock"></i>
                                    <div>
                                        <span className="contact-label">أوقات العمل</span>
                                        <span className="contact-text">8 ص - 11 م (خدمة الطوارئ 24/7)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom-divider"></div>

                    <div className="footer-bottom-row">
                        <p className="footer-copy-text">
                            © {currentYear} ايجي موف لنقل الأثاث. جميع الحقوق محفوظة.
                        </p>
                        <p className="footer-coverage-text">
                            خدمات نقل الأثاث والعفش في القاهرة والجيزة.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Mobile Fixed Quick-Contact Bar */}
            <div className="mobile-bottom-quickbar">
                <div className="mobile-quickbar-grid">
                    <a
                        href="https://wa.me/201041924242?text=مرحباً، أود معرفة أسعار نقل العفش"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp quickbar-btn"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>واتساب فوري</span>
                    </a>
                    <a
                        href="tel:01041924242"
                        className="btn btn-primary quickbar-btn"
                    >
                        <i className="fa-solid fa-phone-volume"></i>
                        <span>اتصل بنا</span>
                    </a>
                </div>
            </div>
        </>
    );
}
