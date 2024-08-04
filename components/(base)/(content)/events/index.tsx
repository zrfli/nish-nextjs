"use client"

import Link from "next/link"

export default function Events() {
  return (
    <section aria-label="events" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Etkinlikler</h1>
            <Link prefetch={true} href="/events" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
            </div>
            <div id="eventsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Temmuz</div>
                <div className="text-right text-4xl font-bold">21</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/test-520360" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">test</h2>
                </Link>
                <Link prefetch={true} href="/page/test-520360" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                <div className="text-right text-4xl font-bold">02</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/denim-sanati-ile-surdurulebilir-sanatin-gucu-821855" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Denim Sanatı ile Sürdürülebilir Sanatın Gücü</h2>
                </Link>
                <Link prefetch={true} href="/page/denim-sanati-ile-surdurulebilir-sanatin-gucu-821855" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                <div className="text-right text-4xl font-bold">01</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/surdurulebilir-tesis-yonetimi-zirvesi-227971" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Sürdürülebilir Tesis Yönetimi Zirvesi</h2>
                </Link>
                <Link prefetch={true} href="/page/surdurulebilir-tesis-yonetimi-zirvesi-227971" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                <div className="text-right text-4xl font-bold">31</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/bagimlilikla-mucadele-ve-yedam-404169" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">BağımlılıklLink Mücadele ve Yedam</h2>
                </Link>
                <Link prefetch={true} href="/page/bagimlilikla-mucadele-ve-yedam-404169" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                <div className="text-right text-4xl font-bold">29</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/dijital-genc-yapay-zeka-ekosistemi-tanisma-toplantisi-194864" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Dijital Genç Yapay ZekLink Ekosistemi TanışmLink Toplantısı</h2>
                </Link>
                <Link prefetch={true} href="/page/dijital-genc-yapay-zeka-ekosistemi-tanisma-toplantisi-194864" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            <article className="flex">
                <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                <div className="text-right text-4xl font-bold">27</div>
                </div>
                <div className="space-y-2">
                <Link prefetch={true} href="/page/ybs-summit-2024-269375" rel="noopener noreferrer">
                <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">YBS SUMMIT 2024</h2>
                </Link>
                <Link prefetch={true} href="/page/ybs-summit-2024-269375" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                </div>
            </article>
            </div>
        </div>
    </section>
  )
}
