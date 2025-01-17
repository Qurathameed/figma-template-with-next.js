
import React from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="mt-[5rem]" id="contact">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-black mb-8 font-bold">
          Contact <span className="text-gray-900">US!</span>
        </h2>

        {/* Form Section */}
        <form action="#" className="max-w-5xl mx-auto text-center mb-[15rem] px-6 sm:px-8 md:px-10">
          {/* Input Boxes (Full Name, Email) */}
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full sm:w-[48%] p-6 text-lg text-black bg-white border-2 border-gray-400 rounded-lg mb-4"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              className="w-full sm:w-[48%] p-6 text-lg text-black bg-white border-2 border-gray-400 rounded-lg mb-4"
            />
          </div>

          {/* Input Boxes (Phone Number, Email Subject) */}
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full sm:w-[48%] p-6 text-lg text-black bg-white border-2 border-gray-400 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full sm:w-[48%] p-6 text-lg text-black bg-white border-2 border-gray-400 rounded-lg mb-4"
            />
          </div>

          {/* Textarea for Message */}
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            className="w-full p-6 text-lg text-black bg-white border-2 border-gray-400 rounded-lg mb-4"
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            value="Send Message"
            className="w-full sm:w-auto py-3 px-8 text-lg bg-black text-white rounded-lg cursor-pointer hover:bg-[#006d9f] transition-all"
          />
        </form>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Contact;
