import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

import { FiSearch, FiCalendar, FiUsers } from "../assets/icons/vander";
import { eventServices, eventTypes } from "../data/databooking";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1">
      <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
        <div className="registration-form text-dark text-start">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Service
              </label>
              <div className="relative mt-2">
                <FiUsers className="size-[18px] absolute top-[10px] start-3"></FiUsers>
                <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                  {eventServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Occasion
              </label>
              <div className="relative mt-2">
                <FiUsers className="size-[18px] absolute top-[10px] start-3"></FiUsers>
                <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                  {eventTypes.map((eventType, index) => (
                    <option key={index} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Select Your Date:
              </label>
              <div className="relative mt-2">
                <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50"></FiCalendar>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="lg:mt-[35px]">
              <input
                type="submit"
                id="search-buy"
                name="search"
                className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer"
                defaultValue="Search"
                onClick={() => navigate("/booking")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
