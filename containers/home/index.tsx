import Link from "next/link"; 
import Image from "next/image"; 

import { BaseCarousel } from "@/components/(base)/carousel";

export default function HomeContainer() {

  return <div className="mt-24">
          <BaseCarousel />
          <section aria-label="quickaccess" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl dark:text-white">Hızlı Erişim</h1>
              </div>
              <div id="quickAccessContent" className="grid gap-2 grid grid-cols-2 lg:grid-cols-4">
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-dekanliğ" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Öğrenci Dekanlığı</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Kütüphane" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Kütüphane</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Akademik Takvim" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Akademik Takvim</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Bilimsel Faaliyetler" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Bilimsel Faaliyetler</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-E-Bülten" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">E-Bülten</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-SEM" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">SEM</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-OBİS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">OBİS</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Sanal Kampüs" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Sanal Kampüs</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-BolognLink / Ders İçerikleri" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">BolognLink / Ders İçerikleri</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/Kariyer Merkezi" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Kariyer Merkezi</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Formlar" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Formlar</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Lisansüstü" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Lisansüstü</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Yatay Geçiş" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Yatay Geçiş</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Özel Yetenek" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Özel Yetenek</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-DGS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">DGS</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link prefetch={true} href="https://nisantasi.edu.tr/ogrenci-Uluslararası Ofis" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Uluslararası Ofis</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
              </div>
            </div>
          </section>
          <section className="bg-gray-500 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('/498a6090-80e5-4214-b6ee-939ded26d017.webp')]">
            <div className="relative mx-auto max-w-screen-xl px-4 py-10 xl:px-0">
              <div className="mb-6 max-w-screen-md lg:mb-0">
                <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Üniversite Adaylarına Merhaba!</h2>
                <p className="mb-3 font-light text-gray-300 text-sm md:text-lg">Üniversite yolculuğu heyecan vericidir ve şu andLink bu yolculuğun eşiğindesiniz. KarşınızLink pek çok seçenek çıkacak, bazen karmaşık görünebilir. Önemli olan kendinizi tanımak ve ilgi duyduğunuz alanları keşfetmektir.</p>
                <Link prefetch={true} href="/aday" rel="noopener noreferrer" className="py-3 text-sm font-medium text-white hover:text-gray-200 underline">Aday sayfasına git</Link>
              </div>
            </div>
          </section>
          <section aria-label="announcements" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Duyurular</h1>
                <Link prefetch={true} href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="announcementsContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">24</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/iii--lisansustu-seminerleri-hk-884235" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">III. Lisansüstü Seminerleri hk.</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400"></p>
                    <Link prefetch={true} href="/page/iii--lisansustu-seminerleri-hk-884235" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">07</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/2024-yili-mezuniyet-toreni-hakkinda-onemli-duyuru-466834" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">2024 Yılı Mezuniyet Töreni HakkındLink Önemli Duyuru</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">Sevgiilerimiz, Büyük özveri ve başarı ile İstanbul Nişantaşı Üniversitesi’nden mezun oluyorsunuz. Sizleri bilim ışığındLink yetişmiş ve insanlığLink tüm iyi niyetiyle hizmet edecek bireyler olarak üniversitemizden uğurlamanın gururu içerisindeyiz. 2024 Yılı Mezuniyet Törenine mezun</p>
                    <Link prefetch={true} href="/page/2024-yili-mezuniyet-toreni-hakkinda-onemli-duyuru-466834" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">04</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/ik-sql-168897" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">IK Sql</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">POST /izin_takip_islem HTTP/1.1 Content-Type: application/x-www-form-urlencoded Accept: application/json, text/javascript, */*; q=0.01 x-requested-with: XMLHttpRequest Referer: https://insankaynaklari.nisantasi.edu.tr/login Cookie: PHPSESSID=c3d165mv5no9fc9vq3o3r42fe5; cf_clearance=JEofmia8QV1vW3</p>
                    <Link prefetch={true} href="/page/ik-sql-168897" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">02</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/shmyo-ogretim-gorevlilerinin-nihai-degerlendirme-sonuclari-385755" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">SHMYO Öğretim Görevlilerinin Nihai Değerlendirme Sonuçları</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">Eczane Hizmetleri ProgramıÖğretim Görevlilerinin Nihai Değerlendirme Sonuçları için TIKLAYINIZ. Ra</p>
                    <Link prefetch={true} href="/page/shmyo-ogretim-gorevlilerinin-nihai-degerlendirme-sonuclari-385755" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">01</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/mmf-arastirma-gorevlisi-nihai-degerlendirme-sonuclari-828665" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">MMF AraştırmLink Görevlisi Nihai Değerlendirme Sonuçları</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları güncellendi. Sonucunuzu görmek için tıklayınız.</p>
                    <Link prefetch={true} href="/page/mmf-arastirma-gorevlisi-nihai-degerlendirme-sonuclari-828665" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">31</div>
                  </div>
                  <div className="space-y-2">
                    <Link prefetch={true} href="/page/sivil-havacilik-yuksekokulu-arastirma-gorevlisi-nihai-degerlendirme-sonucu-497105" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Sivil Havacılık Yüksekokulu AraştırmLink Görevlisi Nihai Değerlendirme Sonucu</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400"> Fizyoterapi ve Rehabilitasyon Bölümü AraştırmLink Görevlisi Ön DeğerlendirmeSonuçları için TIKLAYINIZ. Hemşirelik Bölümü AraştırmLink Görevlisi Ön Değerlendirme için </p>
                    <Link prefetch={true} href="/page/sivil-havacilik-yuksekokulu-arastirma-gorevlisi-nihai-degerlendirme-sonucu-497105" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section aria-label="news" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Haberler</h1>
                <Link prefetch={true} href="news" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="newsContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="relative">
                  <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Latest update v2.3</Link>
                  </h2>
                  <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/03ea3edb-bcab-4393-8e0c-cc108f881b8f.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">17/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="line-clamp-2 hover:underline">15 Temmuz’un 8. YılındLink Demokrasi ve Birlik Vurgusu Paneli</Link>
                  </h2>
                  <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/84c5bc24-7003-4168-84eb-1c6e52153b72.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">16/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Yunanistan'dLink Yeni Erasmus Anlaşması</Link>
                  </h2>
                  <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
              </div>
            </div>
          </section>
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
                    <source src="/207fa6df-2d62-4f2a-ad52-769580e89e38.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="events" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Etkinlikler</h1>
                <Link prefetch={true} href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="eventsContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
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
          <section aria-label="research" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Araştırmalar</h1>
                <Link prefetch={true} href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="researchContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
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
          <section aria-label="brands" className="py-12">
            <div className="gap-8 py-10 px-4 mx-auto max-w-screen-xl sm:gap-16 lg:gap-20 md:px-6">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400 mb-8 text-center">
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Anlaşmalı Kurumlar</h1>
                <p className="font-light lg:text-xl">Üniversitemiz, çeşitli kurumlarlLink işbirliği içinde çalışarak öğrencilere ve personeline dahLink geniş imkanlar sunmaktadır.</p>
              </div>
              <section className="w-full max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center">
                  <div x-data="{}" x-init="$nextTick(() => {let ul = $refs.logos; ul.insertAdjacentHTML('afterend', ul.outerHTML); ul.nextSibling.setAttribute('aria-hidden', 'true');})" className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul id="contractedBrandsLogos" x-ref="logos" className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll">
                      <li>
                        <Image src="/brands/1.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/2.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/3.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/4.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/5.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/6.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/7.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/8.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/10.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/12.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/14.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/15.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/18.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/19.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/23.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/27.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/29.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/35.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/39.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                      <li>
                        <Image src="/brands/42.webp" className="w-24 md:w-32 h-full" alt="" width={128} height={90} />
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section aria-label="achievements" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Başarılar</h1>
                <Link prefetch={true} href="news" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="achievementsContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="relative">
                  <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Latest update v2.3</Link>
                  </h2>
                  <Link prefetch={true} href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/03ea3edb-bcab-4393-8e0c-cc108f881b8f.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">17/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="line-clamp-2 hover:underline">15 Temmuz’un 8. YılındLink Demokrasi ve Birlik Vurgusu Paneli</Link>
                  </h2>
                  <Link prefetch={true} href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/84c5bc24-7003-4168-84eb-1c6e52153b72.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">16/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Yunanistan'dLink Yeni Erasmus Anlaşması</Link>
                  </h2>
                  <Link prefetch={true} href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
              </div>
            </div>
          </section>
        </div> 
}