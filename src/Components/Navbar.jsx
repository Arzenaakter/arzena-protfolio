import { Link } from "react-scroll";

const Navbar = () => {
  const menuLink = (
    <>
      <li>
        <Link
          to="banner"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={4000}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={4000}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="skill"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={4000}>
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="project"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={4000}>
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={4000}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      <header className=" navbar fixed container rounded-full px-5 mx-auto z-10   bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-10 p-2 shadow bg-black rounded-box w-52">
              {menuLink}
            </ul>
          </div>
          <Link to="/">
            <span className="  lg:text-4xl text-xl logo text-gradient font-bold">
              {" "}
              Arzena Akter
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-thin">{menuLink}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="resume-btn">Resume</a>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
