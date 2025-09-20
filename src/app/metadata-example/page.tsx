import { Metadata } from "next";
import Link from "next/link";


//helps SEO and improves how your page is displayed when shared on social media, search engines, and browser tabs


export const metadata:Metadata={
    title: "MetadataExample",
    description:"This is my example of writing  stt metadata"
}





export default function MetadataExample() {
  const examples = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
  ];

  return (
    <div>
      <h1>Metadata Examples</h1>
      <ul>
        {examples.map((item) => (
          <li key={item.id}>
            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
