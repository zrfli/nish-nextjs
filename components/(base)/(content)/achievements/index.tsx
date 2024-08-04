"use client"

import Link from "next/link"
import Image from "next/image"

export default function Achievements() {
  return (
    <section aria-label="achievements" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Başarılar</h1>
                <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
            </div>
            <div id="achievementsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article className="relative">
                <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Latest update v2.3</Link>
                </h2>
                <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/03ea3edb-bcab-4393-8e0c-cc108f881b8f.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">17/07/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="line-clamp-2 hover:underline">15 Temmuz’un 8. Yılın da Demokrasi ve Birlik Vurgusu Paneli</Link>
                </h2>
                <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/84c5bc24-7003-4168-84eb-1c6e52153b72.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">16/07/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Yunanistan da Yeni Erasmus Anlaşması</Link>
                </h2>
                <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
            </div>
        </div>
    </section>
  )
}
