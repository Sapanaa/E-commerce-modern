'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                    <Image
                        src="/logo.svg"
                        alt="Brand logo"
                        width={40}
                        height={40}
                        priority
                    />
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
