"use client";
import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image src="/logo/logo-light.png" className="block dark:hidden" width="50" height={50} alt="Logo Raul Duran" loading="lazy" />
            <Image src="/logo/logo-dark.png" className="hidden dark:block" width="50" height={50} alt="Logo Raul Duran" loading="lazy" />
        </div>
    )
}