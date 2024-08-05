export default function page({ params }: { params : { adaySlug : string }}) {
  return (
    <div>{params?.adaySlug}</div>
  )
}
