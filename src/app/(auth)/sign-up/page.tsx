import AuthForm from '@/components/AuthForm';
import SocialProviders from '@/components/SocialProviders';
import Link from 'next/link';

export default function SignUpPage() {
    return (
        <div className="space-y-6">
            <div className="text-right text-sm">
                Already have an account?{' '}
                <Link href="/sign-in" className="font-medium underline">
                    Sign In
                </Link>
            </div>

            <SocialProviders mode="sign-up" />

            <div className="relative text-center text-xs text-neutral-400">
                <span className="bg-white px-2">OR</span>
            </div>

            <AuthForm
                title="Join Today"
                subtitle="Create your account to get started"
                buttonText="Sign Up"
                showName
            />
        </div>
    );
}
