import { useState } from "react";

import Link from "next/link"; 
import Image from "next/image"; 

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { BaseCarousel } from "@/components/(base)/carousel";


export default function HomeContainer() {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const amount = parseInt(e.currentTarget.dataset.value || '0', 10);
    setPaymentAmount(amount);
  };

  return <div className="mt-24">
          <BaseCarousel />
          <section aria-label="quickaccess" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl dark:text-white">Hızlı Erişim</h1>
              </div>
              <div id="quickAccessContent" className="grid gap-2 grid grid-cols-2 lg:grid-cols-4">
                <Link href="https://nisantasi.edu.tr/ogrenci-dekanliğ" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Öğrenci Dekanlığı</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Kütüphane" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Kütüphane</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Akademik Takvim" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Akademik Takvim</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Bilimsel Faaliyetler" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Bilimsel Faaliyetler</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-E-Bülten" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">E-Bülten</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-SEM" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">SEM</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-OBİS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">OBİS</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Sanal Kampüs" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Sanal Kampüs</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-BolognLink / Ders İçerikleri" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">BolognLink / Ders İçerikleri</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/Kariyer Merkezi" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Kariyer Merkezi</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Formlar" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Formlar</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Lisansüstü" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Lisansüstü</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Yatay Geçiş" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Yatay Geçiş</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Özel Yetenek" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Özel Yetenek</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-DGS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">DGS</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
                <Link href="https://nisantasi.edu.tr/ogrenci-Uluslararası Ofis" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                <span className="text-black dark:text-white text-xs md:text-base font-medium">Uluslararası Ofis</span>
                <svg className="text-black dark:text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
                </Link>
              </div>
            </div>
          </section>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">NishCard</Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm md:max-w-4xl">
              <DialogHeader className="border-b text-left border-neutral-600 pb-4">
                <DialogTitle>NishCard Bakiye Yükleme</DialogTitle>
              </DialogHeader>
              <div className="p-4 h-auto max-h-[30rem] overflow-x-hidden overflow-y-auto" id="nishPayContent">
                <h3 className="mb-2 text-base font-semibold dark:text-white">Hesap Bilgileri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="gap-4 space-y-2 text-center">
                    <div>
                      <label htmlFor="nishPayfullName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Ad Soyad</label>
                      <Input type="text" name="nishPayfullName" id="nishPayfullName" className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 text-gray-500 dark:text-gray-300 font-medium text-xs text-center rounded-lg block w-full p-2.5" value="Zeynep Serra Karaman" disabled={true} />
                    </div>
                    <div>
                      <label htmlFor="nishPayAccountNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Öğrenci / Sicil Numarası</label>
                      <Input type="text" name="nishPayAccountNumber" id="nishPayAccountNumber" className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 text-gray-500 dark:text-gray-300 font-medium text-xs text-center rounded-lg block w-full p-2.5" value="20234598987" disabled={true} />
                    </div>
                    <div>
                      <label htmlFor="nishPayPhoneNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Telefon Numarası</label>
                      <Input type="text" name="nishPayPhoneNumber" id="nishPayPhoneNumber" className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 text-gray-500 dark:text-gray-300 font-medium text-xs text-center rounded-lg block w-full p-2.5" value="12421421412" disabled={true} />
                    </div>
                    <div>
                      <label htmlFor="nishPayBalance" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Mevcut Bakiye</label>
                      <Input type="text" name="nishPayBalance" id="nishPayBalance" className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 text-gray-500 dark:text-gray-300 font-medium text-xs text-center rounded-lg block w-full p-2.5" value="450 TL" disabled={true} />
                    </div>
                  </div>
                  <div className="gap-4 space-y-2">
                    <div>
                      <h3 className="mb-2 text-base font-semibold dark:text-white">Yüklenecek Miktar</h3>
                      <ul className="gap-2 grid grid-cols-4 md:grid-cols-5">
                        <li data-value={10} onClick={handleClick}>
                          <div id="nishPayAmountId-0" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>10 TL</span>
                          </div>
                        </li>
                        <li data-value={20} onClick={handleClick}>
                          <div id="nishPayAmountId-1" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>20 TL</span>
                          </div>
                        </li>
                        <li data-value={30} onClick={handleClick}>
                          <div id="nishPayAmountId-2" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>30 TL</span>
                          </div>
                        </li>
                        <li data-value={50} onClick={handleClick}>
                          <div id="nishPayAmountId-3" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>50 TL</span>
                          </div>
                        </li>
                        <li data-value={100} onClick={handleClick}>
                          <div id="nishPayAmountId-4" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>100 TL</span>
                          </div>
                        </li>
                        <li data-value={150} onClick={handleClick}>
                          <div id="nishPayAmountId-5" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>150 TL</span>
                          </div>
                        </li>
                        <li data-value={200} onClick={handleClick}>
                          <div id="nishPayAmountId-6" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>200 TL</span>
                          </div>
                        </li>
                        <li data-value={300} onClick={handleClick}>
                          <div id="nishPayAmountId-7" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>300 TL</span>
                          </div>
                        </li>
                        <li data-value={500} onClick={handleClick}>
                          <div id="nishPayAmountId-8" className="flex items-center rounded-lg bg-gray-50 p-2 border-2 border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 dark:text-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:shadow cursor-pointer justify-center">
                            <span>500 TL</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Button className="text-white bg-black hover:bg-black/80 font-medium rounded-lg text-xs px-5 py-2.5 w-full text-center dark:hover:bg-neutral-800/80 dark:bg-neutral-800" type="button">Ödeme yap ({paymentAmount}₺)</Button>
                    </div>
                    <p className="text-xs text-black dark:text-gray-300 font-medium">Yapılan ödemelerde iade yapılmamaktadır. Bu nedenle, yükleme işlemleri sırasında bu durumu göz önünde bulundurmanız önem arz etmektedir.</p>
                    <div className="flex justify-between">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="184" height="80" viewBox="0 0 184 80"><g fill="none"><path fill="#060809" d="M53.995 75.172c-1.278 0-2.773-.972-2.773-3.052 0-2.056 1.495-3.056 2.773-3.056 1.235 0 2.692.904 2.692 3.056 0 2.112-1.457 3.052-2.692 3.052m3.278-7.188a.66.66 0 0 0-.65.66v.948c-.492-1.057-1.614-1.657-2.814-1.657-1.763 0-3.895 1.388-3.895 4.185 0 2.827 2.132 4.206 3.895 4.206 1.405 0 2.497-.856 2.814-1.813v1.132c0 .344.302.659.65.659a.68.68 0 0 0 .664-.66v-7a.653.653 0 0 0-.664-.66m12.42 2.52h-1.835v-3.498h1.835c1.192 0 2.074.472 2.074 1.764 0 1.305-.882 1.734-2.074 1.734m.098-5.305h-2.898c-.683 0-1.173.486-1.173 1.162v8.893c0 .583.477 1.072 1.076 1.072.589 0 1.062-.49 1.062-1.072v-2.947h1.933c2.465 0 4.048-1.52 4.048-3.537 0-1.983-1.583-3.571-4.048-3.571m9.059 9.338c-1.045 0-2.135-.796-2.135-2.418 0-1.604 1.09-2.42 2.135-2.42.886 0 2.06.643 2.06 2.42s-1.174 2.418-2.06 2.418m3.007-6.553c-.566 0-1.047.47-1.047 1.017v.275c-.313-.742-1.214-1.34-2.342-1.34-1.728 0-3.829 1.387-3.829 4.183 0 2.863 2.09 4.207 3.83 4.207 1.378 0 2.22-.857 2.341-1.344v.3c0 .569.481 1.022 1.047 1.022.555 0 1.059-.453 1.059-1.021v-6.282c0-.547-.504-1.017-1.06-1.017m9.713 0c-.396 0-.764.218-.98.724l-2.172 4.873-2.118-4.873c-.226-.506-.603-.724-.998-.724a.935.935 0 0 0-.951.92c0 .194.064.355.111.482l2.943 6.45-.902 2.045c-.042.124-.106.278-.106.475 0 .495.379.92.912.92.401 0 .782-.216 1-.719l4.104-9.171c.058-.127.127-.288.127-.481 0-.495-.417-.92-.97-.92m10.671-2.838c-.606 0-1.112.469-1.112 1.032v6.053c0 1.651-1.04 2.305-2.278 2.305-1.214 0-2.28-.654-2.28-2.305v-6.053c0-.563-.504-1.032-1.093-1.032-.586 0-1.042.469-1.042 1.032v6.086c0 2.545 1.95 4.061 4.415 4.061 2.455 0 4.418-1.516 4.418-4.061v-6.086c0-.563-.448-1.032-1.029-1.032m11.608 3.939c.7 0 1.487.284 1.96.91.13.159.32.302.555.302a.54.54 0 0 0 .556-.539c0-.249-.175-.423-.301-.577-.697-.84-1.69-1.247-2.834-1.247-1.869 0-4.118 1.374-4.118 4.184 0 2.8 2.25 4.174 4.118 4.174 1.144 0 2.137-.428 2.834-1.258.126-.149.301-.316.301-.566a.54.54 0 0 0-.556-.54c-.234 0-.425.138-.555.303-.473.627-1.26.91-1.96.91-1.408 0-2.878-1.006-2.878-3.023 0-2.027 1.47-3.033 2.878-3.033m8.263 6.086c-1.314 0-2.815-1.02-2.815-3.035 0-2.029 1.501-3.05 2.815-3.05 1.329 0 2.82 1.021 2.82 3.05 0 2.016-1.491 3.035-2.82 3.035m0-7.237c-1.82 0-4.12 1.401-4.12 4.202 0 2.81 2.3 4.19 4.12 4.19 1.84 0 4.13-1.38 4.13-4.19 0-2.8-2.29-4.202-4.13-4.202m16.025.011c-1.662 0-2.712 1.094-3.151 2.05-.482-1.495-1.714-2.05-2.884-2.05-1.882 0-2.864 1.44-2.957 1.973v-1.276a.66.66 0 0 0-.653-.659.663.663 0 0 0-.663.66v6.99c0 .337.3.659.663.659.354 0 .653-.322.653-.66v-4.282c.14-.899.964-2.254 2.576-2.254 1.108 0 2.152.648 2.152 2.36v4.177c0 .337.284.659.65.659a.68.68 0 0 0 .664-.66v-4.282c.147-.899.968-2.254 2.585-2.254 1.108 0 2.135.648 2.135 2.36v4.177c0 .337.3.659.669.659.358 0 .644-.322.644-.66v-4.176c0-2.613-1.583-3.51-3.083-3.51m8.974 7.225c-1.236 0-2.69-.94-2.69-3.052 0-2.152 1.454-3.056 2.69-3.056 1.285 0 2.767 1 2.767 3.056 0 2.08-1.482 3.052-2.767 3.052m.187-7.237c-1.206 0-2.325.6-2.817 1.657v-.948a.66.66 0 0 0-.646-.66.65.65 0 0 0-.661.66v9.976c0 .358.298.657.66.657.35 0 .66-.3.66-.657v-4.061c.338.937 1.411 1.767 2.804 1.767 1.758 0 3.897-1.38 3.897-4.206 0-2.797-2.139-4.185-3.897-4.185m9.124 7.237c-1.287 0-2.774-.972-2.774-3.052 0-2.056 1.487-3.056 2.775-3.056 1.228 0 2.688.904 2.688 3.056 0 2.112-1.46 3.052-2.688 3.052m3.271-7.188a.665.665 0 0 0-.65.66v.948c-.489-1.057-1.615-1.657-2.814-1.657-1.755 0-3.892 1.388-3.892 4.185 0 2.827 2.137 4.206 3.892 4.206 1.407 0 2.5-.856 2.815-1.813v1.132c0 .344.306.659.65.659.367 0 .66-.315.66-.66v-7a.65.65 0 0 0-.66-.66m6.838-.038c-1.885 0-2.87 1.44-2.96 1.973v-1.276a.66.66 0 0 0-.648-.659.666.666 0 0 0-.666.66v6.99c0 .337.304.659.666.659.348 0 .647-.322.647-.66v-4.282c.144-.899.97-2.254 2.583-2.254 1.104 0 2.155.648 2.155 2.36v4.177c0 .337.283.659.65.659a.68.68 0 0 0 .66-.66v-4.176c0-2.613-1.597-3.51-3.087-3.51m11.071.037c-.256 0-.495.138-.624.44l-2.59 6.011-2.583-6.01c-.124-.303-.367-.44-.62-.44a.617.617 0 0 0-.618.598c0 .125.033.204.066.294l3.105 7.05-1.061 2.457c-.036.096-.07.173-.07.3 0 .31.24.592.59.592.254 0 .492-.139.618-.436l4.34-9.963c.03-.09.06-.17.06-.294a.61.61 0 0 0-.613-.599"/><path fill="#1E64FF" d="M5.087 15.724c-2.544 0-4.607 2.05-4.607 4.572v26.773c0 2.531 2.062 4.576 4.606 4.576 2.542 0 4.605-2.045 4.605-4.576V20.296c0-2.523-2.063-4.572-4.605-4.572"/><g transform="translate(0 1.076)"><mask id="a" fill="#fff"><use/></mask><path fill="#1E64FF" d="M5.087.07C2.277.07 0 2.335 0 5.13c0 2.789 2.278 5.058 5.087 5.058s5.089-2.27 5.089-5.058c0-2.795-2.281-5.06-5.09-5.06" mask="url(#a)"/></g><path fill="#1E64FF" d="M87.526 47.069c0-2.524-2.064-4.58-4.611-4.58H70.194l16.258-19.25a4.557 4.557 0 0 0-.57-6.444 4.6 4.6 0 0 0-3.119-1.071c-.051-.006-20.343 0-20.343 0-2.546 0-4.606 2.05-4.606 4.571 0 2.531 2.06 4.587 4.606 4.587h10.626L56.792 44.127a4.554 4.554 0 0 0 .566 6.446 4.58 4.58 0 0 0 2.962 1.072h22.595c2.547 0 4.611-2.045 4.611-4.576m40.594-22.797c2.523 0 4.887.972 6.672 2.748a4.637 4.637 0 0 0 6.516 0 4.573 4.573 0 0 0 0-6.476c-3.524-3.504-8.208-5.431-13.189-5.431-4.975 0-9.657 1.927-13.177 5.43-3.522 3.503-5.463 8.15-5.463 13.102 0 4.948 1.94 9.605 5.463 13.098a18.57 18.57 0 0 0 13.177 5.435c4.981 0 9.665-1.932 13.19-5.435a4.565 4.565 0 0 0 0-6.468 4.62 4.62 0 0 0-6.517 0 9.44 9.44 0 0 1-6.673 2.75 9.42 9.42 0 0 1-6.664-2.75 9.3 9.3 0 0 1-2.763-6.63c0-2.504.98-4.862 2.763-6.625a9.37 9.37 0 0 1 6.664-2.748m37.237 18.753c-5.197 0-9.424-4.21-9.424-9.38s4.227-9.373 9.424-9.373c5.202 0 9.435 4.203 9.435 9.373s-4.233 9.38-9.435 9.38m0-27.912c-10.275 0-18.638 8.313-18.638 18.532s8.363 18.533 18.638 18.533c10.28 0 18.644-8.315 18.644-18.533 0-10.22-8.363-18.532-18.644-18.532m-66.517.611c-2.54 0-4.6 2.05-4.6 4.572v26.773c0 2.531 2.06 4.576 4.6 4.576 2.548 0 4.606-2.045 4.606-4.576V20.296c0-2.523-2.058-4.572-4.606-4.572"/><g transform="translate(93.533 1.076)"><mask id="b" fill="#fff"><use/></mask><path fill="#1E64FF" d="M5.305.07C2.495.07.215 2.335.215 5.13c0 2.789 2.28 5.058 5.09 5.058 2.815 0 5.093-2.27 5.093-5.058 0-2.795-2.278-5.06-5.093-5.06" mask="url(#b)"/></g><path fill="#1E64FF" d="M49.812 16.239c-2.259-1.167-5.037-.293-6.21 1.948l-9.879 18.93-9.88-18.93c-1.17-2.24-3.953-3.115-6.21-1.948-2.255 1.169-3.136 3.933-1.963 6.178l12.861 24.644-5.938 11.4a4.56 4.56 0 0 0 1.96 6.174c.741.39 1.54.55 2.322.512a4.6 4.6 0 0 0 3.895-2.457l21-40.273a4.564 4.564 0 0 0-1.958-6.178"/></g></svg>
                      </div>
                      <div className="inline-flex gap-2">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                          <path d="M34.482 9a8.2 8.2 0 0 1 3.052.577l-.463 2.926-.308-.143a5.64 5.64 0 0 0-2.534-.52c-1.343 0-1.946.591-1.96 1.168 0 .635.73 1.053 1.92 1.673 1.96.966 2.868 2.148 2.855 3.69C37.016 21.184 34.692 23 31.122 23c-1.526-.015-2.996-.347-3.794-.721l.476-3.043.448.217c1.106.505 1.834.72 3.192.72.98 0 2.03-.418 2.043-1.325 0-.592-.447-1.024-1.763-1.688-1.288-.649-3.01-1.73-2.982-3.676.014-2.639 2.38-4.484 5.74-4.484M21.798 22.798H25.2l2.128-13.552h-3.402z" fill="#00579F"></path>
                          <path clipRule="evenodd" d="M46.255 9.246h-2.631c-.812 0-1.428.245-1.779 1.124l-5.053 12.428h3.57l.714-2.033h4.368c.098.476.406 2.033.406 2.033H49zm-4.2 8.75 1.36-3.79c-.007.01.038-.116.104-.305.098-.28.243-.693.343-.993l.237 1.167s.645 3.244.785 3.922h-2.828Z" fill="#00579F" fillRule="evenodd"></path>
                          <path d="m15.624 18.487 3.332-9.241h3.598l-5.348 13.538h-3.598l-3.052-11.852c2.156 1.168 4.088 3.518 4.704 5.68z" fill="#00579F"></path>
                          <path d="M12.53 9.246H7.056L7 9.519c4.27 1.125 7.098 3.836 8.26 7.094l-1.19-6.228c-.196-.866-.798-1.11-1.54-1.14Z" fill="#FAA61A"></path>
                          <rect height="31" rx="5.5" stroke="currentColor" className="nrcn7 dark:stroke-neutral-600" width="55" x=".5" y=".5"></rect>
                        </svg>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                          <path d="M28.017 22.85A9.14 9.14 0 0 1 22.108 25C17.078 25 13 20.97 13 16s4.078-9 9.108-9c2.255 0 4.318.81 5.909 2.15A9.14 9.14 0 0 1 33.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.14 9.14 0 0 1-5.908-2.15" fill="#ED0006"></path>
                          <path d="M28.017 22.85a8.94 8.94 0 0 0 3.2-6.85c0-2.743-1.242-5.2-3.2-6.85A9.14 9.14 0 0 1 33.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.14 9.14 0 0 1-5.908-2.15" fill="#F9A000"></path>
                          <path d="M28.017 22.85a8.94 8.94 0 0 0 3.2-6.85c0-2.743-1.242-5.2-3.2-6.85a8.94 8.94 0 0 0-3.2 6.85c0 2.743 1.241 5.2 3.2 6.85" fill="#FF5E00"></path>
                          <rect height="31" rx="5.5" stroke="currentColor" className="nrcn7 dark:stroke-neutral-600" width="55" x=".5" y=".5"></rect>
                        </svg>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                          <path d="M17.69 5.001h8.528c1.19 0 1.93 1 1.652 2.228L23.9 24.775C23.62 26.001 22.43 27 21.239 27H12.71c-1.188 0-1.93-1-1.653-2.225L15.03 7.23c.278-1.229 1.469-2.228 2.66-2.228Z" fill="#E21836"></path>
                          <path d="M25.507 5h9.806c1.19 0 .654.999.374 2.228l-3.97 17.546C31.44 26 31.526 27 30.333 27h-9.806c-1.192 0-1.93-1-1.65-2.225l3.969-17.546C23.128 5.998 24.316 5 25.507 5" fill="#00447C"></path>
                          <path d="M34.925 5h8.527c1.192 0 1.932.999 1.652 2.228l-3.969 17.546C40.855 26 39.662 27 38.47 27h-8.523c-1.192 0-1.932-1-1.653-2.225l3.97-17.546C32.542 5.998 33.732 5 34.924 5Z" fill="#007B84"></path>
                          <path d="M19.917 10.623c-.877.01-1.136 0-1.219-.02-.032.155-.623 2.965-.625 2.967-.127.569-.22.974-.535 1.236a.94.94 0 0 1-.63.225c-.388 0-.615-.198-.653-.575l-.007-.13.119-.766s.62-2.56.732-2.899l.009-.038c-1.21.01-1.423 0-1.438-.02-.008.027-.038.186-.038.186l-.634 2.886-.055.245-.105.8c0 .238.045.432.135.596.29.52 1.113.597 1.58.597.6 0 1.164-.131 1.544-.37.661-.403.834-1.031.988-1.59l.072-.286s.64-2.66.748-3.006c.005-.019.006-.029.012-.038m2.177 2.145a1.65 1.65 0 0 0-.69.166c-.091.05-.178.105-.27.161l.083-.307-.046-.052c-.537.112-.657.127-1.152.198l-.042.029c-.058.492-.109.861-.322 1.827q-.123.536-.25 1.07l.022.046c.509-.028.663-.028 1.104-.02l.036-.04c.056-.296.064-.366.188-.965.058-.284.18-.908.24-1.13.11-.053.22-.105.323-.105.248 0 .218.222.208.31-.01.15-.1.635-.193 1.052l-.062.27c-.043.198-.09.391-.133.588l.019.04c.5-.028.653-.028 1.081-.02l.05-.04c.078-.463.1-.586.238-1.26l.069-.308c.134-.605.2-.912.1-1.162-.108-.28-.365-.348-.601-.348m2.431.634c-.266.052-.436.088-.605.11-.167.028-.33.053-.588.09l-.02.019-.018.015c-.027.197-.046.368-.082.568-.03.207-.076.443-.151.781-.059.26-.09.35-.122.441-.033.091-.069.18-.134.435l.015.023.013.022c.24-.012.398-.02.56-.022.161-.006.328 0 .587.002l.023-.02.024-.02c.038-.23.043-.292.066-.404.023-.12.062-.287.158-.731.045-.21.096-.417.143-.63.048-.213.1-.422.148-.63l-.007-.026zm.006-.854c-.242-.147-.667-.1-.953.102-.284.2-.317.482-.076.63.238.144.664.101.948-.104.284-.203.32-.483.08-.628Zm1.463 3.404c.49 0 .991-.14 1.369-.551.29-.334.424-.832.47-1.036.15-.679.033-.996-.114-1.189-.223-.294-.618-.388-1.027-.388-.246 0-.832.025-1.29.46-.329.313-.48.738-.572 1.146-.093.415-.2 1.163.469 1.442.206.09.503.116.695.116m-.038-1.527c.113-.514.246-.946.586-.946.266 0 .286.322.167.837-.021.115-.118.54-.25.721-.092.134-.2.215-.32.215-.036 0-.249 0-.252-.325a2.3 2.3 0 0 1 .069-.502m3.1 1.46.038-.04c.055-.295.064-.365.184-.964.06-.284.184-.908.243-1.13.11-.053.217-.105.324-.105.246 0 .216.222.207.31-.01.15-.1.635-.194 1.052l-.058.27c-.045.198-.093.391-.136.588l.018.04c.503-.028.65-.028 1.08-.02l.052-.04c.075-.463.096-.586.237-1.259l.067-.31c.135-.604.203-.911.104-1.161-.11-.28-.37-.348-.603-.348-.154 0-.438.039-.69.167q-.135.074-.268.16l.077-.307-.041-.052c-.537.112-.66.127-1.155.199l-.038.028c-.06.492-.109.86-.322 1.827-.081.356-.166.716-.25 1.07l.023.046c.509-.028.66-.028 1.101-.02Zm3.693.02.22-1.099s.16-.69.17-.715c0 0 .05-.072.1-.1h.075c.698 0 1.486 0 2.104-.469.42-.32.708-.795.836-1.37a2 2 0 0 0 .058-.478c0-.22-.043-.438-.167-.609-.315-.454-.943-.462-1.667-.466l-.357.004c-.927.012-1.3.008-1.452-.011l-.037.193-.332 1.587-.832 3.528c.81-.01 1.141-.01 1.28.006Zm.615-2.814.352-1.575.011-.082.005-.061.141.015.745.066c.288.114.406.41.324.794-.076.352-.298.648-.583.791-.234.121-.522.131-.818.131h-.191zm2.199 1.363c-.094.41-.2 1.158.464 1.424.212.093.402.12.595.11.204-.01.393-.116.568-.268l-.047.188.03.04c.478-.021.626-.021 1.144-.017l.047-.037c.076-.458.147-.902.344-1.778.096-.42.191-.835.29-1.253l-.016-.046c-.535.102-.678.124-1.192.199l-.04.032-.015.125a.74.74 0 0 0-.375-.318c-.229-.093-.766.027-1.228.46-.325.31-.48.733-.57 1.14Zm1.123.025c.115-.505.246-.932.587-.932.216 0 .33.205.306.554l-.061.283q-.052.225-.107.447c-.037.102-.08.198-.126.262-.088.128-.297.208-.417.208-.034 0-.244 0-.252-.32-.001-.159.03-.322.07-.502m5.868-1.666-.042-.049c-.529.11-.625.128-1.111.196l-.036.036-.006.024-.001-.008c-.362.86-.352.674-.646 1.35l-.004-.082-.073-1.467-.047-.049c-.554.11-.567.128-1.08.196l-.04.036q-.006.027-.008.058l.003.008c.064.336.049.261.113.793.03.26.07.523.1.78.05.432.078.644.14 1.302-.346.587-.428.81-.76 1.325l.002.005-.235.382c-.027.04-.05.068-.085.08a.34.34 0 0 1-.154.022h-.13l-.193.661.663.012c.389-.002.633-.189.765-.44l.416-.735H40.1l.043-.052c.28-.621 2.412-4.384 2.412-4.384Zm-6.991 8.682h-.281l1.04-3.54h.345l.11-.366.01.406c-.013.25.179.473.682.436h.582l.2-.681h-.218q-.19.001-.178-.103l-.01-.413h-1.078v.002c-.349.008-1.39.034-1.6.092-.256.068-.524.267-.524.267l.105-.365H33.74l-.21.724-1.054 3.595h-.205l-.2.678h2.008l-.067.225h.99l.065-.226h.278zm-.824-2.821a4 4 0 0 0-.462.185l.267-.905h.801l-.193.66s-.248.015-.413.06m.015 1.293s-.252.032-.417.07c-.164.052-.47.212-.47.212l.277-.942h.805zm-.449 1.537h-.804l.233-.795h.801zm1.936-2.197h1.158l-.166.555h-1.174l-.176.607h1.027l-.778 1.127a.32.32 0 0 1-.158.136.45.45 0 0 1-.208.062h-.285l-.196.664h.745c.388 0 .617-.181.785-.42l.534-.75.114.762a.36.36 0 0 0 .192.26c.075.038.152.104.26.114q.175.008.258.009h.366l.22-.744h-.145c-.082 0-.225-.014-.25-.04-.024-.033-.024-.083-.037-.16l-.116-.764h-.476l.209-.256h1.171l.18-.607h-1.084l.169-.555h1.081l.2-.684h-3.223zm-9.785 2.351.27-.926h1.111l.204-.688h-1.113l.17-.57h1.087l.201-.667h-2.72l-.197.667h.618l-.165.57h-.62l-.204.7h.617l-.36 1.225c-.049.162.023.224.068.3a.3.3 0 0 0 .199.149c.109.025.183.04.285.04h1.253l.223-.763-.555.079c-.108 0-.405-.014-.372-.116m.127-4.433-.281.524a.6.6 0 0 1-.164.219q-.065.04-.251.039h-.147l-.197.67h.488c.235 0 .415-.088.501-.133.093-.05.117-.022.188-.093l.165-.147h1.524l.202-.697h-1.115l.195-.382zm2.25 4.447c-.026-.039-.007-.107.032-.248l.417-1.419h1.482q.323-.003.473-.013a1 1 0 0 0 .356-.124.7.7 0 0 0 .26-.246c.063-.09.167-.29.255-.596l.524-1.796-1.538.009s-.473.072-.682.151c-.21.089-.51.336-.51.336l.138-.492h-.95l-1.33 4.54a3 3 0 0 0-.086.38c-.002.083.102.165.17.227.079.062.197.052.31.062.118.01.287.015.52.015h.73l.224-.779-.654.064a.17.17 0 0 1-.141-.071m.718-2.625h1.556l-.099.319c-.014.007-.047-.016-.206.003h-1.347zm.311-1.071h1.57l-.113.384s-.74-.007-.858.015c-.521.093-.826.38-.826.38l.227-.78Zm1.18 2.459a.17.17 0 0 1-.06.098q-.047.03-.16.029H30.6l.013-.389h-.922l-.037 1.9c-.002.138.011.217.109.28.097.08.397.09.802.09h.578l.208-.711-.503.028-.167.01c-.023-.01-.045-.019-.07-.044-.02-.022-.056-.008-.05-.146l.004-.487.527-.022c.285 0 .407-.096.511-.187.1-.087.132-.187.169-.322l.088-.431h-.725l-.092.304Z" fill="#FEFEFE"></path>
                          <rect height="31" rx="5.5" stroke="currentColor" className="nrcn7 dark:stroke-neutral-600" width="55" x=".5" y=".5"></rect>
                        </svg>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                          <path d="M19.648 15.984c0 2.074 1.629 3.683 3.725 3.683.592 0 1.1-.117 1.726-.411v-1.62c-.55.55-1.038.772-1.662.772-1.386 0-2.37-1.005-2.37-2.434 0-1.355 1.015-2.424 2.306-2.424.656 0 1.153.235 1.726.794v-1.62c-.604-.306-1.101-.433-1.694-.433-2.085 0-3.757 1.642-3.757 3.693m-3.532-1.714c0 .382.242.584 1.068.89 1.566.572 2.03 1.08 2.03 2.2 0 1.366-1.003 2.317-2.434 2.317-1.047 0-1.809-.412-2.443-1.343l.89-.856c.316.612.845.94 1.501.94.614 0 1.069-.423 1.069-.995 0-.296-.138-.55-.413-.73-.138-.085-.412-.212-.951-.402-1.293-.465-1.736-.962-1.736-1.935 0-1.155.952-2.022 2.2-2.022.774 0 1.482.265 2.074.783l-.72.943c-.359-.402-.698-.572-1.11-.572-.593 0-1.025.338-1.025.783Z" fill="#231F20"></path>
                          <path clipRule="evenodd" d="M8.02 12.451H6v7.057h2.01c1.068 0 1.84-.252 2.518-.815a3.54 3.54 0 0 0 1.28-2.709c0-2.082-1.555-3.533-3.788-3.533m1.608 5.301c-.432.39-.994.561-1.883.561h-.37v-4.666h.37c.89 0 1.429.159 1.883.57.476.424.763 1.081.763 1.757 0 .677-.287 1.354-.763 1.778" fill="#231F20" fillRule="evenodd"></path>
                          <path d="M13.819 12.451h-1.377v7.057h1.377V12.45Zm20.311 0 1.882 4.74 1.906-4.74h1.492l-3.048 7.238h-.74l-2.995-7.238zm5.903 7.057h3.903v-1.195h-2.528v-1.905h2.435v-1.195h-2.435v-1.566h2.528V12.45h-3.903v7.057Z" fill="#231F20"></path>
                          <path clipRule="evenodd" d="M46.889 12.451c1.587 0 2.497.762 2.497 2.083 0 1.08-.57 1.79-1.607 2L50 19.509h-1.693l-1.905-2.835h-.18v2.835h-1.374V12.45h2.04Zm-.666 3.249h.402c.879 0 1.345-.382 1.345-1.091 0-.687-.466-1.046-1.323-1.046h-.424z" fill="#231F20" fillRule="evenodd"></path>
                          <path d="M29.302 19.758a3.754 3.754 0 1 0 0-7.508 3.754 3.754 0 0 0 0 7.508" fill="#F48120"></path>
                          <path d="M56 20c-1.492 1.035-12.661 8.428-32 12h28.85c1.74 0 3.15-1.39 3.15-3.104z" fill="#F47216"></path>
                          <rect height="31" rx="5.5" stroke="currentColor" className="nrcn7 dark:stroke-neutral-600" width="55" x=".5" y=".5"></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <section className="bg-gray-500 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('/498a6090-80e5-4214-b6ee-939ded26d017.webp')]">
            <div className="relative mx-auto max-w-screen-xl px-4 py-10 xl:px-0">
              <div className="mb-6 max-w-screen-md lg:mb-0">
                <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Üniversite Adaylarına Merhaba!</h2>
                <p className="mb-3 font-light text-gray-300 text-sm md:text-lg">Üniversite yolculuğu heyecan vericidir ve şu andLink bu yolculuğun eşiğindesiniz. KarşınızLink pek çok seçenek çıkacak, bazen karmaşık görünebilir. Önemli olan kendinizi tanımak ve ilgi duyduğunuz alanları keşfetmektir.</p>
                <Link href="/aday" rel="noopener noreferrer" className="py-3 text-sm font-medium text-white hover:text-gray-200 underline">Aday sayfasına git</Link>
              </div>
            </div>
          </section>
          <section aria-label="/page" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Duyurular</h1>
                <Link href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="/pageContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">24</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/iii--lisansustu-seminerleri-hk-884235" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">III. Lisansüstü Seminerleri hk.</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400"></p>
                    <Link href="/page/iii--lisansustu-seminerleri-hk-884235" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">07</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/2024-yili-mezuniyet-toreni-hakkinda-onemli-duyuru-466834" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">2024 Yılı Mezuniyet Töreni HakkındLink Önemli Duyuru</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">Sevgiilerimiz, Büyük özveri ve başarı ile İstanbul Nişantaşı Üniversitesi’nden mezun oluyorsunuz. Sizleri bilim ışığındLink yetişmiş ve insanlığLink tüm iyi niyetiyle hizmet edecek bireyler olarak üniversitemizden uğurlamanın gururu içerisindeyiz. 2024 Yılı Mezuniyet Törenine mezun</p>
                    <Link href="/page/2024-yili-mezuniyet-toreni-hakkinda-onemli-duyuru-466834" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">04</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/ik-sql-168897" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">IK Sql</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">POST /izin_takip_islem HTTP/1.1 Content-Type: application/x-www-form-urlencoded Accept: application/json, text/javascript, */*; q=0.01 x-requested-with: XMLHttpRequest Referer: https://insankaynaklari.nisantasi.edu.tr/login Cookie: PHPSESSID=c3d165mv5no9fc9vq3o3r42fe5; cf_clearance=JEofmia8QV1vW3</p>
                    <Link href="/page/ik-sql-168897" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">02</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/shmyo-ogretim-gorevlilerinin-nihai-degerlendirme-sonuclari-385755" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">SHMYO Öğretim Görevlilerinin Nihai Değerlendirme Sonuçları</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">Eczane Hizmetleri ProgramıÖğretim Görevlilerinin Nihai Değerlendirme Sonuçları için TIKLAYINIZ. Ra</p>
                    <Link href="/page/shmyo-ogretim-gorevlilerinin-nihai-degerlendirme-sonuclari-385755" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">01</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/mmf-arastirma-gorevlisi-nihai-degerlendirme-sonuclari-828665" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">MMF AraştırmLink Görevlisi Nihai Değerlendirme Sonuçları</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400">(2024 Proje Yılı) Erasmus İngilizce Yeterlilik Sınavı sonuçları güncellendi. Sonucunuzu görmek için tıklayınız.</p>
                    <Link href="/page/mmf-arastirma-gorevlisi-nihai-degerlendirme-sonuclari-828665" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">31</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/sivil-havacilik-yuksekokulu-arastirma-gorevlisi-nihai-degerlendirme-sonucu-497105" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Sivil Havacılık Yüksekokulu AraştırmLink Görevlisi Nihai Değerlendirme Sonucu</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400"> Fizyoterapi ve Rehabilitasyon Bölümü AraştırmLink Görevlisi Ön DeğerlendirmeSonuçları için TIKLAYINIZ. Hemşirelik Bölümü AraştırmLink Görevlisi Ön Değerlendirme için </p>
                    <Link href="/page/sivil-havacilik-yuksekokulu-arastirma-gorevlisi-nihai-degerlendirme-sonucu-497105" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section aria-label="news" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Haberler</h1>
                <Link href="news" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="newsContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="relative">
                  <Link href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Latest update v2.3</Link>
                  </h2>
                  <Link href="news/latest-update-v2-3-980345" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/03ea3edb-bcab-4393-8e0c-cc108f881b8f.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">17/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="line-clamp-2 hover:underline">15 Temmuz’un 8. YılındLink Demokrasi ve Birlik Vurgusu Paneli</Link>
                  </h2>
                  <Link href="news/15-temmuz-un-8--yilinda-demokrasi-ve-birlik-vurgusu-paneli-100576" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/84c5bc24-7003-4168-84eb-1c6e52153b72.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">16/07/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Yunanistan'dLink Yeni Erasmus Anlaşması</Link>
                  </h2>
                  <Link href="news/yunanistan-da-yeni-erasmus-anlasmasi-715854" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
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
                    <Link href="apply" rel="noopener noreferrer" className="text-sm font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Apply Nedir?</Link>
                    <div className="border-r border-gray-300 dark:border-neutral-700 h-10"></div>
                    <Link href="apply" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline"> Başvuru Yap <svg width="7" viewBox="0 0 6 6" height="7" aria-hidden="true">
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
          <section aria-label="/page" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Etkinlikler</h1>
                <Link href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="/pageContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Temmuz</div>
                    <div className="text-right text-4xl font-bold">21</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/test-520360" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">test</h2>
                    </Link>
                    <Link href="/page/test-520360" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">02</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/denim-sanati-ile-surdurulebilir-sanatin-gucu-821855" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Denim Sanatı ile Sürdürülebilir Sanatın Gücü</h2>
                    </Link>
                    <Link href="/page/denim-sanati-ile-surdurulebilir-sanatin-gucu-821855" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">01</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/surdurulebilir-tesis-yonetimi-zirvesi-227971" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Sürdürülebilir Tesis Yönetimi Zirvesi</h2>
                    </Link>
                    <Link href="/page/surdurulebilir-tesis-yonetimi-zirvesi-227971" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">31</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/bagimlilikla-mucadele-ve-yedam-404169" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">BağımlılıklLink Mücadele ve Yedam</h2>
                    </Link>
                    <Link href="/page/bagimlilikla-mucadele-ve-yedam-404169" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">29</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/dijital-genc-yapay-zeka-ekosistemi-tanisma-toplantisi-194864" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">Dijital Genç Yapay ZekLink Ekosistemi TanışmLink Toplantısı</h2>
                    </Link>
                    <Link href="/page/dijital-genc-yapay-zeka-ekosistemi-tanisma-toplantisi-194864" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
                <article className="flex">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">27</div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/page/ybs-summit-2024-269375" rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">YBS SUMMIT 2024</h2>
                    </Link>
                    <Link href="/page/ybs-summit-2024-269375" rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section aria-label="/page" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Araştırmalar</h1>
                <Link href="/page" rel="noopener noreferrer" className="inline-flex items-center font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Tümünü gör</Link>
              </div>
              <div id="/pageContent" className="grid gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                <article className="relative">
                  <Link href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">02/06/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Doç. Dr. Orhan Dragas’ın makalesi yayımlandı</Link>
                  </h2>
                  <Link href="/page/doc-dr-orhan-dragasin-makalesi-yayimlandi-109307" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">01/06/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Meme Kanserinde Erken Teşhis Projesi</Link>
                  </h2>
                  <Link href="/page/meme-kanserinde-erken-teshis-projesi-959413" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
                <article className="relative">
                  <Link href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="flex justify-end">
                  <Image src="/post/8cd3ff97-352a-4e9a-a891-1eb0b46f1d45.jpg" className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                  <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">31/05/2024</div>
                  </Link>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="line-clamp-2 hover:underline">Nişantaşı Üniversitesi ve SankarLink İş Birliği ile Fonksiyonel GranolLink Projesi HayatLink Geçti</Link>
                  </h2>
                  <Link href="/page/nisantasi-universitesi-ve-sankara-is-birligi-ile-fonksiyonel-granola-projesi-hayata-gecti-439749" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
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
        </div> 
}