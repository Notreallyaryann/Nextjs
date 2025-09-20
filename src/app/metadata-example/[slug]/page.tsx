import { Metadata } from "next";

const dummyData = {
  "1": { title: "one" },
  "2": { title: "two" },
  "3": { title: "three" },
};

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = dummyData[slug as keyof typeof dummyData];

  return {
    title: data.title,
    description: data.title,
  };
}

// Page component
export default async function DynamicMetaDataExample({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; 
  const slug = resolvedParams.slug;
  const data = dummyData[slug as keyof typeof dummyData];

  return (
    <div className="p-4">
      <h1>{data?.title}</h1>
      <p>Slug: {slug}</p> {/* no join, just the string */}
    </div>
  );
}


