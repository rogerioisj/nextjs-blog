import ListComponent from "@/app/components/ListComponent";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  return (
    <ListComponent articles={articles}/>
  );
}
