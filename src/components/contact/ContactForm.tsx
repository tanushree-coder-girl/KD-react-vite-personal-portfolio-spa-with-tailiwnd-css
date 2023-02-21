import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const formData = useRef<HTMLFormElement>(null);
  const [inProgess, setinProgess] = useState(false);

  const resetForm = () => {
    if (formData.current) {
      formData.current.user_name.value = "";
      formData.current.user_email.value = "";
      formData.current.message.value = "";
      formData.current.subject.value = "";
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (formData.current) {
      if (
        formData.current.user_name.value &&
        formData.current.user_email.value &&
        formData.current.subject.value &&
        formData.current.message.value
      ) {
        setinProgess(true);
        emailjs
          .sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formData.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              toast("Send successfully");
              setinProgess(false);
              resetForm();
            },
            (error) => {
              toast(error.text);
              setinProgess(false);
            }
          );
      } else {
        toast("All Fields are required!");
      }
    }
  };

  return (
    <form ref={formData} onSubmit={sendEmail} className="flex flex-col">
      <ToastContainer />

      <div className="relative mb-9">
        <label
          className="absolute text-slate-500 bg-white -top-4 left-5 z-99 pl-3 pr-3"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          className="w-full border-2 border-slate-400 px-7 py-3 rounded-md text-sm text-slate-900 font-Poppins"
          type="text"
          name="user_name"
        />
      </div>

      <div className="relative mb-9">
        <label
          className="absolute text-slate-500 bg-white -top-4 left-5 z-99 pl-3 pr-3"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          className="w-full border-2 border-slate-400 px-7 py-3 rounded-md text-slate-900"
          type="email"
          name="user_email"
        />
      </div>

      <div className="relative mb-9">
        <label
          className="absolute text-slate-500 bg-white -top-4 left-5 z-99 pl-3 pr-3"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          id="subject"
          className="w-full border-2 border-slate-400 px-7 py-3 rounded-md  text-slate-900"
          type="text"
          name="subject"
        />
      </div>

      <div className="relative mb-3">
        <label
          className="absolute text-slate-500 bg-white -top-4 left-5 z-99 pl-3 pr-3"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          id="message"
          className="w-full border-2 border-slate-400 text-slate-900 px-7 py-5 rounded-md"
          name="message"
        ></textarea>
      </div>

      <input
        type="submit"
        value="Send Message"
        disabled={inProgess}
        className={`btn_outlined mt-5 w-full ${
          !inProgess ? "cursor-pointer opacity-100" : "opacity-80"
        }`}
      />
    </form>
  );
}
