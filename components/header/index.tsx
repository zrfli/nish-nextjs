"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { ThemeToggle } from "../theme-toggle";

export default function Header(){
    return (<header className="fixed top-0 z-50 w-full">
                <nav className="bg-white border-b border-gray-400 dark:border-neutral-700 dark:bg-black px-4 lg:px-6 py-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto">
                        <Link href="/" rel="noopener noreferrer">
                            <Image priority={true} className="fill-black dark:fill-white dark:invert h-auto w-28 md:w-32" src={Logo} height={500} width={500} alt="" />
                        </Link>
                        <div className="flex items-center lg:order-2 space-x-2">
                            <div>
                                <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800/80">
                                    <svg className="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use y="420"></use><use y="840"></use><use y="1260"></use></g><use y="1680"></use></g><use x="247" y="210"></use></g><use x="494"></use></g><use x="988"></use><use x="1976"></use><use x="2470"></use></g></svg>
                                </button>
                                <div className="hidden z-50 my-4 text-base list-none bg-white rounded dark:bg-neutral-800 shadow" id="language-dropdown">
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-900 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" role="menuitem">
                                                <div className="inline-flex items-center">English (US)</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-900 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" role="menuitem">
                                                <div className="inline-flex items-center">English (US)</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:hidden" data-collapse-toggle="header-menu">
                                <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800/80" aria-controls="header-menu" aria-expanded="false">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clipRule="evenodd"/></svg>                
                                </button>
                            </div>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="header-menu">
                            <ul id="headerMenuContent" className="flex flex-col mt-4 font-medium gap-1 lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="/page/kurumsal" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        Kurumsal
                                        <svg className="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>                                              
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/akademik" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        Akademik
                                        <svg className="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>                                              
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/neotech-kampus" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        NeoTech Kampüs
                                        <svg className="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>                                              
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/ogrenci" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        Öğrenci
                                        <svg className="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>                                              
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/International" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        International
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/aday-ogrenci" prefetch={true} className="flex justify-between border-b items-center py-2 lg:py-0 w-full lg:w-auto border-gray-300 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-600 dark:text-gray-300 lg:dark:text-white dark:hover:text-gray-300 dark:hover:bg-neutral-800/80 dark:border-neutral-700 hover:underline">
                                        Aday Öğrenci
                                        <svg className="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>                                              
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>);
}
