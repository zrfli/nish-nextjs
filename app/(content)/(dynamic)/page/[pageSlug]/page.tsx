export default function Page({ params } : { params : { pageSlug : any }}) {
    return <div className="text-white text-4xl font-medium">{params.pageSlug}</div>;
}