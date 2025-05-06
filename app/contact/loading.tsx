export default function ContactLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-[#fff9f3]">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-pulse">
            <div className="inline-block h-8 w-32 bg-[#e6d5d2] rounded-full mb-6"></div>
            <div className="h-16 bg-[#e6d5d2] rounded-xl mb-6"></div>
            <div className="h-20 bg-[#e6d5d2] rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Form Section Skeleton */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="space-y-6 animate-pulse">
                  <div>
                    <div className="h-4 w-24 bg-[#e6d5d2] rounded mb-2"></div>
                    <div className="h-12 bg-[#e6d5d2] rounded-xl"></div>
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-[#e6d5d2] rounded mb-2"></div>
                    <div className="h-12 bg-[#e6d5d2] rounded-xl"></div>
                  </div>
                  <div>
                    <div className="h-4 w-24 bg-[#e6d5d2] rounded mb-2"></div>
                    <div className="h-12 bg-[#e6d5d2] rounded-xl"></div>
                  </div>
                  <div>
                    <div className="h-4 w-24 bg-[#e6d5d2] rounded mb-2"></div>
                    <div className="h-32 bg-[#e6d5d2] rounded-xl"></div>
                  </div>
                  <div className="h-12 bg-[#ba8f95] rounded-xl"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="animate-pulse">
                  <div className="h-8 w-48 bg-[#e6d5d2] rounded mb-6"></div>
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-12 h-12 bg-[#e6d5d2] rounded-full mr-4"></div>
                        <div className="flex-1">
                          <div className="h-4 w-24 bg-[#e6d5d2] rounded mb-2"></div>
                          <div className="h-4 w-32 bg-[#e6d5d2] rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="animate-pulse">
                  <div className="h-8 w-24 bg-[#e6d5d2] rounded mb-6"></div>
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i}>
                        <div className="h-4 w-48 bg-[#e6d5d2] rounded mb-2"></div>
                        <div className="h-4 w-full bg-[#e6d5d2] rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 