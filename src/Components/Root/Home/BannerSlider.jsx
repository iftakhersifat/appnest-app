import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSlider = () => {
  const slides = [
    {
      title: "Discover the Best Apps",
      desc: "Explore trending apps and read real user reviews on AppNest.",
      image: "/assets/banner.png"
    },
    {
      title: "Newly Launched Tools",
      desc: "Be the first to try the latest productivity and lifestyle apps.",
      image: "/assets/image-1.png"
    },
    {
      title: "Personalized Recommendations",
      desc: "AppNest helps you find the perfect app — fast and easy.",
      image: "/assets/banner.png"
    }
  ];

  return (
    <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000 }}
  pagination={{ clickable: true }}
  loop={true}
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="bg-[#1565C0] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <div className="space-y-4 w-full md:w-1/2 md:ml-12 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold text-white">{slide.title}</h1>
          <p className="text-gray-200 text-sm md:text-lg">{slide.desc}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#" className="btn btn-outline bg-green-600 text-white p-4 flex items-center justify-center">
              <img src="https://img.icons8.com/color/24/google-play.png" className="w-6 mr-2" />
              <div>
                <span className="text-[10px] font-semibold">GET IT ON</span><br />
                <span className="text-sm font-bold">Google Play</span>
              </div>
            </a>
            <a href="#" className="btn btn-outline bg-green-600 text-white p-4 flex items-center justify-center">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" className="w-6 mr-2" />
              <div>
                <span className="text-[10px] font-semibold">Download on</span><br />
                <span className="text-sm font-bold">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:mr-12">
          <img className="w-64 md:w-80" src={slide.image} alt="Banner" />
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  );
};

export default BannerSlider;
