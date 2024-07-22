export default function news({ params } : { params: { newsSlug : any}}) {
  return <div className="text-neutral-200">{params.newsSlug}</div>;
}