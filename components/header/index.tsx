import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Header(){
    return (<header className="fixed top-0 z-50 w-full">
                <nav className="bg-white border-b border-gray-400 dark:border-neutral-700 dark:bg-black px-4 lg:px-6 py-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto">
                        <Link href="/" rel="noopener noreferrer" aria-hidden="true">
                            <Image className="fill-black dark:fill-white h-auto w-28 md:w-32" src={Logo} height={500} width={500} alt="" />
                        </Link>
                        <div className="flex items-center lg:order-2 space-x-2">
                            <div>
                                <button type="button" aria-hidden="true"  data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800/80">
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
                            <div className="hidden">
                                <button id="theme-toggle" aria-hidden="true"  type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800/80 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586"/></svg>
                                    <svg id="theme-toggle-light-icon" className="hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="lg:hidden" data-collapse-toggle="header-menu">
                                <button aria-hidden="true"  type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800/80" aria-controls="header-menu" aria-expanded="false">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>                
                                </button>
                            </div>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="header-menu">
                            <ul id="headerMenuContent" className="flex flex-col mt-4 font-medium gap-1 lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                                <li>
                                    <span className="block w-16 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>);
}