import { AiOutlineGithub } from "react-icons/ai";
// import { a } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-20 px-10 lg:px-0 " id="project">
      <h1 className="title ">Projects</h1>
      <motion.hr
        className="  border-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 1, duration: 1.5 }}
      />
      <div className="grid grid-cols-1   gap-8 mt-10 overflow-hidden relative">
        {/* card1 */}
        <motion.div
          className="border-gradient lg:flex lg:h-96 gap-5 "
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          whileHover={{
            scale: 0.9,
            boxShadow: "0 0 8px #e0176b",
          }}
          transition={{ duration: 1 }}>
          <div className="relative max-w-full lg:h-full h-52  overflow-hidden ">
            <div className=" w-full   transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/0cPt7xX/ass-12.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className=" lg:pt-3 p-5 lg:p-0 space-y-5">
            <div>
              <p className="">
                {" "}
                <span className="text-gradient text-3xl">SketchVenture</span>
              </p>
              <p className="">
                <span className="text-gradient text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] font-thin space-y-2">
                  <li>
                    The website about summer camp school allows students href
                    enroll and learn specific extra-curricular activities.
                  </li>
                  <li>
                    Conditional-based dashboard with different roles: Admin role
                    (admin email: arzena@gmail.com and password: 123@aA),
                    Instruchrefr role, Student role.
                  </li>
                  <li>
                    Admin role functionalities: Manage all users, Manage all
                    classes added by instruchrefrs Instruchrefr role
                    functionalities: Add classes, View their added classes and
                    also Student role functionalities: Select a class, Delete
                    selected class, Enroll in a class, Proceed href payment,
                    Complete the checkout process, Access payment hishrefry.
                  </li>
                </span>
              </p>
              <p className="">
                <span className="text-gradient text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] font-thin text-justify">
                  HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React
                  Hook, Rest API, JWT, Axios, Tanstack Query, Stripe, ExpressJs,
                  MongoDB.
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
              <Link
                to="https://summer-camp-44ba3.web.app/"
                target="_blank"
                className="text-gradient  ">
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/sketchventure-client-site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/sketchventure-server-site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </motion.div>
        {/*card end  */}
        {/* card 2 */}
        <motion.div
          className="border-gradient lg:flex lg:h-96 gap-5 "
          initial={{ opacity: 0 }}
          whileHover={{
            scale: 0.9,
            boxShadow: "0 0 8px #e0176b",
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 1 }}>
          <div className="relative max-w-full lg:h-full h-52 lg:w-[44%] overflow-hidden ">
            <div className=" w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/HzgVT3J/troytove.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className=" p-4 space-y-5">
            <div>
              <p className="">
                {" "}
                <span className="text-gradient text-3xl">TroyTrove</span>
              </p>
              <p className="">
                <span className="text-gradient text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] font-thin space-y-2">
                  <li>
                    The website about toys is called TroyTrove, which means a
                    collection of toys..
                  </li>
                  <li>Users can add, update and delete toys.</li>
                  <li>
                    Implemented Firebase Auth for secure user authentication and
                    MongoDB for efficient data storage..
                  </li>
                </span>
              </p>

              <p className="">
                <span className="text-gradient text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] font-thin text-justify">
                  HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React
                  Hook, Rest API, ExpressJs, MongoDB.
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
              <Link
                to="https://toytrove.web.app/"
                target="_blank"
                className="text-gradient  ">
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/ToyTrove-Client-site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/ToyTrove-Server-site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </motion.div>
        {/*card end  */}
        {/* card 3 */}
        <motion.div
          className="border-gradient lg:flex lg:h-96 gap-5 "
          initial={{ x: "100%" }}
          whileInView={{ x: "0" }}
          whileHover={{
            scale: 0.9,
            boxShadow: "0 0 8px #e0176b",
          }}
          transition={{ duration: 1 }}>
          <div className="relative max-w-full lg:h-full h-52 lg:w-[44%] overflow-hidden">
            <div className=" w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/Ms9Lxsd/food.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className="p-4 space-y-5">
            <div>
              <p className="">
                {" "}
                <span className="text-gradient text-3xl">FoodieFranzy</span>
              </p>
              <p className="">
                <span className="text-gradient text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] font-thin space-y-2">
                  <li>
                    This project shows the recipes of all available chefs.
                  </li>
                  <li>
                    Implemented Firebase Auth for secure user authentication and
                    MongoDB for efficient data storage.
                  </li>
                  <li>
                    Users can see details about chefs if he/she logged in.
                  </li>
                </span>
              </p>
              <p className="">
                <span className="text-gradient text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] font-thin text-justify">
                  HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React
                  Hook, Rest API, ExpressJs, MongoDB.
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
              <Link
                to="https://foodie-franzy.web.app/"
                target="_blank"
                className="text-gradient  ">
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/Foodie-Franzy-Client-site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/Foodie-Franzy-Server_site"
                target="_blank"
                className="text-gradient  flex items-center gap-2">
                <AiOutlineGithub size="24px" color="#e0176b" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </motion.div>
        {/*card end  */}
      </div>
    </div>
  );
};

export default Projects;
