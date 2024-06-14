import Navbar from "./Navbar";
import Lottie from "react-lottie";
import animationData from "./contact.json";
import img from "../assets/Pictures/email.png";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //   email js work

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f6hsszv", "template_urcqftu", form.current, {
        publicKey: "L9WhiTb_XFKVuQJ2l",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully send message");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message not send");
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>Portfolio | Contact</title>
      </Helmet>
      <Navbar></Navbar>
      {/* contact me  */}

      <section className="w-11/12  lg:w-10/12 py-6  mx-auto grid grid-cols-1  lg:grid-cols-2  items-center   ">
        <div>
          <h2 className="mb-10 text-basic font-bold lg:text-4xl text-3xl">
            {" "}
            Contact With Me{" "}
          </h2>
          <div>
            <h2 className=" font-bold text-2xl">Email</h2>
            <p className="text-white/80  text-sm lg:text-base">
              emonhossen1000@gmail.com(Recommended)
            </p>
            <h2 className=" font-bold mt-5 text-2xl">Social</h2>
            <p className="flex gap-5">
              <a
                className="underline text-blue-400 font-bold text-xl"
                href="https://www.linkedin.com/in/mohammademon92/"
              >
                Linkedin
              </a>
              <a
                className="underline text-blue-400 font-bold text-xl"
                href="https://github.com/EmonHossen10"
              >
                Github
              </a>
            </p>

            <h2 className=" font-bold mt-5 text-2xl">Location</h2>
            <p className="text-white/80">
              Gazipur City Corporation, Gazipur,Bangladesh
            </p>
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </section>
      {/* get in touch */}
      <h2 className="text-3xl  lg:text-5xl text-center font-bold">
        {" "}
        Get In Touch
      </h2>

      <section className="w-11/12 lg:w-10/12 py-6 mx-auto flex  flex-col  items-center gap-10 lg:flex-row">
        {/* img part */}
        <div>
          <img className="rounded-xl" src={img} alt="" />
        </div>

        {/* form start */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="card-body lg:w-6/12 mx-auto   rounded-xl pt-10"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-2xl">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name "
              className="input input-bordered text-black input-accent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-2xl">
                {" "}
                Your Email
              </span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="abc@gmail.com"
              className="input input-bordered text-black input-accent"
              required
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-2xl">
                Subject
              </span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent text-black  "
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-2xl">
                Message
              </span>
            </label>
            <textarea
              className="textarea textarea-success text-black h-48 "
              placeholder="Message"
              name="message"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className=" bg-basic py-3 font-bold text-xl rounded-xl text-black ">
              Send Message
            </button>
          </div>
        </form>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Contact;
