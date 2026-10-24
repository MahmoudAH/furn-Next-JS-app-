import Link from "next/link";

export default function PageBanner({ tag, title, subtitle, breadcrumb, image, mobileImage }) {
    return (
        <section className="internal-page-banner">
            <div className="content-container">
                <div className="internal-banner-card">
                    {image && (
                        <picture className="internal-banner-media">
                            {mobileImage && <source media="(max-width: 767px)" srcSet={mobileImage} />}
                            <img src={image} alt="" />
                        </picture>
                    )}
                    <div className="internal-banner-overlay"></div>

                    <div className="internal-banner-content">
                        {tag && (
                            <span className="banner-tag-pill">
                                <i className="fa-solid fa-award"></i>
                                <span>{tag}</span>
                            </span>
                        )}

                        <h1 className="internal-banner-title">{title}</h1>
                        {subtitle && <p className="internal-banner-subtitle">{subtitle}</p>}
                    </div>
                </div>
            </div>
            <div className="banner-breadcrumbs-strip">
                <nav className="content-container banner-breadcrumbs" aria-label="مسار التصفح">
                    <Link href="/">الرئيسية</Link>
                    <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    <span className="current" aria-current="page">{breadcrumb || title}</span>
                </nav>
            </div>
        </section>
    );
}
