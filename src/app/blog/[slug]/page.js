import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "../../../components/blog/BlogCard";
import { articles, getArticleBySlug, getRelatedArticles } from "../../../lib/blog";
import { SITE_URL } from "../../../lib/site";

export function generateStaticParams() {
    return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return {};

    const url = `/blog/${article.slug}`;
    return {
        title: article.title,
        description: article.excerpt,
        authors: [{ name: article.author }],
        alternates: { canonical: url },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url,
            type: "article",
            publishedTime: `${article.publishedAt}T09:00:00+02:00`,
            authors: [article.author],
            images: [{ url: article.image, alt: article.imageAlt }],
            locale: "ar_EG",
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    const relatedArticles = getRelatedArticles(article);
    const articleUrl = `/blog/${article.slug}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: new URL(article.image, SITE_URL).toString(),
        datePublished: `${article.publishedAt}T09:00:00+02:00`,
        dateModified: `${article.publishedAt}T09:00:00+02:00`,
        author: { "@type": "Organization", name: article.author },
        publisher: {
            "@type": "Organization",
            name: "الونش لنقل وتغليف الأثاث",
            url: SITE_URL,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": new URL(articleUrl, SITE_URL).toString() },
        inLanguage: "ar-EG",
    };
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "المدونة", item: new URL("/blog", SITE_URL).toString() },
            { "@type": "ListItem", position: 3, name: article.title, item: new URL(articleUrl, SITE_URL).toString() },
        ],
    };

    return (
        <div className="blog-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, breadcrumbData]).replace(/</g, "\\u003c") }}
            />
            <div className="content-container">
                <nav className="blog-breadcrumbs" aria-label="مسار التنقل">
                    <Link href="/">الرئيسية</Link><span aria-hidden="true">/</span>
                    <Link href="/blog">المدونة</Link><span aria-hidden="true">/</span>
                    <span aria-current="page">{article.title}</span>
                </nav>

                <article className="blog-article">
                    <header className="blog-article-header">
                        <span className="blog-category">{article.category}</span>
                        <h1>{article.title}</h1>
                        <p className="blog-article-excerpt">{article.excerpt}</p>
                        <div className="blog-article-meta">
                            <span>بقلم {article.author}</span>
                            <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("ar-EG", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishedAt}T12:00:00Z`))}</time>
                            <span>{article.readingTime} دقائق قراءة</span>
                        </div>
                    </header>

                    <div className="blog-article-cover">
                        <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 1100px" />
                    </div>

                    <div className="blog-article-layout">
                        <div className="blog-article-body">
                            {article.sections.map((section) => (
                                <section key={section.heading}>
                                    <h2>{section.heading}</h2>
                                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </section>
                            ))}
                            <aside className="blog-article-callout">
                                <h2>لسه بتخطط للنقل؟</h2>
                                <p>فريق الونش يقدر يساعدك تعرف التفاصيل المطلوبة لنقل أثاثك.</p>
                                <Link href="/contact" className="btn btn-primary">تواصل معانا</Link>
                                <a href="https://wa.me/201097060751" className="blog-whatsapp-link">أو ابعتلنا على واتساب</a>
                            </aside>
                        </div>
                    </div>
                </article>

                <section className="blog-related" aria-labelledby="related-title">
                    <div className="blog-section-heading">
                        <div>
                            <span className="blog-eyebrow">كمّل القراءة</span>
                            <h2 id="related-title">مقالات ممكن تهمك</h2>
                        </div>
                    </div>
                    <div className="blog-grid">
                        {relatedArticles.map((relatedArticle) => <BlogCard key={relatedArticle.slug} article={relatedArticle} />)}
                    </div>
                </section>
            </div>
        </div>
    );
}
