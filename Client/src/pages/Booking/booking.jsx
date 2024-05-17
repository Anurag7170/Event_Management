import React, { useState } from "react";
import { eventTypes, location } from "../../data/databooking";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/EventImage/groom-putting-ring-bride-s-finger_blur.jpg";

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    budget: "",
    date: "",
    eventType: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    //validate the formdata
    const { fullName, email, phoneNumber, budget, date, eventType, location } =
      formData;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !budget ||
      !date ||
      !eventType ||
      !location
    ) {
      toast.error("Please Fill all the input");
      return;
    }

    if (phoneNumber.toString().length !== 10) {
      toast.error("Please submit the correct phone number");
      return;
    }

    const response = await axios.post(
      "http://localhost:8000/api/v1/booking",
      formData
    );
    // console.log(response.status);
    if (response.status === 200) {
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        budget: "",
        date: "",
        eventType: "",
        location: "",
      });
      toast.success("Form Sumbitted");
      navigate("/thankyou");
      return;
    }
  };

  return (
    <>
    
      <div
        className="flex justify-center items-center  min-h-[100vh] slide-inner w-full slide-bg-image bg-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="relative max-w-[700px] w-[100%] rounded-md p-[30px] my-[55px] bg-slate-50 booking-container">
          <header className="relative text-3xl font-semibold text-black text-center">
            Booking Form
          </header>

          <div className="booking-details mt-[16px] min-h-[390px]">
            <div className="w-[100%] mt-[20px]">
              <label className="border-[#747171] font-medium text-[1.15rem]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                required
              />
            </div>
            <div className="w-[100%] mt-[20px]">
              <label className="border-[#747171] font-medium text-[1.15rem]">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd]"
                required
              />
            </div>
            <div className="w-[100%] mt-[20px]">
              <label className="border-[#747171] font-medium text-[1.15rem]">
                PHONE NUMBER
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                required
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-[100%] mt-[20px]">
                <label className="border-[#747171] font-medium text-[1.15rem]">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Enter your budget"
                  className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                  required
                />
              </div>
              <div className="w-[100%] mt-[20px]">
                <label className="border-[#747171] font-medium text-[1.15rem]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Enter your Date of Event"
                  className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-[100%] mt-[20px]">
                <label className="border-[#747171] font-medium text-[1.15rem]">
                  Select Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                >
                  {eventTypes.map((eventType, index) => (
                    <option key={index} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[100%] mt-[20px]">
                <label className="border-[#747171] font-medium text-[1.15rem]">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="relative w-[100%] h-[50px] rounded-md p-[10px] border border-[#ddd] mt-[8px]"
                >
                  {location.map((eventType, index) => (
                    <option key={index} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            className="relative w-[100%] py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-4 "
            onClick={handleSumbit}
          >
            Sumbit
          </button>
        </div>
      </div>
    </>
  );
}

export default Booking;
