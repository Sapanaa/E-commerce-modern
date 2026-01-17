import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = {
    Featured: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
    Shoes: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
    Clothing: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
    Kids: ['Infant & Toddler Shoes', "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
};

const SOCIALS = [
    { icon: '/x.svg', label: 'Twitter' },
    { icon: '/facebook.svg', label: 'Facebook' },
    { icon: '/instagram.svg', label: 'Instagram' },
];

export default function Footer() {
    return (
        <footer className="bg-black text-neutral-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-5">
                    {/* Logo */}
                    <div>
                        <Image
                            src="/logo.svg"
                            alt="Brand logo"
                            width={48}
                            height={48}
                        />
                    </div>

                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="mb-4 text-sm font-semibold text-white">
                                {title}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {links.map(link => (
                                    <li key={link}>
                                        <Link href="#" className="hover:text-white transition">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Socials */}
                    <div className="flex gap-4 md:justify-end">
                        {SOCIALS.map(social => (
                            <Link
                                key={social.label}
                                href="#"
                                aria-label={social.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.label}
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
                    © {new Date().getFullYear()} Your Brand. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
