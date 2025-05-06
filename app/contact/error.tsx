"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-[#fff9f3]">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#e6d5d2] text-[#ba8f95] font-medium text-sm mb-6">
              Oops! Something went wrong
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
              We're <span className="text-[#ba8f95]">Sorry</span>
            </h1>
            <p className="text-lg text-[#8a7370] mb-8">
              There was an error loading the contact page. Please try again.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={reset}
                className="bg-[#ba8f95] hover:bg-[#8e5f66] text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="bg-white border-2 border-[#ba8f95] text-[#ba8f95] hover:bg-[#ba8f95] hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 