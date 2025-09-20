import React from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

interface ProductsResponse {
    products: Product[];
    total: number;
}

async function getProducts(): Promise<ProductsResponse> {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}

async function ServerSideFetchExample() {
    const products = await getProducts();

    return (
        <div>
            <h1>Server Side Data Fetching</h1>
            <h3>{products?.total} products available</h3>
            {products?.products?.map(product => (
                <div key={product.id} style={{border: '1px solid #ccc', padding: '10px', margin: '5px 0'}}>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            ))}
        </div>
    );
}

export default ServerSideFetchExample;
