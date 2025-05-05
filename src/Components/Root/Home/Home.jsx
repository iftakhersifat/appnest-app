import React, { useEffect } from 'react';
import Categories from './Categories';
import { BsLightningChargeFill } from 'react-icons/bs';
import { HiMiniUsers } from 'react-icons/hi2';
import { TbTargetArrow } from 'react-icons/tb';

const Home = () => {
  useEffect(() => {
    document.title = "Home | AppNest";
  }, []);
    return (


        // banner section
        <div className='container mx-auto mt-4 mb-10'>
            <div className='bg-[#1565C0] rounded-xl'>
            <div className='flex justify-between items-center px-8'>
                {/* text area */}
            <div className='space-y-4 w-[50%]'>
                <h1 className='text-2xl font-bold text-white'>AppNest – Discover, Explore, and Review the Best Apps</h1>
                <p className='text-gray-200 text-lg'>AppNest is your ultimate destination for discovering trending apps, browsing through curated categories, and reading real user reviews. Whether you're hunting for productivity tools, entertainment, or lifestyle apps, AppNest helps you find exactly what you need—fast, easy, and personalized.</p>

                {/* google and app store button */}
                <div className="mt-6 flex justify-center lg:justify-start gap-4">
                <a href="#" className="btn btn-outline btn-success bg-green-600 text-white p-6 flex items-center">
                  <img src="https://img.icons8.com/color/24/google-play.png" className="w-10 mr-2" />
                  <div>
                    <span className="text-[10px] font-semibold -ml-10">GET IT ON</span><br />
                    <span className="text-[16px] font-bold">Google Play</span>
                  </div>
                </a>
                <a href="#" className="btn btn-outline btn-success bg-green-600 text-white p-6 flex items-center">
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" className="w-8 mr-2" />
                  <div>
                    <span className="text-[10px] font-semibold -ml-2">Download on the</span><br />
                    <span className="text-[16px] font-bold">App Store</span>
                  </div>
                </a>
            </div>

            </div>
            {/* image area */}
            <div className='w-[50%] navbar-end'>
                <img src="/assets/banner.png" alt="" />
            </div>
            </div>
            </div>

            <Categories></Categories>

            {/* extra section */}
            <div className="mt-16 bg-white py-16 px-4 md:px-12 border-1 border-sky-500 rounded-2xl shadow-md">
       <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Why Choose <span className="text-blue-500">AppNest</span>?</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
             <div className="text-4xl mb-4 text-red-600"><TbTargetArrow /></div>
             <h3 className="text-xl font-semibold text-blue-700 mb-2">Curated App Collections</h3>
             <p className="text-gray-600 text-sm">We handpick top-performing apps across every category, so you get only the best—no fluff.</p>
            </div>

           <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
             <div className="text-4xl mb-4 text-green-600"><HiMiniUsers /></div>
             <h3 className="text-xl font-semibold text-blue-700 mb-2">Trusted by Users</h3>
             <p className="text-gray-600 text-sm">Backed by real reviews and community ratings, AppNest helps you make confident choices.</p>
            </div>

           <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
             <div className="text-4xl mb-4 text-amber-600"><BsLightningChargeFill /></div>
             <h3 className="text-xl font-semibold text-blue-700 mb-2">Lightning Fast Search</h3>
             <p className="text-gray-600 text-sm">Our smart search and filters let you explore and compare apps effortlessly and quickly.</p>
           </div>
         </div>
    </div>

            
        </div>
    );
};

export default Home;