import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import { toast } from "react-toastify";
import { format } from "date-fns";

type Props = {};

interface Session {
  id: number;
  session_type: string;
  time_slot: number | string;
  start_time: string;
  date: string;
  time_duration: number | string;
  course_name: string;
  // add more fields as needed
}

const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    day: format(date, "EEE"),
    date: format(date, "dd"),
    month: format(date, "MMM"),
    fullDate: format(date, "yyyy-MM-dd"),
  };
});

const timeSlots = [
  "7:30 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:30 AM",
  "11:30 AM",
];

const FormSlot = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    mobile: "",
    target: "",
    session_type: "",
    time_slot: "",
  });

  const [slotes, setSlotes] = useState([]);

  const [selectedDate, setSelectedDate] = useState(days[0].fullDate);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [allSessionSlots, setAllSessionSlots] = useState<Session[]>([]);
  const [filteredSlots, setFilteredSlots] = useState<Session[]>([]);

  console.log(selectedDate);
  console.log(selectedTime);
  console.log(formData);

  // const handleChange = async (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  //   if(e.target.name === "target"){
  //     try {
  //       const response = await axiosInstance.get(
  //         API_URLS.SLOT_BOOKING.GET_SLOT
  //       );

  //       const matchedTarget = response.data.slots.filter(
  //         (slot: Session) => slot.course_name === e.target.value
  //       );
  //       setAllSessionSlots(matchedTarget);

  //       // If a date is already selected, filter right away
  //       if (selectedDate) {
  //         const filteredByDate = matchedTarget.filter(
  //           (slot: Session) => slot.date === selectedDate
  //         );
  //         setFilteredSlots(filteredByDate);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   if (e.target.name === "session_type") {
  //     try {
  //       const response = await axiosInstance.get(
  //         API_URLS.SLOT_BOOKING.GET_SLOT
  //       );

  //       const matchedSession = response.data.slots.filter(
  //         (slot: Session) => slot.session_type === e.target.value
  //       );
  //       setAllSessionSlots(matchedSession);

  //       // If a date is already selected, filter right away
  //       if (selectedDate) {
  //         const filteredByDate = matchedSession.filter(
  //           (slot: Session) => slot.date === selectedDate
  //         );
  //         setFilteredSlots(filteredByDate);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // const handleDateSelect = (date: string) => {
  //   setSelectedDate(date);

  //   console.log(allSessionSlots);

  //   if (allSessionSlots.length > 0) {
  //     const filteredByDate = allSessionSlots.filter(
  //       (slot) => slot.date === date
  //     );
  //     setFilteredSlots(filteredByDate);
  //   }
  // };


  const fetchSlots = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.SLOT_BOOKING.GET_SLOT);
      return response.data.slots;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const applyFilters = (slots: Session[], target: string, sessionType: string, date: string) => {
    let filtered = slots;
  
    if (target) {
      filtered = filtered.filter((slot) => slot.course_name === target);
    }
  
    if (sessionType) {
      filtered = filtered.filter((slot) => slot.session_type === sessionType);
    }
  
    if (date) {
      filtered = filtered.filter((slot) => slot.date === date);
    }
  
    return filtered;
  };
  
  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    const slots = await fetchSlots();
    setAllSessionSlots(slots); // Save all slots for later use
  
    const filtered = applyFilters(slots, 
      name === "target" ? value : formData.target,
      name === "session_type" ? value : formData.session_type,
      selectedDate
    );
  
    setFilteredSlots(filtered);
  };
  
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  
    const filtered = applyFilters(
      allSessionSlots,
      formData.target,
      formData.session_type,
      date
    );
  
    setFilteredSlots(filtered);
  };
  

  console.log(slotes);
  console.log(filteredSlots);
  console.log(selectedDate);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await axiosInstance.post(
        API_URLS.SLOT_BOOKING.BOOK_SLOT,
        {...formData,
          session_type: formData.session_type === "one-to-one"? "one_to_one":formData.session_type
        }
      );
      console.log(response);
      toast.success("Slot booked successfully");

      setFormData({
        ...formData,
        name: "",
        last_name: "",
        email: "",
        mobile: "",
        target: "",
        session_type: "",
        time_slot: "",
      })

      setSelectedTime(0)
      setSelectedDate("")
      setFilteredSlots([])

    } catch (error) {
      console.error(error);
      toast.error("Error booking slot");
    }
    // Add your form submission logic here
  };

  return (
    <>
      {/* Full-width Notification Section - removed from max-width container */}
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Left Side Gradient Image */}
        <div
          className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-orange-700/60 to-transparent"
          style={{ zIndex: 1 }}
        ></div>

        {/* Right Side Gradient Image */}
        <div
          className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-teal-700/60 to-transparent"
          style={{ zIndex: 1 }}
        ></div>

        <div
          className="max-w-6xl w-full rounded-2xl overflow-hidden relative backdrop-blur-sm border border-gray-800"
          style={{ zIndex: 2 }}
        >
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
                        <Image
                          src="/notificationinstagram.png"
                          alt="Instagram"
                          width={44}
                          height={44}
                        />
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
                        <Image
                          src="/whatapp.png"
                          alt="WhatsApp"
                          width={44}
                          height={44}
                        />
                      </div>
                      <span className="text-sm font-medium text-black">
                        Join Now
                      </span>
                    </div>
                  </div>

                  {/* YouTube Button */}
                  <div className="bg-red-100 rounded-lg overflow-hidden">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="mb-1 flex items-center ">
                        <Image
                          src="/youtube.png"
                          alt="YouTube"
                          width={44}
                          height={44}
                          className=""
                        />
                      </div>
                      <span className="text-sm font-medium text-black">
                        Follow us
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Button */}
                  <div className="bg-blue-100 rounded-lg overflow-hidden">
                    <div className="flex flex-col items-center h-full justify-center p-3">
                      <div className="mb-1 flex items-center justify-center">
                        <Image
                          src="/linkdin.png"
                          alt="LinkedIn"
                          width={44}
                          height={44}
                          className=""
                        />
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
                  Book sessions with top IM & B Schools Expert
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex items-center bg-white rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center px-3 py-3 p-2 bg-transparent border-r border-gray-300">
                        <Image
                          src="/india.png"
                          alt="India flag"
                          width={21}
                          height={16}
                          className="mr-2 ml-2"
                        />
                        <span className="text-gray-800 font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile number"
                        className="flex-1 bg-transparent px-3 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="target"
                      value={formData.target}
                      onChange={handleChange}
                      placeholder="Enter target exam"
                      className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="relative">
                      <select
                        className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 appearance-none"
                        name="session_type"
                        value={formData.session_type}
                        onChange={handleChange}
                      >
                        <option value="">Select session</option>
                        <option value="group">Group session</option>
                        <option value="one-to-one">1 to 1 session</option>
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

                    {/* <div className="relative">
                      <select
                        className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 appearance-none"
                        name="time_slot"
                        value={formData.time_slot}
                        onChange={handleChange}
                      >
                        <option value="">Select time slot</option>
                        {slotes?.map(() => (
                          <option value="morning">Morning (9AM - 12PM)</option>
                        ))}
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
                    </div> */}
                  </div>

                  <div className="max-w-xl mx-auto mt-10 p-4">
                    {/* Date Picker */}
                    <div className="grid grid-cols-7 gap-2 mb-6">
                      {days.map((d) => (
                        <button
                          key={d.fullDate}
                          onClick={(e) => {
                            e.preventDefault(); // <-- Add this
                            handleDateSelect(d.fullDate);
                          }}
                          className={`text-center rounded-lg p-2 ${
                            selectedDate === d.fullDate
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                          }`}
                        >
                          <div className="text-sm font-medium">{d.day}</div>
                          <div className="text-lg font-semibold">{d.date}</div>
                          <div className="text-sm">{d.month}</div>
                        </button>
                      ))}
                    </div>

                    {/* Timezone & Meeting Info */}
                    <div className="text-center mb-6">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium text-white">
                          Select a time slot
                        </p>
                        {/* <div>
                          <p>30 min</p>
                          <p>1 hr</p>
                        </div> */}
                      </div>
                      <hr className="my-2 text-white" />
                      {/* <p className="text-sm text-gray-500">
                      Europe/Amsterdam Time (20:05) • 30 min meeting
                    </p> */}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-3 gap-4">
                      {filteredSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={(e) => {
                            e.preventDefault();
                            const slotIdStr = slot.id.toString(); // Convert number to string

                            setSelectedTime(slot.id);
                            setFormData({
                              ...formData,
                              time_slot: slotIdStr,
                            });
                          }}
                          className={`py-2 rounded-lg font-medium border ${
                            selectedTime === slot.id
                              ? "bg-purple-600 text-white border-purple-600"
                              : "border-purple-200 text-purple-700 hover:bg-purple-100"
                          }`}
                        >
                          {slot.start_time} <span className="font-extralight text-xs">{slot.time_duration} min</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
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
    </>
  );
};

export default FormSlot;
