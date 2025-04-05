// components/CourseComparison.tsx
import React from 'react';

const CourseComparison: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Course Comparison</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Features Column */}
          <div className="bg-transparent rounded-lg p-4">
            <p className="text-emerald-400 font-medium text-lg mb-10">Features</p>
            
            <div className="space-y-12">
              <p className="text-white text-lg">Success Rate</p>
              <p className="text-white text-lg">Faculty Experience</p>
              <p className="text-white text-lg">Mock Tests</p>
              <p className="text-white text-lg">Flexible Learning</p>
            </div>
          </div>
          
          {/* CATTutorials Column */}
          <div className="bg-[#1E0E06] rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-md text-center py-3 px-2 mb-10">
              <p className="text-white text-lg font-medium">CATTutorials</p>
            </div>
            
            <div className="space-y-12 text-center">
              <p className="text-white text-lg font-medium">85%</p>
              <p className="text-white text-lg font-medium">10+ years</p>
              <p className="text-white text-lg font-medium">50+</p>
              <p className="text-white text-lg font-medium">Yes</p>
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
              <p className="text-white text-lg">75%</p>
              <p className="text-white text-lg">8 years</p>
              <p className="text-white text-lg">30</p>
              <p className="text-white text-lg">No</p>
            </div>
          </div>
          
          {/* Competitor B Column */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-md text-center py-3 px-2 mb-10">
              <p className="text-white text-lg">Competitor B</p>
            </div>
            
            <div className="space-y-12 text-center">
              <p className="text-white text-lg">70%</p>
              <p className="text-white text-lg">5 years</p>
              <p className="text-white text-lg">25</p>
              <p className="text-white text-lg">Yes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComparison;