import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client

  return  <div className="mt-20 lg:mt-24">
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b border-gray-700 bg-[url('/content/ebbb311c-1696-44ac-838a-6194dd216016.webp')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">Title</h1>
                    <p className="font-normal text-gray-300">Date</p>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                  <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">HTML</div>
                </div>
            </section>
          </div>
}
