import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "About Us | AppNest";
      }, []);

    return (
        <div className="container mx-auto mt-10 mb-28 px-6 md:px-0">
        <div className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl shadow-lg p-10">

          <div className="flex items-start gap-4">
        {/* icon */}
            <div className="text-indigo-500 text-5xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
        {/* title & description */}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800 mb-3">About Us</h1>
              <p className="text-lg text-gray-700">
                Welcome to our site! We are a team of passionate developers committed to creating innovative and helpful web applications that simplify your digital experience.
              </p>
            </div>

          </div>

        </div>
      </div>
      
    );
};

export default About;
