import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductClient from "./product-client";

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

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} relatedProducts={products.filter(p => p.id !== params.id).slice(0, 4)} />;
} 