import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className="bg-slate-900 text-white w-64 min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/add-product">Add Product</Link></li>
      </ul>
    </div>
  );
}
