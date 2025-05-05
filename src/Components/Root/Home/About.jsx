import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "About Us | AppNest";
      }, []);

    return (
        <div className='container mx-auto mt-10 mb-28'>
            <h1 className='text-3xl font-bold mb-4'>About Us</h1>
            <p className='text-lg'>
                Welcome to our site! We are passionate developers dedicated to building helpful web applications.
            </p>
        </div>
    );
};

export default About;
