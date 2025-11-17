"use client";
import { useState } from "react";

const ContactUs = () => {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  }

    return(
        <section className="py-[50px] xl:py-[100px] px-[16px] xl:px-0 bg-[#f2f2f2]" id="contact">
      <div className="max-w-[1248px] mx-auto text-center">
        <h2 className="text-[45px] md:text-[55px] font-[700] mb-3 md:mb-6">Get in Touch</h2>
        <p className="mb-4 md:mb-12 max-w-[1000px] mx-auto">
          Have a project in mind? We&apos;d love to hear from you. Fill out the form
          below and we&apos;ll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="p-0 md:p-8 rounded-2xl w-full md:max-w-2xl mx-auto text-left"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#000]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="outline-none w-full p-3 rounded-md border border-[#000] text-[#000]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#000]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="outline-none w-full p-3 rounded-md text-[#000] border border-[#000]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="outline-none w-full p-3 rounded-md border border-[#000] text-gray-200 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#107269] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#17a74b] transition w-full"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </section>
    )
}

export default ContactUs;