// components/SuccessStories.tsx
import React from 'react';

interface VideoStory {
  youtubeId: string;
  title: string;
  studentName: string;
}

export default function SuccessStories() {
  const videoStories: VideoStory[] = [
    { 
      youtubeId: "M33APKoNOqE", 
      title: "How I cracked CAT with 99.9%ile",
      studentName: "Rahul Sharma"
    },
    { 
      youtubeId: "M33APKoNOqE", 
      title: "From 80%ile to 99.5%ile in 3 months",
      studentName: "Priya Patel"
    },
    { 
      youtubeId: "M33APKoNOqE", 
      title: "My IIM Ahmedabad journey",
      studentName: "Amit Singh"
    },
    { 
      youtubeId: "M33APKoNOqE", 
      title: "Non-engineer to IIM Calcutta",
      studentName: "Neha Gupta"
    },
    { 
      youtubeId: "M33APKoNOqE", 
      title: "Working professional's success story",
      studentName: "Vikram Joshi"
    },
    { 
      youtubeId: "M33APKoNOqE", 
      title: "How I balanced college and CAT prep",
      studentName: "Ananya Reddy"
    },
  ];

  return (
    <div className="w-full py-8 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Success Stories of CATTutorials Toppers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoStories.map((video, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden bg-gray-800 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              {/* YouTube Video Embed */}
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
             
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}