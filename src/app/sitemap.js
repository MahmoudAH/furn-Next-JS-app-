import { articles } from "../lib/blog";
import { SITE_URL } from "../lib/site";

export default function sitemap() {
    return [
        {
            url: SITE_URL,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...["/about", "/contact", "/services/home-moving", "/services/pro-packing", "/services/business-relocation"].map((path) => ({
            url: `${SITE_URL}${path}`,
            changeFrequency: "monthly",
            priority: 0.6,
        })),
        ...articles.map((article) => ({
            url: `${SITE_URL}/blog/${article.slug}`,
            lastModified: new Date(`${article.publishedAt}T12:00:00Z`),
            changeFrequency: "monthly",
            priority: 0.7,
        })),
    ];
}
