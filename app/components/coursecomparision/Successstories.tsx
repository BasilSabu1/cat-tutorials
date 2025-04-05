// components/SuccessStories.tsx
import React from 'react';
import Image from 'next/image';


export default function SuccessStories() {

    const imageUrls = [
        '/successstories.png', 
        '/successstories.png',
        '/successstories.png',
        '/successstories.png',
        '/successstories.png',
        '/successstories.png',
      ];


  return (
    <div className="w-full  py-8">
         <div className="max-w-6xl mx-auto px-4">
           <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Success Stories of CATTutorials Toppers</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {imageUrls.map((imageUrl, index) => (
               <div 
                 key={index} 
                 className="rounded-xl overflow-hidden  "
               >
                 <div className="h-64 w-full relative hover:shadow-purple-500/50 transition-shadow duration-300"> {/* Increased height to 64 (16rem) */}
                   <Image
                     src={imageUrl}
                     alt={`Event ${index + 1}`}
                     fill
                     className="object-cover"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
  );
}