'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {black} from "next/dist/lib/picocolors";

const NAV_LINKS = [
    { label: 'Men', href: '#' },
    { label: 'Women', href: '#' },
    { label: 'Kids', href: '#' },
    { label: 'Collections', href: '#' },
    { label: 'Contact', href: '#' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-neutral-200 bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link href="#" className="flex items-center">
                    <svg
                        width="40"
                        height="15"
                        viewBox="0 0 80 29"
                        className="text-black lg:text-white transition-colors"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M79.7143 0L21.418 25.1469C16.5644 27.2409 12.4814 28.2857 9.19105 28.2857C5.48886 28.2857 2.79193 26.9572 1.13569 24.3047C-1.01212 20.8822 -0.0732836 15.379 3.6112 9.56968C5.79885 6.17413 8.57993 3.05779 11.2901 0.0765583C10.6524 1.13035 5.02387 10.655 11.1794 15.1404C12.3973 16.041 14.1288 16.4824 16.2589 16.4824C17.9683 16.4824 19.9301 16.1986 22.0867 15.6267L79.7143 0Z"
                        />
                    </svg>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map(link => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right actions */}
                <div className="hidden items-center gap-6 md:flex">
                    <button className="text-sm font-medium">Search</button>
                    <button className="text-sm font-medium">My Cart (2)</button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="md:hidden"
                >
                    <span className="block h-0.5 w-6 bg-neutral-900 mb-1" />
                    <span className="block h-0.5 w-6 bg-neutral-900 mb-1" />
                    <span className="block h-0.5 w-6 bg-neutral-900" />
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-neutral-200 bg-white">
                    <ul className="flex flex-col gap-4 px-4 py-6">
                        {NAV_LINKS.map(link => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block text-base font-medium"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
