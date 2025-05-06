"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  image: string;
  category: string;
  detailed_description: string;
}

interface ProductClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductClient({ product, relatedProducts }: ProductClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    
    setAddedToCart(true);
    
    // Reset added message after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="md:w-1/2">
          <Link href="/shop" className="text-indigo-600 hover:text-indigo-700 mb-6 inline-block">
            &larr; Back to Shop
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 text-sm mr-1">★★★★★</span>
            <span className="text-sm text-gray-600">(12 reviews)</span>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="ml-3 text-lg text-gray-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-8">
            <span className="mr-4 text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 mb-4"
            onClick={handleAddToCart}
          >
            {addedToCart ? "Added to Cart!" : "Add to Cart"}
          </button>
          
          {/* Buy Now Button */}
          <Link 
            href="/cart" 
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-md transition duration-300 block text-center"
          >
            Buy Now
          </Link>
          
          {/* Added to Cart Message */}
          {addedToCart && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
              Item added to your cart!
            </div>
          )}
        </div>
      </div>
      
      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h2>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: product.detailed_description }}
        />
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-600">${relatedProduct.price.toFixed(2)}</span>
                  <Link
                    href={`/product/${relatedProduct.id}`}
                    className="text-indigo-600 hover:text-indigo-700 text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 