export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="">Products {id}</div>;
}
