"use client"

import Link from "next/link";

export default function Apply() {
  return (
    <section aria-label="apply" className="py-6">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="col-span-6 text-center lg:text-left">
                <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl underline">Apply Nişantaşı</h2>
                <p className="mb-4 max-w-xl text-gray-500 dark:text-gray-400">Gelecek için bir adım...</p>
                <div className="flex items-center justify-center space-x-4 lg:justify-start">
                <Link prefetch={true} href="apply" rel="noopener noreferrer" className="text-sm font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Apply Nedir?</Link>
                <div className="border-r border-gray-300 dark:border-neutral-700 h-10"></div>
                <Link prefetch={true} href="apply" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline"> Başvuru Yap <svg width="7" viewBox="0 0 6 6" height="7" aria-hidden="true">
                    <path fill="currentColor" d="m1.252 5.547-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396z"></path>
                </svg>
                </Link>
                </div>
            </div>
            <div className="col-span-6">
                <video id="applyVideoContent" className="mx-auto h-64 w-full max-w-xl sm:h-96" autoPlay muted loop playsInline preload="none">
                    <source src="" type="video/webm" />
                </video>
            </div>
            </div>
        </div>
    </section>
  )
}
