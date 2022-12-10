import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-[#14213d] to-black flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9bf7c151-18f7-433d-bbe2-9fdb40f356b4"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#fca311]">
            Contact
          </p>
          <p className="text-gray-300 py-3">Let's contact through Email</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="button mt-3">
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
