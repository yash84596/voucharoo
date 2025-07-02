import React from 'react';

const Hero: React.FC = () => {
  const handleBuyNow = () => {
    console.log('Buy Now clicked');
    // Add buy now functionality
  };

  const handleSellNow = () => {
    console.log('Sell Now clicked');
    // Add sell now functionality
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 md:p-8 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(1, 48, 119, 0.81) 0%, rgba(252, 252, 252, 0.32) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFP3k1e1GNWxk0LPvcwFCRmu3tGWjrnHt46bTuD0NroGsfjzXKHhgu5jy_5UPZBoNDFJJ1UThsKIu30YFt2MMphA-v-UvzNkZ-CkwftDP4nI-r6yQp0OyRHu6g3lwXoSJv3plwcIM64-uyxlHxlXEGGulaZDlATHT4qS-hby_FuZttzugCqzVRkYbAeP1xLayNcMlvSqp3rLHsvBYu6y2Z65xgJoQ-V7PqWNc-HDHXgMcA22soa5l_L67GUA8PqpQYYxqO17BYD6Uw")`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 rounded-xl"></div>

              <div className="flex flex-col gap-4 text-center relative z-10 max-w-4xl mx-auto">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                  Buy, Sell & Exchange Gift Vouchers Easily
                </h1>
                <p className="text-white text-sm sm:text-base md:text-lg font-normal leading-normal opacity-90 max-w-2xl mx-auto drop-shadow-md">
                  Get 10-30% off top brands like Amazon, Zomato, Flipkart & more. 
                  Join thousands of satisfied customers who save money every day.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center relative z-10">
                <button
                  onClick={handleBuyNow}
                  className="flex min-w-[100px] sm:min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-6 bg-[#d7e3f3] text-[#14191f] text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="truncate">Buy Now</span>
                </button>
                <button
                  onClick={handleSellNow}
                  className="flex min-w-[100px] sm:min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-6 bg-[#2a3441] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#3a4451] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
                >
                  <span className="truncate">Sell Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;