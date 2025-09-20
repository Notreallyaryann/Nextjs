async function getProducts() {
  // dummy error
  const shouldError = Math.random() > 0.5;

  if (shouldError) {
    throw new Error("Failed to Fetch Products");
  }

  return [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
}

export default async function ErrorExample() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1>Product List</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
}

