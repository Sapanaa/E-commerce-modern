interface AuthFormProps {
    title: string;
    subtitle: string;
    buttonText: string;
    showName?: boolean;
}

export default function AuthForm({
                                     title,
                                     subtitle,
                                     buttonText,
                                     showName = false,
                                 }: AuthFormProps) {
    return (
        <form className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>
            </div>

            {showName && (
                <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
            )}

            <div>
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <div>
                <label className="text-sm font-medium">Password</label>
                <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
                {buttonText}
            </button>

            <p className="text-center text-xs text-neutral-500">
                By continuing, you agree to our{' '}
                <span className="underline cursor-pointer">Terms</span> &{' '}
                <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
        </form>
    );
}
