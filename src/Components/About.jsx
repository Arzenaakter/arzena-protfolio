import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-20 px-10 lg:px-0" id="about">
      <h1 className="title ">About Me</h1>
      {/* <motion.hr
        className="  border-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      /> */}

      <div className="lg:flex gap-10 mt-8">
        <div
          className="lg:w-[60%] space-y-5 lg:mb-0 mb-10"
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-[13px] font-thin text-justify">
            I am <span className="text-xl">Arzena Akter</span>, a skilled
            Frontend Developer from Bogura, Bangladesh. I hold a BSc in Computer
            Science and Engineering from Pundra University of Science and
            Technology and have completed a web development course from
            Programming Hero. With professional experience in designing and
            developing web applications, I specialize in React.js, Next.js,
            Redux, ant Design and Tailwind CSS. I have successfully contributed
            to projects by building responsive user interfaces, implementing
            complex features, and collaborating with cross-functional teams. I
            am detail-oriented, committed to meeting deadlines, and passionate
            about delivering innovative and high-quality solutions.
          </p>

          <Link
            to="https://drive.google.com/file/d/1M4giSkDOrlTYjBPgmATCUTm1OUhFSjdt/view?usp=sharing"
            target="_blank"
            className=" bg-[#433bff] rounded-[10px]  p-2 w-52 flex gap-3 btn-hover"
          >
            View Resume <BsArrowUpRight size="24px" />
          </Link>
        </div>
        <div
          className="space-y-4"
          initial={{ x: "100%" }}
          whileInView={{ x: "0" }}
          transition={{ duration: 1.5 }}
        >
          <p className="flex gap-3 items-center ">
            <AiOutlineMail size="24px" color="#433bff" />
            <span>arzenaakter@gmail.com</span>
          </p>
          <p className="flex gap-3 items-center ">
            <AiOutlinePhone size="24px" color="#433bff" />
            <span>+8801766179470</span>
          </p>
          <a
            href="https://www.linkedin.com/in/arzena-akter-b43a47169/"
            className="flex gap-3 items-center "
          >
            <AiOutlineLinkedin size="24px" color="#433bff" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Arzenaakter"
            className="flex gap-3 items-center  "
          >
            <AiOutlineGithub size="24px" color="#433bff" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
