// src/pages/Contact.jsx
import { useState } from "react";
// import PageHeader from "../components/PageHeader";
import { HeroCard } from "../components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add your form submission logic here
  };

  return (
    
    <section className="bg-white py-12">
       <div className="">
              <HeroCard img="/Frame.png" title="Contact Us "   subtitle=""  heightClass=" h-[250px]"
              />
          </div>
      <div className="text-center mb-10">
        {/* <PageHeader title="Contact Us" /> */}
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          We’d Love to Hear From You
        </h2>
        <p className="text-gray-600 mt-2">
          Have questions or want to get started? Send us a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
