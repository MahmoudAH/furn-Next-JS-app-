/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/blog/choosing-a-moving-company",
                destination: "/blog/furniture-moving-quote-details",
                permanent: true,
            },
            {
                source: "/blog/prepare-appliances-for-moving",
                destination: "/blog/protecting-furniture-and-appliances",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
