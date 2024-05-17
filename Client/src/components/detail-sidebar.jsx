import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import { eventServices, eventTypes } from "../data/databooking";
import { Link, useNavigate } from "react-router-dom";

export default function DetailSidebar() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="lg:col-span-4 md:col-span-5">
      <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
        <div className="flex flex-col">
          <label className="font-semibold">Date:</label>
          <DatePicker
            className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="mt-4">
          <div className="md:flex">
            <div className="md:w-1/3">
              <span className="font-medium">Adult:</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
              <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                {eventServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:flex mt-4">
            <div className="md:w-1/3">
              <span className="font-medium">Child:</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
              <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                {eventTypes.map((eventType, index) => (
                  <option key={index} value={eventType}>
                    {eventType}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
            // onClick={() => navigate("/booking")}
          >
            <Link to="/booking">Search Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
