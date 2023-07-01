import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-20 ">
      <h1 className="title ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 overflow-hidden relative">
        {/* card1 */}
        <div className="border-gradient ">
        <div className="relative max-w-full h-72 overflow-hidden ">
          <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
            <img
              src="https://i.ibb.co/0cPt7xX/ass-12.png"
              alt=""
              className="w-full object-cover object-top"
            />
          </div>
          
        </div>

        <div className="border-card p-4 space-y-5">
            <div>
            <p className=""> <span className="text-gradient text-3xl">SketchVenture</span></p>
            <p className=""><span className="text-gradient text-xl">Technologies:</span> <br /> <span className="text-[13px] font-thin text-justify">HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React Hook, Rest API, JWT, Axios, Tanstack Query,
Stripe, ExpressJs, MongoDB.</span></p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
                <Link to='https://summer-camp-44ba3.web.app/' target='_blank' className="text-gradient  "><span>Live</span></Link>

                <Link to='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Client</span></Link>

                <Link to='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Server</span></Link>
                
            </div>
            
          </div>
        </div>
          {/*card end  */}
        {/* card 2 */}
        <div className="border-gradient ">
        <div className="relative max-w-full h-72 overflow-hidden ">
          <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
            <img
              src="https://i.ibb.co/34QLWCQ/troytove.png"
              alt=""
              className="w-full object-cover object-top"
            />
          </div>
          
        </div>

        <div className="border-card p-4 space-y-5">
            <div>
            <p className=""> <span className="text-gradient text-3xl">TroyTove</span></p>
            <p className=""><span className="text-gradient text-xl">Technologies:</span> <br /> <span className="text-[13px] font-thin text-justify">HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React Hook, Rest API, ExpressJs, MongoDB.</span></p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
                <Link to='https://toytrove.web.app/' target='_blank' className="text-gradient  "><span>Live</span></Link>

                <Link to='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Client</span></Link>

                <Link to='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Server</span></Link>
                
            </div>
            
          </div>
        </div>
          {/*card end  */}
        {/* card 3 */}
        <div className="border-gradient ">
        <div className="relative max-w-full h-72 overflow-hidden ">
          <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] ">
            <img
              src="https://i.ibb.co/Ms9Lxsd/food.png"
              alt=""
              className="w-full object-cover object-top"
            />
          </div>
          
        </div>

        <div className="border-card p-4 space-y-5">
            <div>
            <p className=""> <span className="text-gradient text-3xl">FoodieFranzy</span></p>
            <p className=""><span className="text-gradient text-xl">Technologies:</span> <br /> <span className="text-[13px] font-thin text-justify">HTML, Tailwind CSS, Daisy UI, ReactJS, React Router, React Hook, Rest API, ExpressJs, MongoDB.</span></p>
            </div>
            <div className="flex  gap-4 items-center text-xl">
                <Link to='https://foodie-franzy.web.app/' target='_blank' className="text-gradient  "><span>Live</span></Link>

                <Link to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Client</span></Link>

                <Link to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Arzenaakter' target='_blank'className="text-gradient  flex items-center gap-2"><AiOutlineGithub size="24px" color="#e0176b" /><span>Server</span></Link>
                
            </div>
            
          </div>
        </div>
          {/*card end  */}
      </div>
    </div>
  );
};

export default Projects;
