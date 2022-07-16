import React from "react";
import { Link, useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();
  return (
    <div>
      <div className=" mt-10 w-full  ">
        <h1 className=" font-bold text-6xl lg:text-8xl text-gray-300 text-center pt-8 mb-0 ">
          404
        </h1>

        <h1 className="font-bold text-gray-400 text-4xl text-center mt-8 mb-20">
          Oops! Page Not Found
        </h1>
        <div className="text-center w-full  border-grey-100 flex p-10 flex justify-center items-center font-sans">
          <Link
            to="/"
            className="mx-50 text-white font-bold hover:underline text-lg mr-20 hover:text--300"
          >
            Home
          </Link>
          <button
            className="p-2 my-10 w-20 text-white text-lg px-5 hover:underline rounded-lg font-bold"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
