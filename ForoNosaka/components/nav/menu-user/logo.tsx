"use client";
import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image src="/forohub/logo/logo-light.png" unoptimized className="block dark:hidden" width="50" height={50} alt="Logo Raul Duran" loading="lazy" />
            <Image src="/forohub/logo/logo-dark.png" unoptimized className="hidden dark:block" width="50" height={50} alt="Logo Raul Duran" loading="lazy" />
        </div>
    )
}