import React, { useEffect } from 'react';
import Categories from './Categories';
import { BsLightningChargeFill } from 'react-icons/bs';
import { HiMiniUsers } from 'react-icons/hi2';
import { TbTargetArrow } from 'react-icons/tb';
import BannerSlider from './BannerSlider';

const Home = () => {
  useEffect(() => {
    document.title = "Home | AppNest";
  }, []);
    return (


        // banner section
        <div className='container mx-auto mt-4 mb-10'>
            <BannerSlider></BannerSlider>


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