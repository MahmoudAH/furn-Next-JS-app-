"use client";

import { useState } from 'react';
import { submitContact } from './actions';
import PageBanner from '../../components/PageBanner';

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
        <>
            <PageBanner
                tag="متاحون 24 ساعة طوال الأسبوع"
                title="تواصل معنا - حجز ومعاينة مجانية"
                subtitle="فريق الدعم الفني جاهز للرد على كافة استفساراتكم وتحديد الموعد الأنسب للمعاينة والنقل."
                breadcrumb="تواصل معنا"
            />

            <div className="content-container section pt-0">
                <div className="row g-4">
                    {/* Form Col */}
                    <div className="col-lg-7">
                        <div className="surface-card h-100">
                            {status && !status.success && (
                                <div className="alert alert-danger rounded-3 p-3 mb-4" role="alert">
                                    <i className="fa-solid fa-circle-exclamation ml-2"></i>
                                    {status.message}
                                </div>
                            )}

                            {status && status.success && (
                                <div className="alert alert-success rounded-3 p-3 mb-4" role="alert">
                                    <i className="fa-solid fa-circle-check ml-2"></i>
                                    {status.message}
                                </div>
                            )}

                            <h2 className="h4 fw-bold mb-2">أرسل طلبك للحصول على عرض سعر مكتوب</h2>
                            <p className="text-muted mb-4">
                                املأ النموذج وسيقوم مسؤول الحجوزات بالاتصال بك لتأكيد التفاصيل وموعد المعاينة المناسب.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="form-name" className="form-label fw-bold">الاسم الكامل <span className="text-danger">*</span></label>
                                    <input type="text" id="form-name" name="name" className="form-control" placeholder="أدخل اسمك الكريم" required />
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="form-phone" className="form-label fw-bold">رقم الهاتف / الواتساب <span className="text-danger">*</span></label>
                                        <input type="tel" id="form-phone" name="phone" className="form-control" placeholder="01xxxxxxxxx" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="form-address" className="form-label fw-bold">المنطقة الحالية والوجهة</label>
                                        <input type="text" id="form-address" name="address" className="form-control" placeholder="مثال: من مدينة نصر إلى التجمع" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="form-text" className="form-label fw-bold">تفاصيل الأثاث المطلوب نقله <span className="text-danger">*</span></label>
                                    <textarea id="form-text" name="message" className="form-control" rows="4" placeholder="اذكر عدد الغرف، الطابق، وهل تحتاج لونش رفع أو تغليف إضافي؟" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100" style={{ padding: "0.85rem" }} disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <i className="fa-solid fa-spinner fa-spin ml-2"></i>
                                            <span>جاري إرسال الطلب...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-paper-plane ml-2"></i>
                                            <span>إرسال طلب المعاينة وعرض السعر</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Direct Contacts Col */}
                    <div className="col-lg-5">
                        <div className="surface-card contact-details-card h-100">
                            <div className="contact-details-content">
                                <h3 className="h4 fw-bold contact-details-title">قنوات الاتصال المباشرة</h3>

                                <div className="contact-info-list">
                                    <div className="contact-info-entry">
                                        <span className="icon-circle contact-info-icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <div className="contact-info-copy">
                                            <strong>أرقام خدمة العملاء</strong>
                                            <p className="mb-0"><a href="tel:01097060751" className="fw-bold text-dark">01097060751</a></p>
                                            <p className="mb-0"><a href="tel:01202750832" className="fw-bold text-dark">01202750832</a></p>
                                        </div>
                                    </div>

                                    <div className="contact-info-entry">
                                        <span className="icon-circle contact-info-icon">
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </span>
                                        <div className="contact-info-copy">
                                            <strong>واتساب الدكتور</strong>
                                            <p className="mb-0 text-muted">إرسال الصور والفيديوهات لتقييم السعر</p>
                                            <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="fw-bold text-primary">
                                                تواصل عبر واتساب فوراً
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-info-entry">
                                        <span className="icon-circle contact-info-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <div className="contact-info-copy">
                                            <strong>المقر الرئيسي</strong>
                                            <p className="mb-0 text-muted">القاهرة - مدينة نصر، شارع محمد حسنين هيكل</p>
                                            <span className="badge bg-light text-dark border mt-1">نغطي كافة أحياء القاهرة والجيزة</span>
                                        </div>
                                    </div>

                                    <div className="contact-info-entry">
                                        <span className="icon-circle contact-info-icon">
                                            <i className="fa-solid fa-clock"></i>
                                        </span>
                                        <div className="contact-info-copy">
                                            <strong>مواعيد العمل</strong>
                                            <p className="mb-0 text-muted">المكتب الفني: 8 صباحاً - 11 مساءً</p>
                                            <p className="mb-0 text-success fw-bold">طوارئ النقل: متوفر 24 ساعة طوال الأسبوع</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-assurance">
                                <div className="contact-assurance-title">
                                    <i className="fa-solid fa-shield-check"></i>
                                    <span>معاينة مجانية بدون أي التزام</span>
                                </div>
                                <p className="contact-assurance-text">
                                    نرسل لك مندوباً لمعاينة العفش وتحديد أفضل مسار لنزول الونش مجاناً داخل القاهرة والجيزة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
