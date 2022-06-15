import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [bValue, setBValue] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8f6j62j",
        "template_hwta26s",
        e.target,
        "5i_c2wSvuWA77QWdm"
      )
      .then((res) => {
        setSubmitted(true);
        setBValue("Sended");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Send Me a Message
            </h2>
            <p className="font-medium text-md  text-secondary md:text-lg">
              You can send me a message if you interest with me. I will check my
              email as soon as possible, thank you.
            </p>
          </div>
        </div>

        <form onSubmit={sendEmail}>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none rocus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none rocus:ring-primary focus:ring-1 focus:border-primary "
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base text-primary font-bold"
              >
                Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none rocus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <input
                type="submit"
                className={
                  !submitted
                    ? "text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"
                    : "text-base font-semibold text-white bg-teal-200 py-3 px-8 rounded-full transition duration-500"
                }
                value={bValue}
                disabled={submitted}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
