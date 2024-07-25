import { Input } from "@/components/ui/input";
import Image from "next/image";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Aday(){
    return (
        <div className="py-16 min-h-96 mt-8">
            <div className="py-10 grid items-center lg:grid-cols-9 bg-blue-600">
                <div className="col-span-1 lg:col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left mx-auto max-w-screen-xl p-6">
                    <div className="mb-6">
                        <span className="text-sm font-medium text-white">Aday bilgi formu</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Formu gönder + %5 burs kazan</h1>
                    <div className="mx-auto max-w-xl lg:ml-0" id="applicationForm">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative z-0 w-full group">
                                <label htmlFor="fullName" className="block mb-1 text-xs font-medium text-white">Ad Soyad</label>
                                <Input type="text" name="fullName" id="fullName" placeholder="Nişantaşı Üniversitesi" autoComplete="on" maxLength={100} required />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label htmlFor="phoneNumber" className="block mb-1 text-xs font-medium text-white">Telefon Numarası</label>
                                <Input type="number" name="phoneNumber" id="phoneNumber" required />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label htmlFor="email" className="block mb-1 text-xs font-medium text-white">E-Posta</label>
                                <Input type="email" name="email" id="email" placeholder="info@nisantasi.edu.tr" autoComplete="on" maxLength={64} required />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label htmlFor="grade" className="block mb-1 text-xs font-medium text-white">Sınıf</label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="--" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>--</SelectLabel>
                                        <SelectItem value="9">Apple</SelectItem>
                                        <SelectItem value="10">Banana</SelectItem>
                                        <SelectItem value="11">Blueberry</SelectItem>
                                        <SelectItem value="12">Grapes</SelectItem>
                                        <SelectItem value="99">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="relative w-full mt-4 group">
                            <label htmlFor="programList" className="block mb-1 text-xs font-medium text-center text-white">Hedef Bölüm</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="--" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>--</SelectLabel>
                                    <SelectItem value="9">Apple</SelectItem>
                                    <SelectItem value="10">Banana</SelectItem>
                                    <SelectItem value="11">Blueberry</SelectItem>
                                    <SelectItem value="12">Grapes</SelectItem>
                                    <SelectItem value="99">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex flex-col items-center">
                    <Image src="/MaviDiploma_Web_Logolar.png" className="max-w-sm h-auto" width={400} height={450} alt="" loading="lazy" decoding="async" />
                    <Image src="/MaviDiploma_Web_Burslar.png" className="max-w-sm h-auto" width={800} height={450} alt="" loading="lazy" decoding="async" />
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl p-4">
                <section className="py-20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white mb-2">Akademik Birimlerimiz</h1>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Fakülteler, Yüksekokullar, Enstitü, Meslek Yüksekokulları ve Hazırlık Okulumuzdan size kısaca bahsedelim.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/edc96852-1f27-4dbb-abb9-c8c1ca998f6f.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Tıp Fakültesi</h2>
                            <span className="text-gray-300">Tıp Fakültesi</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/71790205-ef87-4e58-b5f3-40ccc2949186.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Diş Hekimliği Fakültesi</h2>
                            <span className="text-gray-300">Diş Hekimliği Fakültesi</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/45756b87-55de-4901-a36c-d0c646c0ae6f.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Fakülteler</h2>
                            <span className="text-gray-300">İktisadi, İdari ve Sosyal Bilimler, Mühendislik Mimarlık, Sağlık Bilimleri, Sanat ve Tasarım Fakültesi</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/01d8eaa5-7ede-4c04-8cc9-79d264b96928.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Yüksekokullar</h2>
                            <span className="text-gray-300">Beden Eğitimi ve Spor, Sivil Havacılık ve Uygulamalı Bilimler Yüksekokulu</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/89500bce-0052-4742-a9e2-9af8e4486c17.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Meslek Yüksekokulu</h2>
                            <span className="text-gray-300">Etkinlik ve verimlilik odaklı yapılan bu planlamalar, mezunlarımızın okurken iş hayatını tanımlarına yardımcı olmaktadır.</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                        <a href="#" className="p-8 text-left h-96 bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply hover:bg-blend-normal tracking-tight leading-tight bg-[url('/page/3933ac93-7d93-44c7-baf0-2c187f1ad14b.webp')]">
                            <h2 className="mb-2 max-w-xl text-4xl font-extrabold text-white">Enstitü</h2>
                            <span className="text-gray-300">Lisansüstü Eğitim Enstitüsü</span>
                            <p className="text-white text-sm mt-4 underline font-medium underline">Devamı</p>
                        </a>
                    </div>
                </section>
                <section className="py-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white mb-2">Sıkça Sorulan Sorular</h1>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Üniversitemiz hakkında sıkça sorulan sorular.</span>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Neden İstanbul Nişantaşı Üniversitesi?</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Mavi Diploma Nedir ?</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Özel Yetenek</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Nish Kariyer Envanteri</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Ek Kontenjan ve Puan Tablosu</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">360° Sanal tur</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Dikey Geçiş</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Online Deneme Sınavı</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg className="fill-black dark:fill-white mr-3 h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd"/></svg>          
                            <div>
                                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white line-clamp-2">Apply Nişantaşı</h3>
                                <p className="font-light text-sm line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları açıklandı Sonucunuzu görmek için tıklayınız. Sınava itirazınızın olması durumunda Perşembe günü (30.05.2024) saat 17:00’a kadar Yabancı Diller Okulu ile iletişime geçebilirsiniz.</p>       
                                <a href="aday/test1" className="inline-flex items-center text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</a>   
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}