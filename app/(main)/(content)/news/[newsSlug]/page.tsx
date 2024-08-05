"use server";

import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { readReplicas } from '@prisma/extension-read-replicas';
import { withAccelerate } from '@prisma/extension-accelerate'
import createLogs from '@/components/logs';

const replicaClient = new PrismaClient({ datasourceUrl: process.env.DATABASE_REPLICA_URL });
const prisma = new PrismaClient().$extends(readReplicas({replicas: [replicaClient]}, withAccelerate()));

export default async function news({ params }: { params: { newsSlug: string } }) {
  let key =  parseInt(params.newsSlug) ?? 1;
  key = 1;
  let posts;

  try {
    posts = await prisma.$primary().user.findFirst({
      where:{
        id: key
      },
    });
  } catch (e) {
    createLogs('Prisma','Primary database query failed');

    try {
      posts = await prisma.$replica().user.findFirst({
        where:{
          id: key
        }
      });
    } catch (e) {
      createLogs('Prisma','Replica database query failed');
      return notFound();
    }
  }

  await prisma.$disconnect()

  if (!posts) { return notFound(); }
  
  console.table(posts);
  
  return (
    <>
      <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/icheader-bg.jpg')]">
        <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
          <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">{params.newsSlug ?? 'Error'}</h1>
          <p className="font-normal text-gray-300">{params.newsSlug ?? 'Error'}</p>
        </div>
      </section>
      <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
        <div className="w-full py-6">
          <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">
              <p>{posts.email}</p>
              <p>{posts.name}</p>
          </div>
        </div>
      </section>
    </>
  );
}
