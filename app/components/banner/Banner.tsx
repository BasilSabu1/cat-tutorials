"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import { toast } from "react-toastify";

const BannerPage: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const carouselImages = ["/banner1.png", "/banner2.png"];

  const cardItems = [
    {
      id: 1,
      title: "CAT Mock test for free",
      imageType: "document",
      imageUrl: "/bannercard1.png",
    },
    {
      id: 2,
      title: "GDPI session video of 2024",
      imageType: "video",
      imageUrl: "/bannercard2.png",
    },
    {
      id: 3,
      title: "Result",
      imageType: "result",
      imageUrl: "/bannercard3.png",
    },
    {
      id: 4,
      title: "Result",
      imageType: "result",
      imageUrl: "/bannercard3.png",
    },
    {
      id: 5,
      title: "CAT Mock test for free",
      imageType: "document",
      imageUrl: "/bannercard1.png",
    },
  ];
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", mobile: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Form submitted:", formData);
    try {
      const response = await axiosInstance.post(
        API_URLS.BANNER_FORM.POST_BANNER_FORM,
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Message sent successfully!", response.data);
        toast.success("Your Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          mobile: "",
        });
      } else {
        console.error("Unexpected status code:", response.status);
        toast.error("Failed to submit Form. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to submit Form. Please try again.");
    }
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
  const getCardsPerView = () => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const cardsPerView = getCardsPerView();
  const totalViews = Math.ceil(cardItems.length - (cardsPerView - 1));

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex >= totalViews - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(cardInterval);
  }, [totalViews]);

  // Get appropriate image for each card
  const getCardImage = (imageUrl: string) => {
    return (
      <div className="flex items-center justify-center h-10 w-10 bg-transparent">
        <img
          src={imageUrl}
          alt="card icon"
          className="w-8 h-8 object-contain"
        />
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Image Carousel Section with Form Overlay */}
      <div className="relative w-full bg-gray-100">
        {/* Main wrapper with fixed aspect ratio */}
        <div className="relative w-full pb-[133%] sm:pb-[80%] md:pb-[60%] lg:pb-[50%] bg-black">
          {/* Carousel images */}
          <div className="absolute inset-0 w-full h-full">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Using Next.js Image component for optimized images */}
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Form Container - vertically centered and better mobile alignment */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 py-8">
            <div className="w-full max-w-sm sm:max-w-md backdrop-blur-sm bg-black/30 border border-white/20 rounded-lg p-4 sm:p-6 text-white shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-white">
                Get Access to
                <br />7 Ultra Basic Sessions
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-black bg-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Email ID
                  </label>
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
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium mb-1 text-white"
                  >
                    Mobile Number
                  </label>
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
                      maxLength={10}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                  )}
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
      <div className="w-full bg-black text-white py-6">
        {/* Banner */}
        <div className="w-full bg-black py-4 sm:py-6 px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Why CAT Tutorials
          </h2>
          <p className="text-white text-sm sm:text-base mx-auto max-w-2xl">
            We&apos;re all about helping learners everywhere with top-notch,
            accessible, and fun education!
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="w-full bg-black py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentCardIndex * (100 / cardsPerView)
                  }%)`,
                  width: `${(cardItems.length / cardsPerView) * 100}%`,
                }}
              >
                {cardItems.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / cardItems.length}%` }}
                  >
                    <div className="bg-black border border-gray-700 rounded-lg flex items-center justify-start p-4 h-16 hover:bg-gray-900 transition-all">
                      <div className="flex items-center space-x-3">
                        {getCardImage(card.imageUrl)}
                        <span className="text-white text-sm font-medium">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalViews }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentCardIndex === index ? "bg-white" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentCardIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
