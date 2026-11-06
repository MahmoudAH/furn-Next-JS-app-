import Image from "next/image";
import Link from "next/link";
import BlogCard from "../../components/blog/BlogCard";
import { articles, blogCategories } from "../../lib/blog";
import { BRAND_NAME, SITE_URL } from "../../lib/site";

const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
const otherArticles = articles.filter((article) => article.slug !== featuredArticle.slug);

export const metadata = {
    title: "مدونة نقل الأثاث والتغليف في مصر",
    description: "نصائح عملية لنقل العفش وتغليفه في القاهرة والجيزة: جهّز يوم النقل، اختار الونش المناسب، واحمِ أثاثك بخطوات واضحة.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: `مدونة ${BRAND_NAME} | نصائح نقل الأثاث في مصر`,
        description: "أدلة عملية تساعدك تخطط لنقل أثاثك وتحمي مقتنياتك.",
        url: `${SITE_URL}/blog`,
        images: [{ url: featuredArticle.image, alt: featuredArticle.imageAlt }],
        locale: "ar_EG",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `مدونة ${BRAND_NAME} | نصائح نقل الأثاث في مصر`,
        description: "أدلة عملية تساعدك تخطط لنقل أثاثك وتحمي مقتنياتك.",
        images: [featuredArticle.image],
    },
};

export default function BlogPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `مدونة ${BRAND_NAME}`,
        description: metadata.description,
        url: new URL("/blog", SITE_URL).toString(),
        inLanguage: "ar-EG",
        publisher: {
            "@type": "Organization",
            name: BRAND_NAME,
            url: SITE_URL,
        },
    };

    return (
        <div className="blog-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
            />
            <div className="content-container">
                <header className="blog-heading">
                    <span className="blog-eyebrow">دليل عملي لانتقال أهدى</span>
                    <h1>مدونة {BRAND_NAME}</h1>
                    <p>نصايح واضحة وتجارب عملية تساعدك تجهز لنقل بيتك وتحافظ على كل قطعة.</p>
                </header>

                <section className="blog-featured" aria-labelledby="featured-title">
                    <Link href={`/blog/${featuredArticle.slug}`} className="blog-featured-image" aria-label={`اقرأ: ${featuredArticle.title}`}>
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.imageAlt}
                            fill
                            priority
                            sizes="(max-width: 800px) 100vw, 55vw"
                        />
                    </Link>
                    <div className="blog-featured-copy">
                        <span className="blog-category">{featuredArticle.category}</span>
                        <h2 id="featured-title"><Link href={`/blog/${featuredArticle.slug}`}>{featuredArticle.title}</Link></h2>
                        <p>{featuredArticle.excerpt}</p>
                        <div className="blog-featured-meta">{featuredArticle.readingTime} دقائق قراءة</div>
                        <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary">اقرأ الدليل</Link>
                    </div>
                </section>

                <nav className="blog-category-nav" aria-label="تصنيفات المقالات">
                    {blogCategories.map((category) => (
                        <a key={category.slug} href={`#${category.slug}`}>{category.name}</a>
                    ))}
                </nav>

                {blogCategories.map((category) => {
                    const categoryArticles = otherArticles.filter((article) => article.categorySlug === category.slug);
                    if (!categoryArticles.length) return null;

                    return (
                        <section className="blog-category-section" id={category.slug} key={category.slug}>
                            <div className="blog-section-heading">
                                <div>
                                    <span className="blog-eyebrow">من دليل ايجي موف</span>
                                    <h2>{category.name}</h2>
                                </div>
                                <span>{categoryArticles.length} مقالات</span>
                            </div>
                            <div className="blog-grid">
                                {categoryArticles.map((article) => <BlogCard key={article.slug} article={article} />)}
                            </div>
                        </section>
                    );
                })}

                <aside className="blog-cta">
                    <div>
                        <span className="blog-eyebrow">محتاج مساعدة في التخطيط؟</span>
                        <h2>خلّي فريقنا يساعدك تحدد احتياجات النقل</h2>
                        <p>شاركنا تفاصيل العفش والعنوانين، واسأل عن الخدمة المناسبة لانتقالك.</p>
                    </div>
                    <Link href="/contact" className="btn btn-primary">اطلب استشارة</Link>
                </aside>
            </div>
        </div>
    );
}
