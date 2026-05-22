"use client";

import { useState } from 'react';
import { submitContact } from './actions';

export default function Contact() {
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const result = await submitContact(formData);

        setStatus(result);
        setIsSubmitting(false);

        if (result.success) {
            e.target.reset();
        }
    };

    return (
        <div className="container">
            <section className="section pt-0 mt-4">
                <div className="text-center mb-5">
                    <span className="tag-pill"><i className="fa-solid fa-comments"></i><span>خدمة العملاء في خدمتك</span></span>
                    <h1 className="section-title" style={{ fontSize: "2.2rem" }}>نحن جاهزون لنقل أثاثك متى أردت</h1>
                    <p className="section-subtitle">أسهل طريقة للتواصل معنا هي الواتساب، فقط أرسل صور الغرف أو قائمة الأثاث وسنجهز لك عرض السعر في أقل من ساعة.</p>
                    <div className="d-flex flex-wrap justify-content-center" style={{ gap: "1rem" }}>
                        <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill"><i className="fa-brands fa-whatsapp ml-2"></i>دردشة واتساب مباشرة</a>
                        <a href="tel:01097060751" className="btn btn-outline-primary rounded-pill"><i className="fa-solid fa-phone-volume ml-2"></i>اتصال فوري 01097060751</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="contact-card">
                            {status && !status.success && (
                                <div className="alert alert-danger rounded" role="alert">
                                    <ul className="mb-0">
                                        <li>{status.message}</li>
                                    </ul>
                                </div>
                            )}

                            {status && status.success && (
                                <div className="alert alert-success rounded" role="alert">
                                    <h5 className="mb-0">{status.message}</h5>
                                </div>
                            )}

                            <h2 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>أرسل طلبك عبر النموذج</h2>
                            <p style={{ color: "var(--neutral-600)" }}>سنعاود الاتصال بك خلال 60 دقيقة لتأكيد التفاصيل واختيار موعد المعاينة المناسب.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="form-name">الاسم الكامل</label>
                                    <input type="text" id="form-name" name="name" className="form-control" placeholder="أدخل اسمك" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form-email">البريد الإلكتروني</label>
                                    <input type="email" id="form-email" name="email" className="form-control" placeholder="example@email.com" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form-address">المدينة / العنوان</label>
                                    <input type="text" id="form-address" name="address" className="form-control" placeholder="المنطقة أو عنوان الاستلام" />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="form-text">تفاصيل الطلب</label>
                                    <textarea id="form-text" name="message" className="form-control" rows="4" placeholder="اكتب وصفاً مختصراً للأثاث وعدد الغرف" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary rounded-pill" disabled={isSubmitting}>
                                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="surface-card h-100" style={{ padding: "2.25rem" }}>
                            <h3 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>بيانات التواصل السريع</h3>
                            <div className="contact-details">
                                <div className="mb-4">
                                    <div className="icon-box mb-3"><i className="fa-solid fa-phone"></i></div>
                                    <p className="mb-1"><a href="tel:01097060751">01097060751</a></p>
                                    <p className="mb-0"><a href="tel:01202750832">01202750832</a></p>
                                </div>
                                <div className="mb-4">
                                    <div className="icon-box mb-3"><i className="fa-brands fa-whatsapp"></i></div>
                                    <p className="mb-0"><a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer">واتساب المارد لنقل الأثاث</a></p>
                                </div>
                                <div className="mb-4">
                                    <div className="icon-box mb-3"><i className="fa-solid fa-envelope"></i></div>
                                    <p className="mb-1"><a href="mailto:khaledahmed24680@gmail.com">khaledahmed24680@gmail.com</a></p>
                                    <p className="mb-0"><a href="mailto:khahmed8642@yahoo.com">khahmed8642@yahoo.com</a></p>
                                </div>
                                <div className="mb-0">
                                    <div className="icon-box mb-3"><i className="fa-solid fa-location-dot"></i></div>
                                    <p className="mb-0">القاهرة - مدينة نصر، شارع محمد حسنين، مبنى 22</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 style={{ fontWeight: 700, marginBottom: "1rem" }}>ساعات العمل</h4>
                                <p className="mb-1">الأحد - الخميس: 9 صباحاً حتى 6 مساءً</p>
                                <p className="mb-0">خدمة الطوارئ: 24/7 للانتقالات السريعة</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="surface-card">
                    <h3 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>موقعنا على الخريطة</h3>
                    <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "var(--shadow-soft)", height: "380px" }}>
                        <iframe src="https://www.google.com/maps/embed/v1/place?q=Cairo%20Festival%20City&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
