import React from "react";
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
  imageSrc: string;
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
  imageSrc,
}) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden mb-4">
      {/* Video Thumbnail */}
      <div className="relative">
        <Image
          src={imageSrc || "/api/placeholder/320/180"}
          alt={title}
          width={320}
          height={180}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-orange-500 rounded-full p-2 opacity-90">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
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
      imageSrc: "/api/placeholder/320/180",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      imageSrc: "/api/placeholder/320/180",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      imageSrc: "/api/placeholder/320/180",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      imageSrc: "/api/placeholder/320/180",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      imageSrc: "/api/placeholder/320/180",
    },
    {
      name: "Raj Shankar",
      title: "HOW I MADE IT? IIM CALCUTTA",
      duration: "17 Min.",
      imageSrc: "/api/placeholder/320/180",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
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
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Video Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoInterviews.map((video, index) => (
              <VideoInterviewCard key={index} {...video} />
            ))}
          </div>
        </div>

        {/* Updated Notification Section - Now with images instead of icons */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full rounded-2xl overflow-hidden relative backdrop-blur-sm border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Main content container */}
            <div className="relative z-10 p-8">
              {/* Heading */}
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                Unlock Your Potentials Here
              </h2>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column */}
                <div className="w-full md:w-5/12">
                  <h3 className="text-lg font-medium text-green-400 mb-4">
                    Join community
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Instagram Button */}
                    <div className="bg-pink-100 rounded-lg overflow-hidden">
                      <div className="flex flex-col items-center p-3">
                        <div className="mb-1 flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                            <Image
                              src="/notificationinstagram.png"
                              alt="Instagram"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-black">
                          Follow us
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="bg-green-100 rounded-lg overflow-hidden">
                      <div className="flex flex-col items-center p-3">
                        <div className="mb-1 flex items-center justify-center">
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                            <Image
                              src="/whatapp.png"
                              alt="WhatsApp"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-black">
                          Join Now
                        </span>
                      </div>
                    </div>

                    {/* YouTube Button */}
                    <div className="bg-red-100 rounded-lg overflow-hidden">
                      <div className="flex flex-col items-center p-3">
                        <div className="mb-1 flex items-center justify-center">
                          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <Image
                              src="/youtube.png"
                              alt="YouTube"
                              width={24}
                              height={24}
                              className="brightness-0 invert"
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-black">
                          Follow us
                        </span>
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <div className="bg-blue-100 rounded-lg overflow-hidden">
                      <div className="flex flex-col items-center p-3">
                        <div className="mb-1 flex items-center justify-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Image
                              src="/linkdin.png"
                              alt="LinkedIn"
                              width={24}
                              height={24}
                              className="brightness-0 invert"
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-black">
                          Join Now
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="bg-pink-100 rounded-lg overflow-hidden">
                    <div className="flex items-center p-3 justify-center">
                      <div className="mr-2 flex items-center justify-center">
                        <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center">
                          <Image
                            src="/contactus.png"
                            alt="Contact"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-black">
                        Contact us
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider for medium screens and up */}
                <div className="hidden md:block w-px bg-gray-700 mx-4 self-stretch"></div>

                {/* Right Column - Form */}
                <div className="w-full md:w-7/12 mt-6 md:mt-0">
                  <h3 className="text-lg font-medium text-white mb-6">
                    Book 1-on-1 Connect with top IM & B Schools Expert
                  </h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Enter your name here"
                        className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center bg-white rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center px-3 py-3 p-2 bg-transparent border-r border-gray-300">
                          <Image
                            src="/india.png"
                            alt="India flag"
                            width={24}
                            height={16}
                            className="mr-1"
                          />
                          <span className="text-gray-800 font-medium">+91</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="Mobile number"
                          className="flex-1 bg-transparent px-3 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Enter email address"
                        className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 appearance-none">
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (1PM - 5PM)</option>
                        <option value="evening">Evening (6PM - 9PM)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                    >
                      REGISTER NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
