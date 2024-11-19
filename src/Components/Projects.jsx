import { AiOutlineGithub } from "react-icons/ai";
// import { a } from "react-router-dom";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-20 px-10 lg:px-0 " id="project">
      <h1 className="title ">Projects</h1>
      {/* <motion.hr
        className="  border-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 1, duration: 1.5 }}
      /> */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 mt-10  relative">
        {/* card1 */}
        <div className="bg-[#111118] shadow-2xl rounded-md h-[600px]  p-4">
          <div
            className=" h-[30%]  overflow-hidden  "
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 0 8px #e0176b",
            }}
            transition={{ duration: 1 }}
          >
            <div className=" w-full   transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/0cPt7xX/ass-12.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className=" h-[65%]  space-y-5 mt-2 ">
            <div>
              <p className="">
                {" "}
                <span className="primary-text text-3xl">SketchVenture</span>
              </p>
              <p className="">
                <span className="primary-text text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] font-thin space-y-2 secondary-text">
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
                <span className="primary-text text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] secondary-text font-thin text-justify">
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
                className="text-gray-400  "
              >
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/sketchventure-client-site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/sketchventure-server-site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </div>
        {/*card end  */}

        {/* card 2 */}
        <div className="bg-[#111118] shadow-2xl rounded-md h-[600px]  p-4">
          <div
            className=" h-[30%]  overflow-hidden  "
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 0 8px #e0176b",
            }}
            transition={{ duration: 1 }}
          >
            <div className=" w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/HzgVT3J/troytove.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className=" h-[65%]  space-y-5  mt-2 ">
            <div>
              <p className="">
                {" "}
                <span className="primary-text text-3xl">TroyTrove</span>
              </p>
              <p className="">
                <span className="primary-text text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] secondary-text font-thin space-y-2">
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
                <span className="primary-text text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] secondary-text font-thin text-justify">
                  HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React
                  Hook, Rest API, ExpressJs, MongoDB.
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
              <Link
                to="https://toytrove.web.app/"
                target="_blank"
                className="text-gray-400  "
              >
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/ToyTrove-Client-site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/ToyTrove-Server-site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </div>
        {/*card end  */}
        {/* card 3 */}
        <div className="bg-[#111118] shadow-2xl rounded-md h-[600px] p-4 ">
          <div
            className=" h-[30%]  overflow-hidden  "
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 0 8px #e0176b",
            }}
            transition={{ duration: 1 }}
          >
            <div className=" w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
              <img
                src="https://i.ibb.co/Ms9Lxsd/food.png"
                alt=""
                className="w-full object-cover object-hrefp"
              />
            </div>
          </div>

          <div className=" h-[65%]  space-y-5  mt-2">
            <div>
              <p className="">
                {" "}
                <span className="primary-text text-3xl">FoodieFranzy</span>
              </p>
              <p className="">
                <span className="primary-text text-lg">Features: </span> <br />{" "}
                <span className="text-[12px] secondary-text font-thin space-y-2">
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
                <span className="primary-text text-lg">Technologies:</span>{" "}
                <br />{" "}
                <span className="text-[12px] secondary-text font-thin text-justify">
                  HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React
                  Hook, Rest API, ExpressJs, MongoDB.
                </span>
              </p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
              <Link
                to="https://foodie-franzy.web.app/"
                target="_blank"
                className="text-gray-400  "
              >
                <span>Live</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/Foodie-Franzy-Client-site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Client</span>
              </Link>

              <Link
                to="https://github.com/Arzenaakter/Foodie-Franzy-Server_site"
                target="_blank"
                className="text-gray-400  flex items-center gap-2"
              >
                <AiOutlineGithub size="24px" color="#433bff" />
                <span>Server</span>
              </Link>
            </div>
          </div>
        </div>
        {/*card end  */}
      </div>
    </div>
  );
};

export default Projects;
