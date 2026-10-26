/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
