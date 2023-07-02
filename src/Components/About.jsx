import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-20 px-10 lg:px-0">
      <h1 className="title ">About Me</h1>
      <div className="lg:flex gap-10 mt-8">
        <div
          className="lg:w-[60%] space-y-5 lg:mb-0 mb-10"
          data-aos="fade-right">
          <p className="text-[13px] font-thin text-justify">
            I am <span className=" text-xl ">Arzena Akter</span>, from Bogura,
            Bangladesh. I completed my BSc in Computer Science and Engineering
            from Pundra University of Science and Technology. I have also
            completed a web development course to further enhance my skills in
            this field. I am a dedicated learner, constantly seeking
            opportunities to expand my knowledge and stay up to date with the
            latest trends. I possess excellent problem-solving and communication
            skills, collaborating effectively and delivering high-quality
            solutions. I am detail-oriented, committed to meeting deadlines, and
            strive for excellence in my work.
          </p>
          <Link
            to="https://drive.google.com/file/d/1OAHeh_D9-thBYcTqQDriaXy5FjUint-j/view?usp=sharing"
            target="_blank"
            className="border-gradient  p-2 w-48 flex gap-3 btn-hover items-center">
            View Resume <BsArrowUpRight size="24px" />
          </Link>
        </div>
        <div className="space-y-4" data-aos="fade-left">
          <p className="flex gap-3 items-center ">
            <AiOutlineMail size="24px" color="#e0176b" />
            <span>arzenaakter@gmail.com</span>
          </p>
          <p className="flex gap-3 items-center ">
            <AiOutlinePhone size="24px" color="#e0176b" />
            <span>+8801766179470</span>
          </p>
          <Link
            to="https://www.linkedin.com/in/arzena-akter-b43a47169/"
            target="_blank"
            className="flex gap-3 items-center ">
            <AiOutlineLinkedin size="24px" color="#e0176b" />
            <span>LinkedIn</span>
          </Link>
          <Link
            to="https://github.com/Arzenaakter"
            target="_blank"
            className="flex gap-3 items-center  ">
            <AiOutlineGithub size="24px" color="#e0176b" />
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
