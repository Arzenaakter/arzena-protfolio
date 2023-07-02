import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <>
      <div className=" w-full mx-auto" id="banner">
        <div className="grid grid-cols-1 lg:grid-cols-2  px-10 lg:px-0">
          <div className="mt-28  relative z-10 w-80 lg:ms-36  flex justify-center items-center mb-28 lg:mb-0 avatar ">
            <motion.div
              className="rounded-full lg:w-64 w-52 absolute  mt-48 lg:mt-0 "
              initial={{ opacity: 0 }}
              whileHover={{
                scale: 1.2,
              }}
              whileInView={{
                opacity: 1,
                scale: 1.1,
                boxShadow: "0 0 8px #e0176b",
              }}
              transition={{ delay: 0.5, duration: 1.5 }}>
              <img
                src="https://i.ibb.co/NmtT9vw/305428727-821003419104941-8938889378099885696-n.jpg"
                alt=""
                className="   "
              />
            </motion.div>
          </div>
          <motion.div
            className="mt-28   space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 1.5 }}>
            <p className="text-[14px] font-thin">Hi, I am</p>
            <h1 className="text-3xl  ">Arzena AKter</h1>
            <TypeAnimation
              className="text-gradient mt-2"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "I'm a Web Developer",
                1000,
                "I'm a Full Stack Developer",
                1000,
                "I'm a MERN Stack Developer",
                1000,
                "I'm a Front-end Developer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "26px" }}
              repeat={Infinity}
            />
            <p className="text-[13px] font-thin text-justify">
              As a MERN stack developer, I aim to contribute my technical skills
              to develop innovative web applications. I seek a dynamic team in a
              progressive organization that values growth and creativity. I aim
              to gain hands-on experience in scalable solutions using the MERN
              technology stack, enhancing proficiency in front-end, back-end,
              database management, and API integration.{" "}
            </p>
            <a
              href="/public/Resume-Arzena.pdf"
              className="border-gradient  p-2 w-52 flex gap-3 btn-hover">
              Download Resume <FaDownload />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
