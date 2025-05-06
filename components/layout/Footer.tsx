import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5ebe0] pt-16 pb-8">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#f5ebe0] rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
          <div className="absolute left-0 bottom-0 w-40 h-40 bg-[#e6d5d2] rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#443736]">Join Our Community</h3>
            <p className="text-[#8a7370] mb-8">
              Subscribe to receive updates, special offers, and scripture inspiration for your little one.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-xl border border-[#e6d5d2] focus:outline-none focus:ring-2 focus:ring-[#ba8f95]"
                required
              />
              <button 
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/images/logo-icon.png" 
                  alt="Scripture Seeds Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-serif font-bold text-[#443736]">
                Scripture <span className="text-[#ba8f95]">Seeds</span>
              </span>
            </div>
            <p className="text-[#8a7370] mb-6">
              Nurturing your baby's spiritual journey with biblical journals and resources designed with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Instagram className="h-5 w-5 text-[#ba8f95]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Facebook className="h-5 w-5 text-[#ba8f95]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                <Twitter className="h-5 w-5 text-[#ba8f95]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#443736] mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/journals" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Journals
                </Link>
              </li>
              <li>
                <Link href="/shop/ebooks" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  eBooks
                </Link>
              </li>
              <li>
                <Link href="/shop/cards" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Scripture Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#443736] mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#443736] mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e6d5d2] pt-8 text-center">
          <p className="text-[#8a7370]">&copy; {currentYear} Scripture Seeds. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link href="/terms" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
              Terms
            </Link>
            <span className="text-[#e6d5d2]">|</span>
            <Link href="/privacy" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
              Privacy
            </Link>
            <span className="text-[#e6d5d2]">|</span>
            <Link href="/sitemap" className="text-[#8a7370] hover:text-[#ba8f95] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 