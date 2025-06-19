import React from 'react';
import { ShoppingBag, Layers, Tag } from 'lucide-react';
import { products, categories } from '../../data/products'; // adjust the path if needed

export default function Dashboard() {
  const totalProducts = products.length;
  const totalCategories = categories.length;
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to the admin dashboard. Use the sidebar to manage the store.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Products */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
          <ShoppingBag className="text-orange-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
            <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
          </div>
        </div>

        {/* Total Categories */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
          <Layers className="text-blue-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
            <p className="text-2xl font-bold text-gray-900">{totalCategories}</p>
          </div>
        </div>

        {/* Total Price of All Products */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
          <Tag className="text-green-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Value</h3>
            <p className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
