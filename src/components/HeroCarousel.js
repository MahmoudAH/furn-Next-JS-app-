"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: "/images/hero-relocation.jpg",
            alt: "نقل أثاث احترافي داخل مصر",
            badge: "الدكتور",
            title: "نقل وتغليف أثاث منزلي بأيدي فنيين محترفين",
            desc: "نصل إليك بسرعة بفريق معتمد لفك وتغليف ونقل الأثاث مع ضمان كامل لكل قطعة حتى الاستلام.",
            btnLink: "https://wa.me/201097060751",
            btnText: "تواصل عبر واتساب",
            btnClass: "btn btn-primary rounded-pill",
            icon: "fa-solid fa-phone-volume",
            phone: "01097060751",
            tag: "نغطي مصر بالكامل - 01097060751"
        },
        {
            image: "/images/hero-packing.jpg",
            alt: "تعبئة أثاث بعناية داخل المنزل",
            badge: "حلول تغليف متكاملة",
            title: "مواد تغليف متعددة الطبقات تحمي أثاثك من الخدوش",
            desc: "نستخدم البطاطين السميكة، الفقاعات الهوائية، والصناديق المخصصة لضمان ثبات كل قطعة خلال عملية النقل.",
            btnLink: "https://wa.me/201097060751",
            btnText: "احجز فريق التغليف",
            btnClass: "btn btn-outline-primary rounded-pill",
            icon: "fa-solid fa-headset",
            phone: "01202750832",
            tag: "تأمين كامل أثناء التغليف"
        },
        {
            image: "/images/hero-logistics.jpg",
            alt: "شاحنة نقل أثاث حديثة",
            badge: "أسطول النقل الحديث",
            title: "شاحنات مجهزة بالونش والربط الهيدروليكي الآمن",
            desc: "أسطولنا مزود بأنظمة تتبع GPS وربط داخلي محكم يحافظ على الأثاث ثابتاً ويضمن وصوله بلا خدوش.",
            btnLink: "https://wa.me/201097060751",
            btnText: "احجز موعد النقل",
            btnClass: "btn btn-primary rounded-pill",
            icon: "fa-solid fa-truck-fast",
            phone: "01097060751",
            tag: "جاهزون لخدمتك طوال الأسبوع"
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-slider">
            <div id="mainCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    {slides.map((_, index) => (
                        <li
                            key={index}
                            className={index === activeIndex ? "active" : ""}
                            onClick={() => setActiveIndex(index)}
                            style={{ cursor: "pointer" }}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                            style={{ display: index === activeIndex ? "block" : "none", width: "100%", transition: "transform 0.6s ease-in-out" }}
                        >
                            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
                            <div className="carousel-overlay">
                                <div className="carousel-caption text-right">
                                    <span className="carousel-badge">{slide.badge}</span>
                                    {index === 0 ? (
                                        <h1 className="hero-title" style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "0.85rem" }}>{slide.title}</h1>
                                    ) : (
                                        <h2>{slide.title}</h2>
                                    )}
                                    <p>{slide.desc}</p>
                                    <div className="carousel-actions">
                                        <a href={slide.btnLink} target="_blank" rel="noopener noreferrer" className={slide.btnClass}>{slide.btnText}</a>
                                        <div className="carousel-phone">
                                            <i className={slide.icon}></i>
                                            <span>{slide.phone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-tag">{slide.tag}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#" role="button" onClick={(e) => { e.preventDefault(); prevSlide(); }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(1) grayscale(100) brightness(200%)" }}></span>
                    <span className="sr-only">السابق</span>
                </a>
                <a className="carousel-control-next" href="#" role="button" onClick={(e) => { e.preventDefault(); nextSlide(); }}>
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(1) grayscale(100) brightness(200%)" }}></span>
                    <span className="sr-only">التالي</span>
                </a>
            </div>
        </div>
    );
}
