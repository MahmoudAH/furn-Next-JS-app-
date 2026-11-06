import { BRAND_NAME, createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
    title: "تواصل معنا لطلب عرض سعر",
    description: `تواصل مع ${BRAND_NAME} للاستفسار عن نقل الأثاث والعفش أو التغليف والفك والتركيب في القاهرة والجيزة.`,
    path: "/contact",
});

export default function ContactLayout({ children }) {
    return children;
}
