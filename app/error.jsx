"use client";

export default function Error({ error, reset }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F5F5F7] px-6">
            <div className="w-full max-w-md rounded-3xl bg-[#FFFFFF] p-8 text-center shadow-lg">
                {/* Error Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2AA8FF]/10">
                    <span className="text-4xl font-bold text-[#2AA8FF]">!</span>
                </div>

                {/* Content */}
                <h1 className="mt-6 text-3xl font-bold text-[#07003B]">
                    Something went wrong
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-[#07003BBF]">
                    We encountered an unexpected error while processing your request.
                    Please try again or return to the previous page.
                </p>

                <div className="mt-4 rounded-xl bg-[#F5F5F7] p-3 text-left">
                    <p className="break-words text-xs text-red-500">
                        {error?.message}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={() => reset()}
                        className="flex-1 rounded-xl bg-[#2AA8FF] px-5 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="flex-1 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-medium text-[#07003B] transition hover:bg-[#F5F5F7]"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}