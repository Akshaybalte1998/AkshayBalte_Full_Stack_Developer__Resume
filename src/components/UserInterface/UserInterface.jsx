import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  // Media queries
  const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  const isTabletOrAbove = useMediaQuery({ query: "(min-device-width: 768px)" });
  const isLaptopOrAbove = useMediaQuery({ query: "(min-device-width: 1024px)" });

  return (
    <section 
      className="bg-gradient-to-r from-purple-600 via-teal-500 to-indigo-500 text-white py-16" 
      id="about"
      style={{ minHeight: '100vh' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-indigo-200 font-semibold text-lg mb-2">Hello, Welcome</h5>
            <h1 className="font-extrabold text-3xl md:text-4xl leading-tight mb-4 text-white">
              I am Akshay Balte <br />
              <span className="text-yellow-300 text-2xl md:text-3xl">Software Developer</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <a href="#contact">
                <button 
                  className="bg-yellow-500 text-white font-semibold flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg border-none cursor-pointer transition-transform duration-300 ease-in hover:bg-yellow-400 transform hover:scale-105"
                  aria-label="Hire me"
                >
                  <i className="ri-mail-fill" aria-hidden="true"></i>Let's Talk
                </button>
              </a>
              <a 
                href="#skills" 
                className="text-yellow-300 text-lg font-semibold border-b-2 border-yellow-300 hover:text-yellow-400"
                aria-label="View Portfolio"
              >
                My Strengths
              </a>
            </div>
            <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8">
              <span className="mr-2"><i className="ri-command-fill" aria-hidden="true"></i></span>
              I build and code full-stack applications with a focus on simplicity and user experience. As a passionate Full Stack Developer, 
              I have strong skills in both front-end and back-end technologies. Known for my hard work and clear communication, I’m dedicated to creating effective and user-friendly software. 
              I thrive in collaborative environments and am eager to use my skills to take on new challenges and drive innovation. 
              Let’s connect and explore how we can work together!
            </p>
            <div className="text-gray-100 text-base md:text-lg">
              <span className="text-yellow-300 font-semibold">Contact:</span>
              <div>
                <a 
                  href="mailto:balteakshay1998@gmail.com" 
                  className="text-yellow-300 font-semibold hover:text-yellow-400"
                  aria-label="Email Akshay Balte"
                >
                  <i className="ri-mail-line" aria-hidden="true"></i> balteakshay1998@gmail.com
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/akshay-balte-developer/" 
                  className="text-yellow-300 font-semibold hover:text-yellow-400"
                  aria-label="Visit LinkedIn Profile"
                >
                  <i className="ri-linkedin-box-fill" aria-hidden="true"></i> LinkedIn Profile
                </a>
              </div>
              <div>
                <a 
                  href="tel:7447686701" 
                  className="text-yellow-300 font-semibold hover:text-yellow-400"
                  aria-label="Call Akshay Balte"
                >
                  <i className="ri-phone-line" aria-hidden="true"></i> 7447686701
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={heroImage} 
              alt="Portrait of Akshay Balte" 
              className="w-1/2 md:w-2/3 rounded-full shadow-2xl border-4 border-yellow-300 transition-transform duration-300 transform hover:scale-105 hover:rotate-2" 
              style={{ width: '250px', height: '350px', objectFit: 'cover', borderRadius: '50% 50% 45% 45%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
