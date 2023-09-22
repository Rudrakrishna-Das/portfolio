"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import MailSentSuccess from "./MailSentSuccess";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    const data = {
      name: e.target.sendername.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      description: e.target.description.value,
    };

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const mailSent = await response.json();
    router.push("/mail-sent");
    setSending(false);
  };

  return (
    <section id="contact" className="text-right pt-16 mb-28">
      <h1 className="text-4xl font-extrabold mb-9 text-center">Contact</h1>
      <p className="mb-14  text-center">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="bg-white w-11/12 md:w-9/12 mx-auto p-10 rounded-md shadow-[1px_2px_12px_2px_black]">
        <form onSubmit={formSubmitHandler}>
          <div className="flex flex-col text-left text-sm my-3">
            <label htmlFor="name">Name</label>
            <input
              className="bg-gray-200 p-4 my-2 rounded-md outline-none"
              placeholder="Enter Your Name"
              type="text"
              id="name"
              name="sendername"
              required
            />
          </div>
          <div className="flex flex-col text-left text-sm">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-200 p-4 my-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col text-left text-sm my-3">
            <label htmlFor="subject">Subject</label>
            <input
              className="bg-gray-200 p-4 my-2 rounded-md outline-none"
              placeholder="Enter Your Subject"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>

          <div className="flex flex-col text-left text-sm">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter Your Message"
              id="message"
              name="description"
              required
              className="bg-gray-200 w-full h-[20rem] resize-none my-2 rounded-md outline-none p-4"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={`${
              sending
                ? "py-2 px-8 border rounded-md bg-slate-500 border-slate-500 "
                : "py-2 px-8 border rounded-md bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500"
            }`}
          >
            {`${sending ? "Sending" : "Submit"}`}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
