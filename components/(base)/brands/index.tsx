
import Image from "next/image";

export default function Brands() {
  return  <section aria-label="brands" className="py-12">
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
              <Image src="/brands/1.png" className="w-24 md:h-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/2.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/3.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/4.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/5.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/6.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/7.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/8.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/10.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/12.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/14.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/15.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/18.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/19.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/23.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/27.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/29.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/35.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/39.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
            <li>
              <Image src="/brands/42.png" className="w-24 md:w-32 h-auto" alt="" width={128} height={90} priority={false} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</section>
}