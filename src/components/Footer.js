import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-modern" dir="rtl">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6>المارد لنقل الأثاث</h6>
                        <p>نقدم خدمات نقل، تغليف، وتخزين الأثاث للأسر والشركات داخل مصر بخبرة تتجاوز 20 عاماً، مع التزام كامل بالمواعيد وسلامة الأثاث.</p>
                        <div className="social-links mt-3">
                            <a href="https://wa.me/201097060751" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h6>روابط سريعة</h6>
                        <ul className="list-unstyled mb-0 contact-list">
                            <li className="mb-2"><Link href="/">الرئيسية</Link></li>
                            <li className="mb-2"><Link href="/about">من نحن</Link></li>
                            <li className="mb-2"><Link href="/services/pro-packing">تغليف الأثاث</Link></li>
                            <li className="mb-2"><Link href="/services/home-moving">نقل المنازل</Link></li>
                            <li className="mb-2"><Link href="/services/business-relocation">حلول الشركات</Link></li>
                            <li><a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>بيانات التواصل</h6>
                        <ul className="list-unstyled mb-0 contact-list">
                            <li className="mb-2"><i className="fa-solid fa-phone ml-2"></i><a href="tel:01097060751">01097060751</a> / <a href="tel:01202750832">01202750832</a></li>
                            <li className="mb-2"><i className="fa-solid fa-whatsapp ml-2"></i><a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer">واتساب المارد</a></li>
                            <li className="mb-2"><i className="fa-solid fa-envelope ml-2"></i><a href="mailto:khaledahmed24680@gmail.com">khaledahmed24680@gmail.com</a></li>
                            <li className="mb-2"><i className="fa-solid fa-location-dot ml-2"></i>القاهرة، مدينة نصر - شارع محمد حسنين هيكل</li>
                            <li><i className="fa-solid fa-clock ml-2"></i>خدمة الطوارئ متاحة 24/7</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">© {currentYear} المارد لنقل الأثاث. جميع الحقوق محفوظة.</p>
                    </div>
                    <div className="col-md-6 text-md-right text-center mt-3 mt-md-0">
                        <p className="mb-0">تم تصميم الموقع ليواكب احتياجات النقل داخل مصر.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
