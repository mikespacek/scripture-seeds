"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Star, ShoppingBag, ArrowLeft, Heart } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = cartTotal + shipping;

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
              Your Shopping Cart
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
              Review Your <span className="text-[#ba8f95]">Selections</span>
            </h1>
            {cartItems.length === 0 && (
              <p className="text-lg text-[#8a7370] mb-8">
                Your cart is empty. Let's find some beautiful resources for your little one's faith journey.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-[#ba8f95]" />
              </div>
              <Link
                href="/shop"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Shopping <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="divide-y divide-[#e6d5d2]">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex items-center gap-6">
                          <div className="flex-shrink-0 w-24 h-24 relative rounded-xl overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              style={{ objectFit: "cover" }}
                              className="rounded-xl"
                            />
                          </div>
                          <div className="flex-grow">
                            <Link
                              href={`/product/${item.id}`}
                              className="text-lg font-medium text-[#443736] hover:text-[#ba8f95] transition-colors"
                            >
                              {item.name}
                            </Link>
                            <div className="mt-2 text-[#8a7370]">${item.price.toFixed(2)}</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-[#e6d5d2] rounded-full overflow-hidden bg-white">
                              <button
                                className="px-4 py-2 text-[#8a7370] hover:bg-[#f5ebe0] transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-4 py-2 text-[#443736]">{item.quantity}</span>
                              <button
                                className="px-4 py-2 text-[#8a7370] hover:bg-[#f5ebe0] transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="text-[#ba8f95] hover:text-[#8e5f66] transition-colors"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-[#ba8f95] hover:text-[#8e5f66] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#443736] mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#8a7370]">Subtotal</span>
                      <span className="text-[#443736] font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8a7370]">Shipping</span>
                      <span className="text-[#443736] font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-[#e6d5d2] pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#443736] font-bold">Total</span>
                        <span className="text-[#ba8f95] text-xl font-bold">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-[#ba8f95] hover:bg-[#8e5f66] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 mt-8">
                    Proceed to Checkout
                  </button>
                  <p className="text-center text-[#8a7370] text-sm mt-4">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 