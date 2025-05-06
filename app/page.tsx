import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Clock } from "lucide-react";

export default function Home() {
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 slide-up">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#e6d5d2] text-[#ba8f95] font-medium text-sm mb-6">
                Nurturing Faith From Day One ✨
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
                Daily Scripture & Prayer <span className="text-[#ba8f95]">for Your Little One</span>
              </h1>
              <p className="text-lg text-[#8a7370] mb-8 max-w-lg">
                Create beautiful memories of faith with our thoughtfully designed biblical journals. Perfect for documenting your baby's spiritual journey from their very first days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/shop" 
                  className="btn-primary flex items-center gap-2 bg-[#ba8f95] hover:bg-[#a27a80] text-white px-8 py-3 rounded-full transition-all"
                >
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/about" 
                  className="btn-secondary border-2 border-[#ba8f95] text-[#ba8f95] hover:bg-[#ba8f95] hover:text-white px-8 py-3 rounded-full transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 slide-up stagger-1">
              <div className="relative">
                {/* Decorative shapes */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e6d5d2] rounded-full z-0 animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#f5ebe0] rounded-full z-0 animate-float-delayed"></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 text-[#ba8f95]">
                  <Heart className="w-full h-full fill-current" />
                </div>
                
                {/* Main image container */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/images/baby-journal-hero.jpg"
                    alt="Scripture and Prayer Journal for Babies"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#ba8f95]" />
                      <span className="text-sm font-medium text-[#443736]">365 Days of Blessings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-[#f5ebe0]">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#ba8f95] font-medium text-sm mb-4">
              Bestseller
            </span>
            <h2 className="heading-lg max-w-2xl mx-auto">Our Signature Journal</h2>
            <p className="text-[#8a7370] max-w-2xl mx-auto">
              Designed with love to help you document your baby's spiritual journey through their first year.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto slide-up stagger-1">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <div className="absolute top-4 left-4 bg-[#ba8f95] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Most Popular
                </div>
            <Image
                  src="/images/365-scripture-journal.jpg"
                  alt="365 Scriptures + Prayers for Your Baby's First Year Journal"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#443736] mb-3">
                  365 Scriptures + Prayers for Your Baby's First Year
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-[#e2be9a]">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm text-[#8a7370] ml-2">(24 reviews)</span>
                </div>
                <p className="text-[#8a7370] mb-6">
                  Guide your baby's spiritual journey from day one with this beautiful journal featuring daily scriptures, prayers, and space to record precious memories.
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-[#ba8f95]">$29.99</span>
                  <span className="ml-2 text-[#8a7370] line-through">$34.99</span>
                  <span className="ml-3 bg-[#f5ebe0] text-[#ba8f95] text-xs font-bold px-2 py-1 rounded-full">
                    SAVE 15%
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/product/365-scripture-journal"
                    className="btn-primary flex-1 text-center"
                  >
                    View Details
                  </Link>
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    <Heart className="h-4 w-4" /> Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-[#f5ebe0] text-[#ba8f95] font-medium text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-lg">Thoughtfully Designed with Love</h2>
            <p className="text-[#8a7370] max-w-2xl mx-auto">
              Our products are created with intention to nurture your child's faith journey from the very beginning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ba8f95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Biblical Foundation</h3>
              <p className="text-[#8a7370]">
                All our products are rooted in Scripture, providing a solid spiritual foundation for your child's growth and development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ba8f95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Beautifully Crafted</h3>
              <p className="text-[#8a7370]">
                Created with love and care to be beautiful, practical, and meaningful for both parents and babies to cherish for years.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-3">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ba8f95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Daily Spiritual Growth</h3>
              <p className="text-[#8a7370]">
                Our resources encourage consistent spiritual nourishment and create special moments of connection with your little one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f5ebe0]">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#ba8f95] font-medium text-sm mb-4">
              Testimonials
            </span>
            <h2 className="heading-lg">What Parents Are Saying</h2>
            <p className="text-[#8a7370] max-w-2xl mx-auto">
              Hear from families who have made our journals part of their daily routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md slide-up stagger-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#ba8f95] font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#443736]">Sarah M.</h4>
                  <div className="flex text-[#e2be9a]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-[#8a7370] italic mb-4">
                "This journal has become a treasured part of our evening routine. I love knowing that my daughter is being surrounded by Scripture from her earliest days."
              </p>
              <div className="flex items-center text-xs text-[#8a7370]">
                <Clock className="h-3 w-3 mr-1" /> Verified Purchase
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md slide-up stagger-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#ba8f95] font-bold">MT</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#443736]">Michael T.</h4>
                  <div className="flex text-[#e2be9a]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-[#8a7370] italic mb-4">
                "The quality of this journal is amazing. It's beautiful, thoughtfully laid out, and has become a keepsake I'll cherish forever."
              </p>
              <div className="flex items-center text-xs text-[#8a7370]">
                <Clock className="h-3 w-3 mr-1" /> Verified Purchase
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md slide-up stagger-3">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#ba8f95] font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#443736]">Rebecca J.</h4>
                  <div className="flex text-[#e2be9a]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-[#8a7370] italic mb-4">
                "We received this as a gift at our baby shower and it's been such a blessing. I love having Scripture prompts each day to pray over our son."
              </p>
              <div className="flex items-center text-xs text-[#8a7370]">
                <Clock className="h-3 w-3 mr-1" /> Verified Purchase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f5ebe0] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#e6d5d2] rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 text-center max-w-4xl mx-auto slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#443736] mb-6">Start Your Baby's Spiritual Journey Today</h2>
            <p className="text-lg text-[#8a7370] mb-8 max-w-2xl mx-auto">
              Begin laying a foundation of faith with our Scripture-filled resources designed especially for your little one.
            </p>
            <Link 
              href="/shop" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Browse Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
