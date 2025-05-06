"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image 
                src="/images/logo-icon.png" 
                alt="Scripture Seeds Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-serif font-bold text-[#443736]">
              Scripture <span className="text-[#ba8f95]">Seeds</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-[#443736] hover:text-[#ba8f95] transition-colors relative p-2">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ba8f95] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden text-[#443736]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-[fadeIn_0.3s_ease-in-out]">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-[#f5ebe0]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-[#f5ebe0]"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-[#f5ebe0]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-[#443736] hover:text-[#ba8f95] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-[#f5ebe0]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 