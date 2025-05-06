"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Filter, ChevronDown } from "lucide-react";

// Sample product data
const products = [
  {
    id: "365-scripture-journal",
    name: "365 Scriptures + Prayers for Your Baby's First Year Journal",
    description: "Guide your baby's spiritual journey from day one with this beautiful journal featuring daily scriptures, prayers, and space to record precious memories.",
    price: 29.99,
    oldPrice: 34.99,
    image: "/images/365-scripture-journal.jpg",
    category: "journals",
    featured: true,
    isNew: false,
  },
  {
    id: "scripture-lullabies-ebook",
    name: "Scripture Lullabies eBook",
    description: "A collection of gentle lullabies with embedded scripture verses to sing over your baby at bedtime.",
    price: 14.99,
    oldPrice: null,
    image: "/images/scripture-lullabies-ebook.jpg",
    category: "ebooks",
    featured: false,
    isNew: true,
  },
  {
    id: "baby-milestone-scripture-cards",
    name: "Baby Milestone Scripture Cards",
    description: "Celebrate your baby's milestones with these beautiful cards featuring relevant scripture verses for each special moment.",
    price: 19.99,
    oldPrice: 24.99,
    image: "/images/baby-milestone-cards.jpg",
    category: "cards",
    featured: false,
    isNew: false,
  },
  {
    id: "bedtime-bible-stories-ebook",
    name: "Bedtime Bible Stories eBook",
    description: "Simplified Bible stories perfect for reading to your little one before bedtime.",
    price: 12.99,
    oldPrice: null,
    image: "/images/bedtime-bible-stories.jpg",
    category: "ebooks",
    featured: false,
    isNew: true,
  },
  {
    id: "baby-prayer-journal",
    name: "Parent's Prayer Journal for Baby",
    description: "Record your prayers for your baby's future, spiritual growth, and character development.",
    price: 22.99,
    oldPrice: null,
    image: "/images/baby-prayer-journal.jpg",
    category: "journals",
    featured: true,
    isNew: false,
  },
  {
    id: "scripture-art-prints",
    name: "Scripture Art Prints for Nursery",
    description: "Beautiful watercolor art prints featuring scripture verses, perfect for decorating your baby's nursery.",
    price: 34.99,
    oldPrice: 39.99,
    image: "/images/scripture-art-prints.jpg",
    category: "decor",
    featured: false,
    isNew: false,
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "journals", name: "Journals" },
    { id: "ebooks", name: "eBooks" },
    { id: "cards", name: "Cards" },
    { id: "decor", name: "Decor" },
  ];
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="heading-lg">Our Collection</h1>
          <p className="text-[#8a7370] max-w-2xl mx-auto">
            Discover our thoughtfully designed biblical resources for your baby's spiritual journey.
          </p>
        </div>
        
        {/* Desktop Filter */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-[#ba8f95] text-white"
                    : "text-[#8a7370] hover:text-[#443736]"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Filter */}
        <div className="md:hidden mb-8">
          <button 
            className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-xl shadow-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-[#ba8f95] mr-2" />
              <span className="text-[#443736] font-medium">
                {categories.find(c => c.id === activeCategory)?.name}
              </span>
            </div>
            <ChevronDown className={`h-5 w-5 text-[#ba8f95] transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilters && (
            <div className="bg-white mt-2 rounded-xl shadow-md overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#f5ebe0] text-[#ba8f95]"
                      : "text-[#8a7370] hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowFilters(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="card group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-[#e2be9a] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    NEW
                  </div>
                )}
                {product.oldPrice && (
                  <div className="absolute top-4 right-4 bg-[#ba8f95] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    SALE
                  </div>
                )}
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Link 
                      href={`/product/${product.id}`}
                      className="bg-white p-3 rounded-full shadow-md hover:bg-[#f5ebe0] transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5 text-[#ba8f95]" />
                    </Link>
                    <button className="bg-white p-3 rounded-full shadow-md hover:bg-[#f5ebe0] transition-colors">
                      <Heart className="h-5 w-5 text-[#ba8f95]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs text-[#8a7370] uppercase tracking-wider">
                  {product.category}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#443736] mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-[#8a7370] mb-4 text-sm line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#ba8f95]">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-[#8a7370] line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/product/${product.id}`}
                    className="text-[#ba8f95] text-sm font-medium hover:underline"
                  >
                    View Details
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