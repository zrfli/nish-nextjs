"use server";

import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();

export default async function news({ params } : { params: { newsSlug : any }}) {
  /*const post = {
    title: params.newsSlug,
    createdAt: 1722181361,
    content: `<p>${params.newsSlug}</p>`
  }
   const post = await prisma.post.findFirst({
    where: {
      slug: params.newsSlug, 
    },
    select: {
      title: true,
      slug: true,
      content: true,
      createdAt: true,
    },
  });

  if (!post) { return notFound(); }
  */
  return  <>
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/icheader-bg.jpg')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">{params.newsSlug ?? 'Error'}</h1>
                    <p className="font-normal text-gray-300">{params.newsSlug ?? 'Error'}</p>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                  <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">{params.newsSlug ?? 'Error'}</div>
                </div>
            </section>
          </>
}