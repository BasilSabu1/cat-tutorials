"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CardItem {
  id: number;
  title: string;
  icon: string;
}

const BannerPage: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  // Replace these with your actual image paths
  const carouselImages = [
    '/banner1.png', // Replace with your image path
    '/banner2.png'  // Replace with your image path
  ];

  const cardItems: CardItem[] = [
    { id: 1, title: "CAT Mock test for free", icon: "document-check" },
    { id: 2, title: "GDPI session video of 2024", icon: "video" },
    { id: 3, title: "Result", icon: "document" },
    { id: 4, title: "Result", icon: "document" },
    { id: 5, title: "CAT Mock test for free", icon: "document-check" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Auto slide for images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [carouselImages.length]);

  // Auto slide for cards
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => 
        prevIndex === cardItems.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(cardInterval);
  }, [cardItems.length]);

  // Function to get icon component based on name
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'document-check':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      case 'video':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Image Carousel Section with Form Overlay */}
      <div className="relative w-full bg-gray-100">
        {/* Main wrapper with fixed aspect ratio */}
        <div className="relative w-full pb-[133%] sm:pb-[80%] md:pb-[60%] lg:pb-[50%]">
          {/* Carousel images */}
          <div className="absolute inset-0 w-full h-full">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Using Next.js Image component for optimized images */}
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Form Container - vertically centered and better mobile alignment */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 py-8">
            <div className="w-full max-w-sm sm:max-w-md backdrop-blur-sm bg-black/30 border border-white/20 rounded-lg p-4 sm:p-6 text-white shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-white">Get Access to<br />7 Ultra Basic Sessions</h2>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2  text-black bg-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white text-black rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium mb-1 text-white">Mobile Number</label>
                  <div className="flex">
                    <div className="flex items-center bg-white text-black rounded-l border border-r-0 border-white/30 px-2 sm:px-3">
                      <Image
                        src="/india.png"
                        alt="India flag"
                        width={20}
                        height={14}
                        className="mr-1"
                      />
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-grow px-3 py-2 bg-white text-black rounded-r border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Contact us
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-white" : "bg-gray-400/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Why CAT Tutorials Section - Added from reference image */}
      <div className="w-full bg-black py-4 sm:py-6 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Why CAT Tutorials</h2>
        <p className="text-white text-sm sm:text-base mx-auto max-w-2xl">
          We&apos;re all about helping learners everywhere with top-notch, accessible, and fun education!
        </p>
      </div>
      
      {/* Cards Carousel Section - Placed below banner with proper spacing */}
      <div className="w-full bg-black py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * (100 / (window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3))}%)` }}
            >
              {cardItems.map((card) => (
                <div 
                  key={card.id} 
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2 mb-4"
                >
                  <div className="bg-black border border-gray-700 rounded-lg flex items-center justify-center p-4 transition-all hover:bg-gray-800 h-full">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">
                        {getIcon(card.icon)}
                      </div>
                      <span className="text-white text-sm font-medium">{card.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: cardItems.length > 3 ? Math.ceil(cardItems.length / 3) : 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  Math.floor(currentCardIndex / 3) === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => setCurrentCardIndex(index * 3)}
                aria-label={`Go to card set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;