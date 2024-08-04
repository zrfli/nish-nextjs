"use client"

import Link from "next/link"
import Image from "next/image"

export default function Research() {
  return (
    <section aria-label="research" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Araştırmalar</h1>
            <Link prefetch={true} href="/research" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
            </div>
            <div id="researchContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="relative">
                <Link prefetch={true} href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">02/06/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                <Link prefetch={true} href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Doç. Dr. Orhan Dragas’ın makalesi yayımlandı</Link>
                </h2>
                <Link prefetch={true} href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
            </article>
            <article className="relative">
                <Link prefetch={true} href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">01/06/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                <Link prefetch={true} href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Meme Kanserinde Erken Teşhis Projesi</Link>
                </h2>
                <Link prefetch={true} href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
            </article>
            <article className="relative">
                <Link prefetch={true} href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="flex justify-end">
                <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">31/05/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                <Link prefetch={true} href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Nişantaşı Üniversitesi ve SankarLink İş Birliği ile Fonksiyonel GranolLink Projesi HayatLink Geçti</Link>
                </h2>
                <Link prefetch={true} href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
            </article>
            </div>
        </div>
    </section>
  )
}
