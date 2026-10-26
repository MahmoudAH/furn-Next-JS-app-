"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close open navigation menus when clicking outside or pressing Escape.
    useEffect(() => {
        if (!isNavOpen && !isDropdownOpen) return;

        const handlePointerDown = (event) => {
            if (!(event.target instanceof Element)) return;
            if (!event.target.closest(".site-header")) {
                setIsNavOpen(false);
            }
            if (!event.target.closest(".navbar-dropdown-wrapper")) {
                setIsDropdownOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsNavOpen(false);
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isNavOpen, isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen((isOpen) => !isOpen);
    };

    return (
        <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
            {/* ── Top Micro-Bar (Full-width background, content inside .content-container) ── */}
            <div className="header-topbar">
                <div className="content-container">
                    <div className="topbar-inner">
                        {/* Right in RTL: Contact details */}
                        <div className="topbar-contact-group">
                            <span className="topbar-item topbar-item--location d-none d-lg-inline-flex">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>القاهرة والجيزة - مدينة نصر</span>
                            </span>
                            <span className="topbar-sep d-none d-lg-inline">|</span>
                            <a href="mailto:khaledahmed24680@gmail.com" className="topbar-item d-none d-md-inline-flex">
                                <i className="fa-regular fa-envelope"></i>
                                <span>khaledahmed24680@gmail.com</span>
                            </a>
                            <span className="topbar-sep d-none d-md-inline">|</span>
                            <a href="tel:01097060751" className="topbar-item">
                                <i className="fa-solid fa-phone-volume"></i>
                                <span dir="ltr">01097060751</span>
                            </a>
                            <span className="topbar-sep">|</span>
                            <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="topbar-item topbar-item--wa">
                                <i className="fa-brands fa-whatsapp"></i>
                                <span>واتساب 24/7</span>
                            </a>
                        </div>

                        {/* Left in RTL: Social links & Trust status */}
                        <div className="topbar-meta-group">
                            <div className="topbar-socials d-none d-sm-inline-flex">
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <span className="topbar-trust-badge">
                                <i className="fa-solid fa-shield-check"></i>
                                <span>ضمان سلامة العفش 100%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Navbar (Full width background, content inside .content-container) ── */}
            <div className="navbar-main-row">
                <div className="content-container">
                    <nav className="navbar-nav-layout" aria-label="القائمة الرئيسية">
                        {/* 1. Right side in RTL: Brand Logo + Name */}
                        <Link href="/" className="navbar-brand-link">
                            <img
                                src="/images/logo-alwensh.svg"
                                alt="الونش لنقل وتغليف الأثاث - نقل أثاثك على أصوله"
                                className="navbar-brand-img"
                                width="150"
                                height="47"
                            />
                        </Link>

                        {/* 2. Middle: Navigation Links (Clean plain text, NO icons) */}
                        <ul className="navbar-menu-list" role="list">
                            <li>
                                <Link
                                    href="/"
                                    className={`navbar-link-item${pathname === "/" ? " is-active" : ""}`}
                                >
                                    الرئيسية
                                </Link>
                            </li>

                            {/* Dropdown for services */}
                            <li className="navbar-dropdown-wrapper">
                                <button
                                    type="button"
                                    className={`navbar-link-item navbar-link-item--btn${pathname.includes("/services") ? " is-active" : ""}`}
                                    onClick={toggleDropdown}
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                    aria-controls="services-dropdown"
                                >
                                    <span>خدماتنا</span>
                                    <i
                                        className="fa-solid fa-chevron-down navbar-chevron-icon"
                                        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "none" }}
                                    ></i>
                                </button>

                                <div id="services-dropdown" className={`navbar-dropdown-menu${isDropdownOpen ? " is-visible" : ""}`} role="menu">
                                    <Link href="/services/pro-packing" className="dropdown-link-row" role="menuitem">
                                        <span className="dropdown-row-icon"><i className="fa-solid fa-box-open"></i></span>
                                        <div className="dropdown-row-text">
                                            <strong>تغليف الأثاث الاحترافي</strong>
                                            <small>بابل راب، كراتين، وبطاطين مبطنة</small>
                                        </div>
                                    </Link>
                                    <Link href="/services/home-moving" className="dropdown-link-row" role="menuitem">
                                        <span className="dropdown-row-icon"><i className="fa-solid fa-truck-ramp-box"></i></span>
                                        <div className="dropdown-row-text">
                                            <strong>نقل المنازل والشقق</strong>
                                            <small>ونش هيدروليكي، فك وتركيب كامل</small>
                                        </div>
                                    </Link>
                                    <Link href="/services/business-relocation" className="dropdown-link-row" role="menuitem">
                                        <span className="dropdown-row-icon"><i className="fa-solid fa-building"></i></span>
                                        <div className="dropdown-row-text">
                                            <strong>حلول الشركات والمكاتب</strong>
                                            <small>نقل مقار العمل وغرف السيرفرات</small>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className={`navbar-link-item${pathname === "/about" ? " is-active" : ""}`}
                                >
                                    من نحن
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/blog"
                                    className={`navbar-link-item${pathname.startsWith("/blog") ? " is-active" : ""}`}
                                >
                                    المدونة
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className={`navbar-link-item${pathname === "/contact" ? " is-active" : ""}`}
                                >
                                    تواصل معنا
                                </Link>
                            </li>
                        </ul>

                        {/* 3. Left side in RTL: Quick Action Buttons */}
                        <div className="navbar-actions-group">
                            <a
                                href="https://wa.me/201097060751"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp header-action-btn"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                                <span>احجز بالواتساب</span>
                            </a>
                            <a
                                href="tel:01097060751"
                                className="btn btn-primary header-action-btn"
                            >
                                <i className="fa-solid fa-phone-volume"></i>
                                <span>اتصل الآن</span>
                            </a>
                        </div>

                        {/* 4. Mobile hamburger toggle */}
                        <button
                            type="button"
                            className="mobile-hamburger-btn"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            aria-label="القائمة"
                            aria-expanded={isNavOpen}
                            aria-controls="mobile-navigation"
                        >
                            <i className={`fa-solid ${isNavOpen ? "fa-xmark" : "fa-bars"}`}></i>
                        </button>
                    </nav>
                </div>

                {/* Mobile Drawer (Inside content-container) */}
                {isNavOpen && (
                    <div className="mobile-nav-panel" id="mobile-navigation">
                        <div className="content-container">
                            <nav className="mobile-menu-links">
                                <Link href="/" className={`mobile-link-item${pathname === "/" ? " is-active" : ""}`}>
                                    الرئيسية
                                </Link>

                                <div className="mobile-link-subgroup">
                                    <span className="mobile-subgroup-title">خدمات النقل</span>
                                    <Link href="/services/pro-packing" className="mobile-sublink-item">
                                        تغليف الأثاث الاحترافي
                                    </Link>
                                    <Link href="/services/home-moving" className="mobile-sublink-item">
                                        نقل المنازل والشقق
                                    </Link>
                                    <Link href="/services/business-relocation" className="mobile-sublink-item">
                                        حلول الشركات والمكاتب
                                    </Link>
                                </div>

                                <Link href="/about" className={`mobile-link-item${pathname === "/about" ? " is-active" : ""}`}>
                                    من نحن
                                </Link>
                                <Link href="/blog" className={`mobile-link-item${pathname.startsWith("/blog") ? " is-active" : ""}`}>
                                    المدونة
                                </Link>
                                <Link href="/contact" className={`mobile-link-item${pathname === "/contact" ? " is-active" : ""}`}>
                                    تواصل معنا
                                </Link>
                            </nav>

                            <div className="mobile-actions-panel">
                                <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-100">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>محادثة واتساب فورية</span>
                                </a>
                                <a href="tel:01097060751" className="btn btn-primary w-100">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>اتصال هاتفي مباشر</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
