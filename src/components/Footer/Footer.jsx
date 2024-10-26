import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#1c1f2b] to-[#252a38] py-12'>
      {/* Top section with quote and call to action */}
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0 sm:space-x-10">
          
          {/* Left: Quote and Button */}
          <div className="text-center sm:text-left w-full sm:w-1/2">
            <h4 className='text-3xl sm:text-4xl lg:text-5xl text-pink-300 font-bold italic tracking-wide leading-snug mb-6'>
              ॥ अंतः अस्ति प्रारंभ ॥
            </h4>
            <a href="#contact">
              <button className='bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 py-3 px-8 rounded-lg shadow-lg'>
                <i className="ri-mail-fill"></i> Let's Talk
              </button>
            </a>
          </div>

          {/* Right: Social Links */}
          <div className='text-center sm:text-right w-full sm:w-1/2'>
            <div className='flex justify-center sm:justify-end gap-5 mt-6'>
              <span className='text-gray-300 text-sm font-medium'>
                Follow Me:
              </span>
              <a href="https://www.linkedin.com/in/akshay-balte-developer/" className='w-10 h-10 bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="https://github.com/Akshaybalte1998" className='w-10 h-10 bg-gray-800 hover:bg-purple-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='mt-12'>
          <ul className='flex justify-center gap-8 sm:gap-12'>
            <li>   
              <a href="#about" className='text-gray-400 hover:text-pink-300 text-sm sm:text-base transition-all duration-300'>
              Home Page
              </a>
            </li>
            <li>
              <a href="#services" className='text-gray-400 hover:text-yellow-300 text-sm sm:text-base transition-all duration-300'>
                Educational Journey 
              </a>
            </li>
            <li>
              <a href="#Project" className='text-gray-400 hover:text-yellow-300 text-sm sm:text-base transition-all duration-300'>
              Project Showcase
              </a>
            </li>
            <li>
              <a href="#skills" className='text-gray-400 hover:text-green-300 text-sm sm:text-base transition-all duration-300'>
              Skills & Expertise
              </a>
            </li>
            <li>
              <a href="#portfolio" className='text-gray-400 hover:text-purple-300 text-sm sm:text-base transition-all duration-300'>
              Certification
              </a>
            </li>
            <li>
              <a href="#contact" className='text-gray-400 hover:text-blue-300 text-sm sm:text-base transition-all duration-300'>
                Let's Talk
              </a>
            </li>
          </ul>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm sm:text-base text-center mt-6">
            © 2024 Akshay Balte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
