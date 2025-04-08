import React from "react";

interface CardProps {
  title: string;
  description: string;
  iconSrc?: string; // Made optional
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  iconSrc,
  backgroundImage,
}) => {
  return (
    <div
      className="relative p-4 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between h-full min-h-[200px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        {iconSrc && ( // Only render if iconSrc exists
          <div className="mb-3">
            <img src={iconSrc} alt={title} className="w-10 h-10" />
          </div>
        )}
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-white text-sm leading-tight">{description}</p>
      </div>
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>
    </div>
  );
};
const CATTutorials: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Class duration",
      description:
        "Mentioning number of hours for online classes • Class duration (online): 4 hours",
      iconSrc: "/benefitcard1.png",
      backgroundImage: "/benefitcolor1.png",
    },
    {
      title: "Group Discussion",
      description: "Two group discussion and PI session every month",
      iconSrc: "/benefitcard2.png",
      backgroundImage: "/benefitcolor2.png",
    },
    {
      title: "SOP Writing",
      description:
        "SOP writing practices, mentorship, guidance, and step-by-step techniques to ensure cohesiveness, accuracy, and efficiency in SOP execution. Thrice every month",
      backgroundImage: "/benefitcolor3.png",
    },
    {
      title: "One-to-One",
      description: "1-0-1  mentorship from IIM-A/B/C Alumnus every month",
      iconSrc: "/benefitcard3.png",
      backgroundImage: "/benefitcolor4.png",
    },
    {
      title: "Proper analysis of the performance in mock and discussions",
      description:
        "Proper mock analysis involves identifying mistakes, weak areas, and patterns. Discussions clarify doubts, offer new insights, and boost conceptual understanding for better performance.",
      backgroundImage: "/benefitcolor5.png",
    },
    {
      title: "Premium Faculties",
      description:
        "Premium faculties with over a decade of teaching experience bring deep subject knowledge, effective teaching methodologies, valuable query resolution and trustable resources.",
      backgroundImage: "/benefitcolor6.png",
    },
    {
      title: "Mock Tests",
      description: "30 full mocks 15 sections",
      iconSrc: "/benefitcard4.png",
      backgroundImage: "/benefitcolor7.png",
    },
    {
      title: "Limited Students",
      description: "Limited students batch",
      iconSrc: "/benefitcard5.png",
      backgroundImage: "/benefitcolor8.png",
    },
  ];

  return (
    <div className="bg-[#151718] text-white min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Why CAT Tutorials
        </h1>
        <p className="text-center mb-8">
          We&apos;re all about helping learners everywhere with top-notch,
          accessible, and fun education!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc}
              backgroundImage={card.backgroundImage}
            />
          ))}
        </div>

        {/* Support cards section - manually created */}
        <div className="mt-12 mb-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* First support card */}
    <div 
      className="flex items-center p-4 rounded-lg shadow-lg h-full"
      style={{
        backgroundImage: "url('/benefitcolor9.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="text-white mr-3">
        <img src="/telegram.png" alt="Telegram" className="w-8 h-8" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-blue-600 font-bold">
          Telegram support 24×7
        </h3>
      </div>
    </div>

    {/* Second support card */}
    <div
      className="flex items-center p-4 rounded-lg shadow-lg h-full"
      style={{
        backgroundImage: "url('/benefitcolor10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="flex flex-col">
        <h3 className="text-white font-bold">
          Dedicated LMS system with score and progress tracking
        </h3>
      </div>
    </div>

    {/* Third support card */}
    <div
      className="flex items-center p-4 rounded-lg shadow-lg h-full"
      style={{
        backgroundImage: "url('/benefitcolor11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="flex flex-col">
        <h3 className="text-white font-bold">
          Offline support available upon request
        </h3>
      </div>
    </div>
  </div>
</div>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-full transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CATTutorials;
