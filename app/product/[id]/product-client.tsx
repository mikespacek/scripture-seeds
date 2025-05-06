"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { Star, Heart, ShoppingBag } from "lucide-react";

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-[#fff9f3]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-16 h-16 text-[#ffd700] animate-pulse">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-20 left-10 w-12 h-12 text-[#ffd700] animate-pulse delay-300">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[150px]">
          <div className="w-full h-full rounded-t-full bg-gradient-to-r from-[#87CEEB] via-[#e6d5d2] to-[#ba8f95] opacity-20"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto slide-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#e6d5d2] text-[#ba8f95] font-medium text-sm mb-6">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-[#ba8f95] hover:text-[#8e5f66] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Shop
                </Link>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="flex text-[#ffd700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[#8a7370] ml-2">(12 reviews)</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-[#ba8f95]">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-3 text-lg text-[#8a7370] line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <p className="text-[#8a7370] mb-8 text-lg">{product.description}</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center mb-8">
                  <span className="mr-4 text-[#443736] font-medium">Quantity:</span>
                  <div className="flex items-center border border-[#e6d5d2] rounded-full overflow-hidden bg-white">
                    <button
                      className="px-4 py-2 text-[#8a7370] hover:bg-[#f5ebe0] transition-colors"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-[#443736]">{quantity}</span>
                    <button
                      className="px-4 py-2 text-[#8a7370] hover:bg-[#f5ebe0] transition-colors"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  className="w-full bg-[#ba8f95] hover:bg-[#8e5f66] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 mb-4 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </button>
                
                {/* Buy Now Button */}
                <Link 
                  href="/cart" 
                  className="w-full bg-white border-2 border-[#ba8f95] text-[#ba8f95] hover:bg-[#ba8f95] hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 block text-center"
                >
                  Buy Now
                </Link>
                
                {/* Added to Cart Message */}
                {addedToCart && (
                  <div className="mt-4 p-3 bg-[#f5ebe0] border border-[#ba8f95] text-[#443736] rounded-xl text-center">
                    Item added to your cart! ✨
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-[#443736] mb-6">Product Description</h2>
              <div 
                className="prose max-w-none text-[#8a7370]"
                dangerouslySetInnerHTML={{ __html: product.detailed_description }}
              />
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-[#443736] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md">
                      <Heart className="h-4 w-4 text-[#ba8f95]" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-[#443736] mb-2 line-clamp-2 hover:text-[#ba8f95] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#ba8f95]">${relatedProduct.price.toFixed(2)}</span>
                      <Link
                        href={`/product/${relatedProduct.id}`}
                        className="text-[#ba8f95] hover:text-[#8e5f66] text-sm font-medium"
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
      </section>
    </div>
  );
} 