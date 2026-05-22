"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setIsNavOpen(false);
    }, [pathname]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleDropdownEnter = () => {
        if (window.innerWidth >= 992) {
            setIsDropdownOpen(true);
        }
    };

    const handleDropdownLeave = () => {
        if (window.innerWidth >= 992) {
            setIsDropdownOpen(false);
        }
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        if (window.innerWidth < 992) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <header className="site-header">
            <div className="header-top">
                <div className="container">
                    <div className="top-info">
                        <div className="top-info-item">
                            <i className="fa-solid fa-phone-volume"></i>
                            <a href="tel:01097060751" className="fw-bold text-dark">01097060751</a>
                        </div>
                        <div className="top-info-item">
                            <i className="fa-brands fa-whatsapp"></i>
                            <a href="https://wa.me/201097060751" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a>
                        </div>
                        <div className="top-info-item">
                            <i className="fa-solid fa-clock"></i>
                            <span>متواجدون من 9 ص حتى 10 م طوال الأسبوع</span>
                        </div>
                    </div>
                    <div className="top-actions">
                        <span className="top-tagline">حلول متكاملة لنقل وتغليف جميع أنواع الأثاث</span>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link href="/" className="navbar-brand d-flex align-items-center brand-wrap">
                        <img src="/images/logo.svg" alt="شعار الدكتور" className="brand-logo" />
                        <span className="brand-name fw-bold text-dark">الدكتور</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                        aria-controls="mainNavbar"
                        aria-expanded={isNavOpen}
                        aria-label="تبديل القائمة"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="mainNavbar">
                        <ul className="navbar-nav align-items-lg-center nav-list">
                            <li className="nav-item">
                                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>الرئيسية</Link>
                            </li>
                            <li
                                className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${pathname.includes('/services') ? 'active' : ''}`}
                                    href="#"
                                    id="servicesDropdown"
                                    role="button"
                                    onClick={toggleDropdown}
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                >
                                    خدماتنا
                                </a>
                                <div className={`dropdown-menu dropdown-menu-right shadow-sm rounded-3 ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="servicesDropdown">
                                    <Link href="/services/pro-packing" className="dropdown-item">تغليف الأثاث الاحترافي</Link>
                                    <Link href="/services/home-moving" className="dropdown-item">نقل الأثاث بين المدن</Link>
                                    <Link href="/services/business-relocation" className="dropdown-item">فك وتركيب الأثاث</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>من نحن</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>تواصل معنا</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
