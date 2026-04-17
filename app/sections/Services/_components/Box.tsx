"use client";

import { useState, useEffect, } from 'react';

import Image from 'next/image';
import './style.css';

type Box =  {
    title: string,
    description: string,
    colorText?: string
}

export function Box({title, description, colorText}:Box) {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            className="box w-3/12 h-5/12 p-6 flex flex-col justify-center gap-4 relative z-9999"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover ? (
                <Image
                    src="/icons/web-programming.png"
                    alt="ícone de desenvolvimento web"
                    width={48}
                    height={48}
                />
            ) : (
                <Image
                    src="/icons/web-programming-black.png"
                    alt="ícone de desenvolvimento web"
                    width={48}
                    height={48}
                />
            )}
            <h2 className="text-2xl font-bold text-pretty">{title}</h2>
            <p style={{color: colorText}}>{description}</p>
        </div>
    )
}