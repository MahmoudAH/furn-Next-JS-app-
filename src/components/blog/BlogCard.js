import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ article }) {
    return (
        <article className="blog-card">
            <Link href={`/blog/${article.slug}`} className="blog-card-image" aria-label={`اقرأ: ${article.title}`}>
                <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </Link>
            <div className="blog-card-content">
                <div className="blog-card-meta">
                    <span className="blog-category">{article.category}</span>
                    <span>{article.readingTime} دقائق قراءة</span>
                </div>
                <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="blog-read-link">
                    اقرأ المقال <span aria-hidden="true">←</span>
                </Link>
            </div>
        </article>
    );
}
