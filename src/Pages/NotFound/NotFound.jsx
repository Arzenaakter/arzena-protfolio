import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-0 overflow-hidden">
      <div className="flex justify-center  ">
        <img
          src="https://design4users.com/wp-content/uploads/2017/02/webdesign-404.gif"
          alt="404 page"
        />
      </div>
      <Link to="/">
        {" "}
        <button className="border-gradient my-4 p-2 btn-hover ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
