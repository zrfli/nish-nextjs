"use client";

import { notFound } from "next/navigation";

export default async function announcementsSlug({ params }: { params: { announcementsSlug: number } }) {
    const data = await fetch("https://api.vercel.app/blog/"+ params.announcementsSlug);
    const res = await data.json();

    console.table(res);

    if(!res || res.error) { return notFound(); }

    return (
        <div className="text-neutral-800">
            <h1>{res.title}</h1>
            <p>{res.content}</p>
            <p><strong>Author:</strong> {res.author}</p>
            <p><strong>Date:</strong> {res.date}</p>
            <p><strong>Category:</strong> {res.category}</p>
        </div>
    );
}
