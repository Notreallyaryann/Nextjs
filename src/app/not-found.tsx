"use client";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        The Page you are looking for does not exist
      </h1>
      <button
        onClick={() => router.push("/")}
        className="bg-black text-stone-200 p-5 rounded hover:bg-gray-800"
      >
        Go to Home Page
      </button>
    </div>
  );
}
