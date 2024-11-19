// import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-20 px-10 lg:px-0 " id="contact">
      <h1 className="title ">Contact Me</h1>
      {/* <motion.hr
        className="  "
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      /> */}
      <div className="relative z-10  bg-opacity-30 bg-[#000] mt-10">
        <form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1 }}
          action="https://formspree.io/f/xrgwzdqq"
          method="POST"
          className="grid grid-cols-1 p-10 gap-10 items-center "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <input
              name="name"
              type="text"
              placeholder="Your Name "
              className="p-4 bg-[#111118]  "
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-4 bg-[#111118]  "
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="p-4 bg-[#111118]  "
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-4 bg-[#111118]  "
            />
          </div>
          <input
            name="message"
            type="text"
            placeholder="Message"
            className="px-4 py-10   bg-[#111118] "
          />
          <button className="btn-hover border-gradient  py-2   bg-[#111118]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
