import Image from "next/image";
import Link from "next/link";

export default function HomeContainer() {
    return (
        <div className="bg-white">
            <section id="carousel" className="relative mt-2" data-carousel="static">
                <div id="baseCarousel" className="relative h-96 overflow-hidden">
                    <div className="hidden duration-400 ease-linear animate-pulse bg-gray-200 dark:bg-neutral-800" data-carousel-item>
                        <a rel="noopener noreferrer" aria-hidden="true">
                            <Image className="object-cover h-full w-full" src="/0ce3cfb8-dcca-47f1-afd7-db00dab10be0.webp" height={500} width={500} alt="" />
                        </a>
                    </div>
                    <div className="hidden duration-400 ease-linear animate-pulse bg-gray-200 dark:bg-neutral-800" data-carousel-item>
                        <a rel="noopener noreferrer" aria-hidden="true">
                        <Image className="object-cover h-full w-full" src="/0ce3cfb8-dcca-47f1-afd7-db00dab10be0.webp" height={500} width={500} alt="" />
                        </a>         
                    </div>
                    <div className="hidden duration-400 ease-linear animate-pulse bg-gray-200 dark:bg-neutral-800" data-carousel-item>
                        <a rel="noopener noreferrer" aria-hidden="true">
                        <Image className="object-cover h-full w-full" src="/0ce3cfb8-dcca-47f1-afd7-db00dab10be0.webp" height={500} width={500} alt="" />
                        </a> 
                    </div>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" aria-hidden="true" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" aria-hidden="true" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>          
                    </span>
                </button>
            </section>
            <section className="py-12">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Hızlı Erişim</h1>
                    </div>
                    <div id="quickAccessContent" className="grid gap-2 grid grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse">
                            <Link href='news/rektorumuz-16--karadeniz-bolgesi-rektorler-konferansi-na-katildi-263463'>News test</Link>
                        </div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                        <div className="flex items-center rounded-lg border-l-8 border dark:border-gray-700 h-12 border-gray-400 bg-gray-100 dark:bg-neutral-800 p-4 shadow animate-pulse"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}