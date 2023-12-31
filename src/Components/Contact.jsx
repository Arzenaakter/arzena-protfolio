import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-20 px-10 lg:px-0 " id="contact">
      <h1 className="title ">Contact Me</h1>
      <motion.hr
        className="  border-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      <div className="relative z-10  bg-opacity-30 bg-black mt-10">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1 }}
          action="https://formspree.io/f/xrgwzdqq"
          method="POST"
          className="grid grid-cols-1 p-10 gap-10 items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <input
              name="name"
              type="text"
              placeholder="Your Name "
              className="p-4 bg-black border-gradient "
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-4 bg-black border-gradient "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="p-4 bg-black border-gradient "
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-4 bg-black border-gradient "
            />
          </div>
          <input
            name="message"
            type="text"
            placeholder="Message"
            className="px-4 py-10   bg-black border-gradient "
          />
          <button className="btn-hover py-2  border-gradient bg-black ">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
