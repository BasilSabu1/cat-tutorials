"use client";

import React, { useState } from "react";

const CourseComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState("success");

  const tabs = [
    { id: "success", label: "Success Rate" },
    { id: "faculty", label: "Faculty Experience" },
    { id: "mock", label: "Mock Tests" },
    { id: "flexible", label: "Flexible Learning" },
  ];

  return (
    <div className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Course Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Features Column with Tabs */}
          <div className="bg-transparent rounded-lg p-4">
            <p className="text-emerald-400 font-medium text-lg mb-10">
              Features
            </p>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-lg w-full text-left py-2 rounded-md ${
                    activeTab === tab.id
                      ? "font-bold text-emerald-400"
                      : "text-gray-300"
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  tabIndex={0}
                  aria-controls={`panel-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* CATTutorials Column - Static */}
          <div className="bg-[#1E0E06] rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-md text-center py-3 px-2 mb-10">
              <p className="text-white text-lg font-medium">CATTutorials</p>
            </div>

            <div className="space-y-12 text-center">
              <p
                className="text-white text-lg font-medium"
                id="panel-success"
                role="tabpanel"
                aria-labelledby="tab-success"
              >
                85%
              </p>
              <p
                className="text-white text-lg font-medium"
                id="panel-faculty"
                role="tabpanel"
                aria-labelledby="tab-faculty"
              >
                10+ years
              </p>
              <p
                className="text-white text-lg font-medium"
                id="panel-mock"
                role="tabpanel"
                aria-labelledby="tab-mock"
              >
                50+
              </p>
              <p
                className="text-white text-lg font-medium"
                id="panel-flexible"
                role="tabpanel"
                aria-labelledby="tab-flexible"
              >
                Yes
              </p>
            </div>

            <div className="mt-16 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full py-3 px-8 transition duration-300">
                Enrol Now
              </button>
            </div>
          </div>

          {/* Competitor A Column */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-md text-center py-3 px-2 mb-10">
              <p className="text-white text-lg">Competitor A</p>
            </div>

            <div className="space-y-12 text-center">
              <p
                className="text-white text-lg"
                id="panel-success-a"
                role="tabpanel"
                aria-labelledby="tab-success"
              >
                75%
              </p>
              <p
                className="text-white text-lg"
                id="panel-faculty-a"
                role="tabpanel"
                aria-labelledby="tab-faculty"
              >
                8 years
              </p>
              <p
                className="text-white text-lg"
                id="panel-mock-a"
                role="tabpanel"
                aria-labelledby="tab-mock"
              >
                30
              </p>
              <p
                className="text-white text-lg"
                id="panel-flexible-a"
                role="tabpanel"
                aria-labelledby="tab-flexible"
              >
                No
              </p>
            </div>
          </div>

          {/* Competitor B Column */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-md text-center py-3 px-2 mb-10">
              <p className="text-white text-lg">Competitor B</p>
            </div>

            <div className="space-y-12 text-center">
              <p
                className="text-white text-lg"
                id="panel-success-b"
                role="tabpanel"
                aria-labelledby="tab-success"
              >
                70%
              </p>
              <p
                className="text-white text-lg"
                id="panel-faculty-b"
                role="tabpanel"
                aria-labelledby="tab-faculty"
              >
                5 years
              </p>
              <p
                className="text-white text-lg"
                id="panel-mock-b"
                role="tabpanel"
                aria-labelledby="tab-mock"
              >
                25
              </p>
              <p
                className="text-white text-lg"
                id="panel-flexible-b"
                role="tabpanel"
                aria-labelledby="tab-flexible"
              >
                Yes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComparison;
