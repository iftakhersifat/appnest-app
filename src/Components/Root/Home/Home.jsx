import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto mt-4 bg-[#1565C0] rounded-xl'>
            <div className='flex justify-between items-center px-8'>
                {/* text area */}
            <div className='space-y-4 w-[50%]'>
                <h1 className='text-2xl font-bold text-white'>AppNest – Discover, Explore, and Review the Best Apps</h1>
                <p className='text-gray-200 text-lg'>AppNest is your ultimate destination for discovering trending apps, browsing through curated categories, and reading real user reviews. Whether you're hunting for productivity tools, entertainment, or lifestyle apps, AppNest helps you find exactly what you need—fast, easy, and personalized.</p>

                {/* google and app store button */}
                <div class="mt-6 flex justify-center lg:justify-start gap-4">
                <a href="#" class="btn btn-outline btn-success bg-green-600 text-white p-6 flex items-center">
                  <img src="https://img.icons8.com/color/24/google-play.png" class="w-10 mr-2" />
                  <div>
                    <span class="text-[10px] font-semibold -ml-10">GET IT ON</span><br />
                    <span class="text-[16px] font-bold">Google Play</span>
                  </div>
                </a>
                <a href="#" class="btn btn-outline btn-success bg-green-600 text-white p-6 flex items-center">
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" class="w-8 mr-2" />
                  <div>
                    <span class="text-[10px] font-semibold -ml-2">Download on the</span><br />
                    <span class="text-[16px] font-bold">App Store</span>
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
    );
};

export default Home;