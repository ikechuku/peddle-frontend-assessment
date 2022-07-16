import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";


const App = () => {
  return (
    <nav className="bg-transparentflex items-center justify-between flex-wrap  p-6 py-0 sticky w-full text-xs">
      <div className="flex justify-between items-center w-full">
        <div>logo</div>
        <ul className="flex justify-around items-center  w-4/12">
          <li> <Link to="/about">ABOUT US</Link> </li>
          <li> <Link to="/blog">BLOG</Link> </li>
          <li className="p-3 bg-blue-900 rounded-full my-2"><Link to="/about">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
