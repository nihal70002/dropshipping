import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Earbuds',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    category: 'Electronics',
    description: 'Premium wireless earbuds with noise cancellation and superior sound quality.',
    features: ['Noise Cancellation', '24H Battery Life', 'IPX7 Waterproof', 'Touch Controls'],
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 129.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-Day Battery', 'Water Resistant'],
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '3',
    name: 'Portable Phone Charger',
    price: 24.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg',
    category: 'Electronics',
    description: 'High-capacity power bank with fast charging technology.',
    features: ['20000mAh Capacity', 'Fast Charging', 'Multiple Ports', 'LED Display'],
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'LED Desk Lamp',
    price: 34.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'Home & Office',
    description: 'Adjustable LED desk lamp with multiple brightness levels.',
    features: ['Touch Control', 'USB Charging Port', 'Eye Protection', 'Foldable Design'],
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    price: 189.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/586960/pexels-photo-586960.jpeg',
    category: 'Home & Office',
    description: 'Comfortable ergonomic chair with lumbar support and adjustable height.',
    features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '360° Swivel'],
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '6',
    name: 'Wireless Phone Stand',
    price: 19.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/163047/pexels-photo-163047.jpeg',
    category: 'Electronics',
    description: 'Adjustable wireless charging stand for smartphones.',
    features: ['Wireless Charging', 'Adjustable Angle', 'Anti-Slip Base', 'Fast Charging'],
    inStock: true,
    rating: 4.4,
    reviews: 91
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360-degree sound.',
    features: ['360° Sound', '12H Battery', 'Waterproof', 'Voice Assistant'],
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: '8',
    name: 'Standing Desk Converter',
    price: 149.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    category: 'Home & Office',
    description: 'Adjustable standing desk converter for healthier work habits.',
    features: ['Height Adjustable', 'Dual Monitor Support', 'Easy Setup', 'Sturdy Design'],
    inStock: true,
    rating: 4.7,
    reviews: 78
  }
];

export const categories = [
  'All Products',
  'Electronics',
  'Home & Office',
  'Health & Fitness',
  'Accessories'
];