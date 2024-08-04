"use client";

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export default function QuickAccess() {
  return (
        <section aria-label="quickaccess" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl dark:text-white">Hızlı Erişim</h1>
                </div>
                <div id="quickAccessContent" className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                    <Link href="https://nisantasi.edu.tr/ogrenci-dekanliğ" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Öğrenci Dekanlığı</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Kütüphane" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Kütüphane</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Akademik Takvim" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Akademik Takvim</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Bilimsel Faaliyetler" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Bilimsel Faaliyetler</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-E-Bülten" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">E-Bülten</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-SEM" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">SEM</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-OBİS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">OBİS</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Sanal Kampüs" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Sanal Kampüs</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-BolognLink / Ders İçerikleri" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">BolognLink / Ders İçerikleri</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/Kariyer Merkezi" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Kariyer Merkezi</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Formlar" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Formlar</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Lisansüstü" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Lisansüstü</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Yatay Geçiş" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Yatay Geçiş</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Özel Yetenek" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Özel Yetenek</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-DGS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">DGS</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Uluslararası Ofis" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Uluslararası Ofis</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
  )
}
