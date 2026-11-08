import Image from "next/image";

export default function BrandLogo({ className }) {
    return (
        <Image
            src="/images/brand/egymove-master.svg"
            className={className}
            width={1536}
            height={1024}
            alt="ايجي موف لنقل الأثاث - EgyMove"
        />
    );
}
