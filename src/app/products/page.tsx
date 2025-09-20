"use client";

import Link from "next/link";

function Products() {
  const products = [
    {
      id: "1",
      name: "Mobile",
      price: 15000,
    },
    {
      id: "2",
      name: "Laptop",
      price: 55000,
    },
    {
      id: "3",
      name: "Tablet",
      price: 20000,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black bg-amber-200">Products</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
            <Link href={`/products/${product.id}`}>
            View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
