"use client"

import Link from "next/link"

export default function Application() {
  return (
    <section className="bg-gray-500 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('/498a6090-80e5-4214-b6ee-939ded26d017.webp')]">
        <div className="relative mx-auto max-w-screen-xl px-4 py-10 xl:px-0">
            <div className="mb-6 max-w-screen-md lg:mb-0">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Üniversite Adaylarına Merhaba!</h2>
            <p className="mb-3 font-light text-gray-300 text-sm md:text-lg">Üniversite yolculuğu heyecan vericidir ve şu andLink bu yolculuğun eşiğindesiniz. KarşınızLink pek çok seçenek çıkacak, bazen karmaşık görünebilir. Önemli olan kendinizi tanımak ve ilgi duyduğunuz alanları keşfetmektir.</p>
            <Link prefetch={true} href="/aday" rel="noopener noreferrer" className="py-3 text-sm font-medium text-white hover:text-gray-200 underline">Aday sayfasına git</Link>
            </div>
        </div>
    </section>
  )
}