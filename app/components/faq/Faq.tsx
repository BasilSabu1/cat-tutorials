// pages/faq.tsx
"use client";
import React, { useState } from 'react';
import Head from 'next/head';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-700">
      <button
        className="w-full flex items-center justify-between py-5 px-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-sm md:text-base font-medium">{question}</span>
        <span className="text-white ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-4 pb-5 text-gray-300 text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is the duration of the CAT 2025 Comprehensive Course?",
      answer: "The CAT 2025 Comprehensive Course runs for approximately 9 months, starting from January and continuing until the CAT exam in November. The course includes pre-recorded lessons, live sessions, mock tests, and personalized feedback."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer fully online classes that can be accessed from anywhere. Our online platform provides live interactive sessions, recorded lectures, practice materials, and discussion forums."
    },
    {
      question: "What study materials are provided?",
      answer: "Our study materials include comprehensive textbooks, digital resources, practice workbooks, solved examples, question banks, and concept summaries for each section of the CAT exam."
    },
    {
      question: "Are mock tests included in the course?",
      answer: "Yes, the course includes a series of mock tests designed to simulate the actual CAT exam environment. These tests are accompanied by detailed performance analytics and personalized feedback."
    },
    {
      question: "Can I switch between online and offline classes?",
      answer: "Yes, our flexible learning approach allows students to switch between online and offline classes based on their convenience and learning preferences."
    },
    {
      question: "What is the success rate of CATTutorials students?",
      answer: "Over 85% of our students achieve scores above the 90th percentile, with 40% securing admissions to IIMs and other top business schools in India."
    },
    {
      question: "Do you assist with formulating a study plan?",
      answer: "Yes, we provide personalized study plans tailored to each student's strengths, weaknesses, and time availability. Our mentors help students create and adjust these plans throughout the preparation journey."
    },
    {
      question: "Are there any free resources available?",
      answer: "Yes, we offer free resources including sample lectures, practice questions, and basic study material on our website. We also conduct free webinars on various CAT topics regularly."
    },
    {
      question: "How can I enroll in a course?",
      answer: "You can enroll through our website by selecting your preferred course and completing the registration process. Alternatively, you can visit any of our centers or call our helpline for assistance with enrollment."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQs - Prep Academy</title>
        <meta name="description" content="Frequently asked questions about Prep Academy and its services" />
      </Head>
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">FAQs</h1>
            <p className="text-gray-400 text-lg ">
              Find answers to commonly asked questions about Prep Academy and its services.
            </p>
          </div>

          <div className="bg-black rounded-lg overflow-hidden">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Still have questions?</h2>
            <p className="text-gray-400 text-sm mb-6">Contact us for more information</p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-md text-sm font-medium transition-colors duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;