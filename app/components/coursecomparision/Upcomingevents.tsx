// components/UpcomingEvents.tsx
import React from "react";

interface EventVideo {
  youtubeId: string;
  title: string;
  date: string;
}

export default function UpcomingEvents() {
  const eventVideos: EventVideo[] = [
    {
      youtubeId: "JtOfpzHsds4", // Replace with actual YouTube ID
      title: "CAT 2024 Strategy Session",
      date: "June 15, 2024",
    },
    {
      youtubeId: "JtOfpzHsds4",
      title: "Quant Masterclass with IIM Topper",
      date: "June 18, 2024",
    },
    {
      youtubeId: "JtOfpzHsds4",
      title: "VARC Workshop - Reading Techniques",
      date: "June 22, 2024",
    },
    {
      youtubeId: "JtOfpzHsds4",
      title: "DILR Sets Breakdown",
      date: "June 25, 2024",
    },
    {
      youtubeId: "JtOfpzHsds4",
      title: "Mock Test Analysis Session",
      date: "June 29, 2024",
    },
    {
      youtubeId: "JtOfpzHsds4",
      title: "Interview Preparation Webinar",
      date: "July 2, 2024",
    },
  ];

  return (
    <div className="w-full py-8 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventVideos.map((event, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-gray-800 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              {/* YouTube Video Embed */}
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${event.youtubeId}?rel=0`}
                  title={event.title}
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
