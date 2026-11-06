"use client";

import { useState, useEffect, useCallback } from "react";

export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            image: "/images/Elevator%20Movers%20Deliver%20Wrapped%20Sofa-2.png",
            alt: "فريق نقل يرفع أريكة مغلفة إلى شقة",
            badge: "خدمات نقل أثاث في القاهرة والجيزة",
            title: "نقل وتغليف أثاث منزلك بعناية واحترافية",
            desc: "فريق متخصص لفك وتغليف وتحميل الأثاث، مع عناية بكل قطعة من بداية النقل حتى التركيب.",
            primaryLink: "https://wa.me/201041924242?text=مرحباً، أريد الاستفسار عن نقل العفش",
            primaryText: "احجز زيارة مجانية الآن",
            phone: "01041924242",
        },
        {
            image: "/images/Elevator%20Movers%20Deliver%20Wrapped%20Sofa.png",
            alt: "فريق نقل يرفع أريكة مغلفة إلى شقة",
            badge: "خامات تغليف عالية الجودة",
            title: "تغليف احترافي متعدد الطبقات يحمي مقتنياتك من أي خدش",
            desc: "كراتين مقواة، بابل راب هوائي، بطاطين مبطنة، وتغليف استريتش حراري لحماية الأجهزة والزجاج والأنتيكات.",
            primaryLink: "https://wa.me/201041924242?text=مرحباً، أريد الاستفسار عن خدمة التغليف",
            primaryText: "اطلب باقة التغليف المتكاملة",
            phone: "01041924242",
        },
        {
            image: "/images/Professional%20Movers%20Packing%20a%20Bright%20Apartment-3.png",
            alt: "فريق متخصص يغلّف الأثاث داخل الشقة",
            badge: "شاحنات مجهزة لنقل آمن",
            title: "أوناش هيدروليكية تصل للأدوار المرتفعة وسيارات نقل مغلقة",
            desc: "شاحنات صندوقية مجهزة بالداخل ومبطنة لحماية العفش أثناء المطبات، مع أوناش هيدروليكية للأدوار العليا الضيقة.",
            primaryLink: "https://wa.me/201041924242?text=مرحباً، أريد ونش رفع عفش",
            primaryText: "احجز الونش الهيدروليكي",
            phone: "01041924242",
        }
    ];

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const interval = setInterval(nextSlide, 6500);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section
            className="hero-banner-section content-container"
            aria-label="أبرز خدمات ايجي موف لنقل الأثاث"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="hero-banner-card">
                <div className="hero-slides-wrapper">
                    {slides.map((slide, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                className={`hero-slide-pane${isActive ? " is-active" : ""}`}
                                aria-hidden={!isActive}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="hero-slide-picture"
                                    loading="eager"
                                />

                                <div className="hero-slide-backdrop"></div>

                                {isActive && (
                                    <div className="hero-slide-caption">
                                        <span className="hero-pill-tag">
                                            <i className="fa-solid fa-award"></i>
                                            <span>{slide.badge}</span>
                                        </span>

                                        {index === 0 ? (
                                            <h1 className="hero-headline">{slide.title}</h1>
                                        ) : (
                                            <h2 className="hero-headline">{slide.title}</h2>
                                        )}

                                        <p className="hero-subtext">{slide.desc}</p>

                                        <div className="hero-cta-row">
                                            <a
                                                href={slide.primaryLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-whatsapp hero-btn"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                                <span>{slide.primaryText}</span>
                                            </a>
                                            <a
                                                href={`tel:${slide.phone}`}
                                                className="btn hero-phone-cta"
                                            >
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <span>{slide.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Left & Right Edge Arrows (matching reference https://a319.jood.online/ar) */}
                <button
                    type="button"
                    className="hero-edge-arrow hero-edge-arrow--left"
                    onClick={nextSlide}
                    aria-label="الشريحة التالية"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                    type="button"
                    className="hero-edge-arrow hero-edge-arrow--right"
                    onClick={prevSlide}
                    aria-label="الشريحة السابقة"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Bottom Pagination Dots */}
                <div className="hero-pagination-dots" role="tablist">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            role="tab"
                            aria-selected={index === activeIndex}
                            aria-label={`الشريحة ${index + 1}`}
                            className={`hero-pagi-dot${index === activeIndex ? " is-active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
