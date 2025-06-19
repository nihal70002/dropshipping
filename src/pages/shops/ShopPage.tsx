import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  productId: number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ShopPages() {
  const { shopId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:7284/api/Products/shop/${shopId}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [shopId]);

  if (loading) return <p className="p-6">Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">Welcome to Shop {shopId}!</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.productId} className="p-4 border rounded shadow">
              <img src={product.imageUrl} alt={product.productName} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.productName}</h2>
              <p className="text-gray-600 mb-1">{product.description}</p>
              <p className="text-orange-600 font-bold">₹{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this shop.</p>
      )}
    </div>
  );
}
