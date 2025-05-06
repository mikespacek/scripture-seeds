"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

// Sample product data (same as in shop page)
const products = [
  {
    id: "365-scripture-journal",
    name: "365 Scriptures + Prayers for Your Baby's First Year Journal",
    description: "Guide your baby's spiritual journey from day one with this beautiful journal featuring daily scriptures, prayers, and space to record precious memories.",
    price: 29.99,
    oldPrice: 34.99,
    image: "/images/365-scripture-journal.jpg",
    category: "journals",
    detailed_description: `
      <p>The "365 Scriptures + Prayers for Your Baby's First Year Journal" is a treasured keepsake designed to help you document your baby's first year through the lens of faith.</p>
      
      <p>Each day features a carefully selected scripture verse and a corresponding prayer specifically chosen to bless your child. There's also space to record milestones, memories, and special moments as your baby grows.</p>
      
      <h3>Features:</h3>
      <ul>
        <li>Hardcover, lay-flat binding for ease of use</li>
        <li>365 daily scriptures from various books of the Bible</li>
        <li>Thoughtful prayers for your baby's spiritual development</li>
        <li>Space for recording milestones and memories</li>
        <li>Beautiful illustrations and design elements</li>
        <li>Ribbon bookmark to keep your place</li>
        <li>High-quality paper that prevents ink bleed-through</li>
      </ul>
      
      <p>This journal makes a perfect baby shower gift, baptism present, or special keepsake for Christian parents wanting to nurture their child's faith from the very beginning.</p>
      
      <p>Dimensions: 8.5" x 11"</p>
      <p>Pages: 380</p>
    `,
  },
  {
    id: "scripture-lullabies-ebook",
    name: "Scripture Lullabies eBook",
    description: "A collection of gentle lullabies with embedded scripture verses to sing over your baby at bedtime.",
    price: 14.99,
    oldPrice: null,
    image: "/images/scripture-lullabies-ebook.jpg",
    category: "ebooks",
    detailed_description: `
      <p>The "Scripture Lullabies eBook" is a collection of gentle lullabies that incorporate Bible verses, designed to help you sing God's Word over your baby at bedtime.</p>
      
      <p>Each lullaby is set to a simple, soothing melody that's easy to learn and sing. The accompanying eBook includes sheet music, lyrics, and the scripture reference for each song.</p>
      
      <h3>Features:</h3>
      <ul>
        <li>20 original lullabies based on scripture</li>
        <li>Simple melodies suitable for any singing ability</li>
        <li>Digital sheet music and lyrics</li>
        <li>Scripture references for each lullaby</li>
        <li>Digital download - accessible immediately after purchase</li>
      </ul>
      
      <p>This eBook is perfect for parents wanting to incorporate scripture into their bedtime routine in a musical way.</p>
    `,
  },
  // Rest of the products omitted for brevity
];

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  if (!product) {
    notFound();
  }

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
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
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