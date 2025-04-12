import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  percentile: string;
  stars: number;
  description: string;
  invitePoints: number;
  rsvpPoints: number;
}

interface VideoInterviewProps {
  name: string;
  title: string;
  duration: string;
  youtubeId: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  percentile,
  stars,
  description,
  invitePoints,
  rsvpPoints,
}) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-lg p-5 flex flex-col items-center mx-2 mb-6 md:mb-0">
      {/* Profile Image */}
      <div className="w-16 h-16 rounded-full bg-gray-700 mb-3 flex items-center justify-center overflow-hidden">
        <Image
          src="/review.png"
          alt="Student"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

      {/* Percentile */}
      <div className="text-center mb-2">
        <span className="text-white text-sm">CAT Percentile : </span>
        <span className="text-white text-sm font-bold">{percentile}</span>
      </div>

      {/* Stars */}
      <div className="flex mb-3">
        {[...Array(stars)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" />
          </svg>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-amber-500 text-xs font-bold tracking-wider uppercase mb-3">
        EXCELLENT CAT COACHING PROGRAM
      </h3>

      {/* Description */}
      <p className="text-white text-center text-xs mb-4">{description}</p>

      {/* Points */}
      <div className="text-gray-300 text-xs flex justify-between w-full">
        <div className="text-center">
          <div>Invite points</div>
          <div>{invitePoints} on points</div>
        </div>
        <div className="text-center">
          <div>RSVP points</div>
          <div>{rsvpPoints} on points</div>
        </div>
      </div>
    </div>
  );
};

const VideoInterviewCard: React.FC<VideoInterviewProps> = ({
  name,
  title,
  duration,
  youtubeId,
}) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden mb-4">
      {/* YouTube Video Embed */}
      <div className="relative pt-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video Info */}
      <div className="p-3">
        <h4 className="text-gray-300 text-sm">{name}</h4>
        <h3 className="text-green-500 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-center text-gray-400 text-xs">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

const ReviewsPage: React.FC = () => {
  const testimonials = [
    {
      percentile: "99.98",
      stars: 5,
      description:
        "Excellent CAT coaching program with expert faculty, personalized guidance, comprehensive study material, excellent results!",
      invitePoints: 450,
      rsvpPoints: 450,
    },
    {
      percentile: "99.98",
      stars: 5,
      description:
        "Excellent CAT coaching program with expert faculty, personalized guidance, comprehensive study material, excellent results!",
      invitePoints: 450,
      rsvpPoints: 450,
    },
    {
      percentile: "99.98",
      stars: 5,
      description:
        "Excellent CAT coaching program with expert faculty, personalized guidance, comprehensive study material, excellent results!",
      invitePoints: 450,
      rsvpPoints: 450,
    },
  ];

  const videoInterviews = [
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4", // Example YouTube ID
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      youtubeId: "JtOfpzHsds4",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            See why we are the Best CAT Coaching
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-sm transition-colors">
            Testimonial
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Video Interviews */}
        <div className="mb-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Video Interviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoInterviews.map((video, index) => (
              <VideoInterviewCard key={index} {...video} />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ReviewsPage;
