import { FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <>
      <div className=" w-full mx-auto   ">
        <div className="flex justify-between mx-10">
          <motion.div
            className="mt-28 w-[30%] h-72 relative border-gradient"
            initial={{ opacity: 0 }}
            whileHover={{
              scale: 1.2,
              
            }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            <img
              src="https://i.ibb.co/Hgj595C/20221211-125110-removebg-preview.png"
              alt=""
              className=" -mt-[88px]  rounded-md absolute "
            />
          </motion.div>
          <motion.div className="mt-28  w-[65%] space-y-3"
           initial={{ opacity: 0 }}
         
           animate={{ opacity: 1,scale: 0.9 }}
           transition={{ delay: 0.6, duration: 1 }}
          
          >
          
            <p className="text-[14px] font-thin">Hi, I am</p>
            <h1 className="text-3xl  ">Arzena AKter</h1>
            <TypeAnimation className='text-gradient mt-2'
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
            <a href='/public/Resume-Arzena.pdf' className="border-gradient p-2 w-52 flex gap-3">Download Resume <FaDownload/></a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
