"use client";

import React, { useState, useEffect } from 'react';

interface Faculty {
  id: number;
  name: string;
  image: string;
  qualifications: string;
  experience: string;
}

const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Nikhil Bhalla",
    image: "/nikhilballafaculty.png",
    qualifications: "CA UGC Net/JRF | 6-Time JAIIB Qualified | 6-Times MCX Presenter",
    experience: "15 Years Mentoring Students for CAT/MBA"
  },
  {
    id: 2,
    name: "Kavita Naryani",
    image: "/faculty2.png",
    qualifications: "MA, NTT, B.Ed",
    experience: "20 Years of Experience"
  }
];

const FacultyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === facultyData.length - 1 ? 0 : prevIndex + 1
    );
  };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? facultyData.length - 1 : prevIndex - 1
//     );
//   };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const faculty = facultyData[currentIndex];

  return (
    <div className="relative w-full bg-[#151718] text-white py-12 overflow-hidden">
      {/* Grid overlay */}
     

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold text-center mb-8">Faculty Profile</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-6">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-4xl md:text-4xl font-bold">
                Learn from the <span className="text-orange-500">Experts</span>:
              </h3>
              <p className="text-4xl">
                Dedicated educators with <span className="text-orange-500">real-world experience</span> guiding you every step of the way.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
          
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative aspect-square md:aspect-auto">
              <img 
                src={faculty.image} 
                alt={faculty.name} 
                className="w-full max-h-96 object-cover object-center rounded"
              />
              
              <div className="absolute bottom-0 left-6 right-0 bg-black/60 border border-gray-700 backdrop-blur-sm p-4 text-center rounded-b">
               <h4 className="text-2xl font-semibold text-white">{faculty.name}</h4>
               <p className="text-sm text-gray-300 my-1">{faculty.qualifications}</p>
               <p className="text-lg font-medium text-orange-500">{faculty.experience}</p>
              </div>

            </div>
            
          
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default FacultyCarousel;