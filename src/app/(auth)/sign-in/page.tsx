import AuthForm from '@/components/AuthForm';
import SocialProviders from '@/components/SocialProviders';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className="space-y-6">
            <div className="text-right text-sm">
                Don’t have an account?{' '}
                <Link href="/sign-up" className="font-medium underline">
                    Sign Up
                </Link>
            </div>

            <SocialProviders mode="sign-in" />

            <div className="relative text-center text-xs text-neutral-400">
                <span className="bg-white px-2">OR</span>
            </div>

            <AuthForm
                title="Welcome Back"
                subtitle="Sign in to continue your journey"
                buttonText="Sign In"
            />
        </div>
    );
}
