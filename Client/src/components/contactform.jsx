import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, question, comments } = formData;
    if (!name || !email || !question || !comments) {
      toast.error("Fill all the Fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1//contantUs",
        formData
      );
      if (response.status === 200) {
        toast.success("Query is Sumbitted");
        setFormData({
          name: "",
          email: "",
          question: "",
          comments: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
        <div className="lg:col-span-6">
          <label htmlFor="name" className="font-semibold">
            Your Name:
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
            placeholder="Name :"
            
          />
        </div>

        <div className="lg:col-span-6">
          <label htmlFor="email" className="font-semibold">
            Your Email:
          </label>
          <input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
            placeholder="Email :"
            
          />
        </div>

        <div className="lg:col-span-12">
          <label htmlFor="question" className="font-semibold">
            Your Question:
          </label>
          <input
            name="question"
            id="question"
            value={formData.question}
            onChange={handleChange}
            className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
            placeholder="Question"
            
          />
        </div>

        <div className="lg:col-span-12">
          <label htmlFor="comments" className="font-semibold">
            Your Comment:
          </label>
          <textarea
            name="comments"
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
            placeholder="Message :"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        id="submit"
        name="send"
        className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-2"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
