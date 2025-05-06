import Image from "next/image";
import { Star, Heart } from "lucide-react";

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
              Nurturing Faith <span className="text-[#ba8f95]">From Day One</span>
            </h1>
            <p className="text-lg text-[#8a7370] mb-8">
              Scripture Seeds was born from a mother's heart, seeking to create beautiful ways to share God's Word with little ones.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e6d5d2] rounded-full z-0 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#f5ebe0] rounded-full z-0 animate-float-delayed"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/about-founder.jpg"
                  alt="Founder with Bible journal"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 slide-up">
              <h2 className="text-3xl font-serif font-bold text-[#443736] mb-6">Our Journey</h2>
              <p className="text-[#8a7370] mb-4">
                Scripture Seeds was born from a personal journey. As a new parent, I was eager to instill biblical values in my child 
                from the earliest days, but struggled to find resources that were both beautiful and deeply rooted in Scripture.
              </p>
              <p className="text-[#8a7370] mb-4">
                After creating a simple scripture journal for my own baby, friends and family began requesting copies. 
                What started as a personal project quickly blossomed into a mission to help parents nurture their children's 
                spiritual growth from day one.
              </p>
              <p className="text-[#8a7370]">
                Today, Scripture Seeds offers a range of thoughtfully designed journals, eBooks, and resources that help 
                families weave God's Word into their daily routines and create meaningful spiritual traditions with their little ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#f5ebe0]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto slide-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-[#ba8f95] font-medium text-sm mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#443736] mb-6">Creating a Legacy of Faith</h2>
            <p className="text-[#8a7370] text-lg italic">
              "To equip parents with beautiful, Scripture-based resources that help them nurture their children's 
              spiritual foundation from birth, creating a legacy of faith that lasts a lifetime."
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#e6d5d2] text-[#ba8f95] font-medium text-sm mb-6">
              Our Values
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#443736] mb-6">What Guides Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ba8f95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Scripture First</h3>
              <p className="text-[#8a7370]">
                All our products are firmly rooted in biblical truth, accurately representing God's Word in an age-appropriate way.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-[#ba8f95]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Quality & Beauty</h3>
              <p className="text-[#8a7370]">
                We create products that are both meaningful and beautiful, designed to be cherished keepsakes for years to come.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center slide-up stagger-3">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ba8f95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#443736] mb-4">Family Support</h3>
              <p className="text-[#8a7370]">
                We aim to equip and encourage parents in their crucial role as spiritual nurturers of the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-[#f5ebe0]">
        <div className="container">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Founder of Scripture Seeds"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#443736] mb-2">Sarah Johnson</h3>
                <p className="text-[#ba8f95] italic mb-4">Founder & Creator</p>
                <p className="text-[#8a7370]">
                  With a background in theology and a passion for beautiful design, Sarah created Scripture Seeds after the birth of her first child. 
                  She believes that a child's spiritual formation begins from day one and is passionate about equipping parents with tools to nurture 
                  their children's relationship with God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#443736] mb-6">Join Our Community</h2>
            <p className="text-[#8a7370] mb-8">
              Follow us on social media for daily scripture prompts, encouragement, and tips for nurturing your child's faith.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-[#ba8f95] hover:bg-[#a27a80] text-white px-8 py-3 rounded-full transition-all">
                Instagram
              </a>
              <a href="#" className="bg-[#ba8f95] hover:bg-[#a27a80] text-white px-8 py-3 rounded-full transition-all">
                Facebook
              </a>
              <a href="#" className="bg-[#ba8f95] hover:bg-[#a27a80] text-white px-8 py-3 rounded-full transition-all">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 