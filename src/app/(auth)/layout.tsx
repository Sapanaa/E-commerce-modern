import Image from 'next/image';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <section className="min-h-screen grid lg:grid-cols-2">
            {/* Left Brand Panel */}
            <div className="relative hidden lg:flex flex-col justify-between bg-black p-10 text-white">
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />

                <div>
                    <h1 className="text-4xl font-bold mb-4">Just Do It</h1>
                    <p className="max-w-md text-sm text-neutral-300">
                        Join millions of athletes and fitness enthusiasts who trust us
                        for their performance needs.
                    </p>
                </div>

                <p className="text-xs text-neutral-500">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>

            {/* Right Form Panel */}
            <div className="flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </section>
    );
}
