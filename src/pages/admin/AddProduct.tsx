import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // ✅ Named import

import { useNavigate } from 'react-router-dom';


interface JwtPayload {
  exp: number;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
}

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState(['']);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (index: number, value: string) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const addImageField = () => setImages([...images, '']);

  const removeImageField = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = productName && price && !isNaN(parseFloat(price));
    if (!isFormValid) {
      alert('Please fill in all required fields (Product Name and Price).');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No authentication token found. Please log in.');
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

      const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      if (role !== 'Admin') {
        alert('Only admins can add products.');
        navigate('/login');
        return;
      }
    } catch (err) {
      console.error('Invalid token:', err);
      alert('Invalid authentication token. Please log in again.');
      navigate('/login');
      return;
    }

    const product = {
      productName,
      price: parseFloat(price),
      description,
      quantity,
      imageUrl: images[0] || '',
      videoUrl,
    };

    try {
      setLoading(true);
      const response = await axios.post('https://localhost:7284/api/product', product, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      alert('Product added successfully!');
      console.log(response.data);

      // Reset form
      setProductName('');
      setPrice('');
      setDescription('');
      setQuantity(1);
      setImages(['']);
      setVideoUrl('');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err.response?.data || err.message);
        alert(`Failed to add product: ${err.response?.data?.detail || err.message}`);
      } else {
        console.error('Unknown error:', err);
        alert('Something went wrong while adding the product.');
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = productName && price && !isNaN(parseFloat(price));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Images</label>
          {images.map((url, index) => (
            <div key={index} className="flex items-center gap-2 mt-1">
              <input
                type="url"
                value={url}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder="Image URL"
                className="block w-full border-gray-300 rounded-md shadow-sm"
              />
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-blue-500 text-sm mt-2"
          >
            + Add More Images
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Video (URL)</label>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {videoUrl && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Preview:</p>
              <video src={videoUrl} controls className="w-full mt-1 rounded" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 ${
            !isFormValid || loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}
