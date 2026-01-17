import Image from 'next/image';

interface Props {
    mode: 'sign-in' | 'sign-up';
}

export default function SocialProviders({ mode }: Props) {
    const label = mode === 'sign-in' ? 'Continue' : 'Sign up';

    return (
        <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium hover:bg-neutral-50 transition">
                <Image src="/google.svg" alt="Google" width={18} height={18} />
                {label} with Google
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium hover:bg-neutral-50 transition">
                <Image src="/apple.svg" alt="Apple" width={18} height={18} />
                {label} with Apple
            </button>
        </div>
    );
}
