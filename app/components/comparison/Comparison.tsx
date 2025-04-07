import React from "react";

interface ComparisonFeature {
  name: string;
  vaniAdmission: boolean;
  traditionalInstitute: boolean;
  onlineCoaching: boolean | "partial";
}

const ComparisonComponent: React.FC = () => {
  const features: ComparisonFeature[] = [
    {
      name: "121 Alumni Mentorship",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Customised Training",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Holistic Profile Transformation",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Quant, Verbal, LR FD Mastery",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "SOP, Profile, Certification Mastery",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "WAT, GD, PI Live Mastery",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Personal Development Sessions",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Communication Skills Sessions",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Top IIM Alumni Sessions",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "1-on-1 Personal Admission Modals",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Personalised Journey Dashboard",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
    {
      name: "Exclusive Selection Plan",
      vaniAdmission: true,
      traditionalInstitute: false,
      onlineCoaching: false,
    },
  ];

  const topperData = {
    name: "Lavinya Borra",
    details:
      "B.V.B. B.J.S. College of Engineering, Institute of Technology - Navi Mumbai",
    before: [
      "She was anxious, stuck, and confused about how to get started on her MBA journey.",
      "Struggled with aptitude, profile building, and communication skills.",
    ],
    after: [
      "Received 1:1 mentorship under Maya Sir in 1:1 Attempt Admission Model.",
      "Appeared for multiple exams as per her profile.",
      "Cracked IIMS, IIM Calcutta, IIM Lucknow, NMIMS, IM Raipur and more.",
    ],
    result: [
      "Chose IIM Calcutta for her MBA (Average - Highest placement: 25Lac! Last 2 Cr Overall).",
      "Transformed her career and gained clarity, confidence, and success.",
    ],
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-4 py-10 w-full">
      {/* Model Comparison */}
      <div className="w-full mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Compare Our Model with Others
        </h2>

        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm md:text-base">
                <th className="py-3 px-2 md:px-4 text-left w-1/3">Features</th>
                <th className="py-3 px-2 md:px-4 text-center">
                  VANI / Attempt Admission Model
                </th>
                <th className="py-3 px-2 md:px-4 text-center">
                  Offline Traditional Institute
                </th>
                <th className="py-3 px-2 md:px-4 text-center">
                  Other Online Coachings
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`text-sm md:text-base ${
                    index % 2 === 0 ? "bg-gray-900/40" : ""
                  } rounded-lg overflow-hidden`}
                >
                  <td className="py-3 px-2 md:px-4">{feature.name}</td>
                  <td className="py-3 px-2 md:px-4 text-center">
                    {feature.vaniAdmission && (
                      <div className="flex justify-center">
                        <span className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-2 md:px-4 text-center">
                    {!feature.traditionalInstitute && (
                      <div className="flex justify-center">
                        <span className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-2 md:px-4 text-center">
                    {feature.onlineCoaching === "partial" ? (
                      <div className="flex justify-center">
                        <span className="bg-red-500/80 rounded-full w-6 h-6 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M18 12H6"
                            />
                          </svg>
                        </span>
                      </div>
                    ) : (
                      !feature.onlineCoaching && (
                        <div className="flex justify-center">
                          <span className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Topper's Feedback */}
      <div className="w-full bg-slate-900 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          CAT 2024 <span className="text-orange-500">Topper's</span> Feedback
        </h1>

        <div className="flex justify-center mb-8">
          <div className="bg-[#FFDFC8] rounded-full px-4 py-1">
            <span className="flex items-center text-sm">
              <span className="mr-1 text-orange-500">●</span>
              <span className="text-orange-500">Real Transformation</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Student Profile */}
         {/* Topper Image */}
<div className="rounded-lg overflow-hidden h-full flex items-center justify-center ">
  <img 
    src="/cattopper.png" 
    alt="Topper" 
    className="object-contain w-full h-64 rounded"
  />
</div>


          {/* Before */}
          <div
  className="bg-gray-900 rounded-lg p-4 border border-red-800/40 flex flex-col h-full relative overflow-hidden bg-[url('/cattoppercard1.png')] bg-cover bg-center"
>
  {/* Overlay to darken background for readability */}
  <div className="absolute inset-0 bg-black/60 z-0 rounded-lg"></div>

  {/* Card content */}
  <div className="relative z-10">
    <h3 className="text-sm font-medium mb-4 text-white">Before</h3>
    <ul className="space-y-4 flex-grow">
      {topperData.before.map((item, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <div className="bg-red-500 rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center mt-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <span className="text-xs">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


          {/* After */}
          <div 
  className="bg-gray-900 rounded-lg p-4 border border-red-800/40 flex flex-col h-full relative overflow-hidden bg-[url('/cattoppercard2.png')] bg-cover bg-center"
  >
            <h3 className="text-sm font-medium mb-4 text-white">After</h3>
            <ul className="space-y-4 flex-grow">
              {topperData.after.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <div className="bg-green-500 rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center mt-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2 w-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div 
  className="bg-gray-900 rounded-lg p-4 border border-red-800/40 flex flex-col h-full relative overflow-hidden bg-[url('/cattoppercard3.png')] bg-cover bg-center"
  >
            <h3 className="text-sm font-medium mb-4 text-white">Result</h3>
            <ul className="space-y-4 flex-grow">
              {topperData.result.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <div className="bg-blue-500 rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center mt-1 mr-2">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonComponent;