export const SITE_URL = "https://egymoveexpress.com";
export const BRAND_NAME = "ايجي موف";
export const BRAND_NAME_EN = "Egy Move";

export function createPageMetadata({ title, description, path, image = "/images/real/hoist/truck-lift-wide.jpeg", imageAlt = "خدمات نقل الأثاث من ايجي موف" }) {
    const pageTitle = `${title} | ${BRAND_NAME}`;
    const imageUrl = new URL(image, SITE_URL).toString();

    return {
        title: { absolute: pageTitle },
        description,
        alternates: { canonical: path },
        openGraph: {
            title: pageTitle,
            description,
            url: new URL(path, SITE_URL).toString(),
            siteName: BRAND_NAME,
            images: [{ url: imageUrl, alt: imageAlt }],
            locale: "ar_EG",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            images: [imageUrl],
        },
    };
}
