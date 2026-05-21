'use client'
import Link from 'next/link';
import { Ghost, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/50 rounded-full blur-[120px]" />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-lg">
                {/* 404 Number */}
                <div className="mb-8 relative">
                    <h1 className="text-[150px] font-display font-bold leading-none tracking-tighter text-text/10 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Ghost className="w-24 h-24 text-primary/40 animate-pulse" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Text content */}
                <h2 className="text-3xl font-display font-semibold text-text mb-4">
                    Page Not Found
                </h2>
                <p className="text-surface-alt text-lg mb-2">
                    Oops! The page you&apos;re looking for seems to have wandered off.
                </p>
                <p className="text-surface-alt/60 text-sm mb-10">
                    It might have been moved, deleted, or never existed in the first place.
                </p>

                {/* Action buttons */}
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link href='/'>
                        <button
                            className="px-6 py-3 border border-surface-alt/30 text-surface-alt rounded-lg hover:border-primary/50 hover:text-primary cursor-pointer transition-all duration-300"
                        >
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-alt/30 text-xs font-mono">
                ERROR_404_PAGE_NOT_FOUND
            </div>
        </div>
    );
}