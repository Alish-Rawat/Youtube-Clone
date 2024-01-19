import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //   if (!isMenuOpen) return null;
  // (or)
  return !isMenuOpen ? null : (
    <div
      className="mx-4 p-6 shadow-lg w-[25rem] hidden lg:block
    "
    >
      <ul className="font-medium text-xl font-sans cursor-pointer">
        <Link to="/Youtube-Clone">
          <li className="shadow-sm py-2 hover:bg-gray-100"> Home</li>
        </Link>
        <li className="shadow-sm py-2 hover:bg-gray-100">Shorts</li>
        <li className="shadow-sm py-2 hover:bg-gray-100">Videos</li>
        <li className="shadow-sm py-2 hover:bg-gray-100">Live</li>
      </ul>
      <h1 className="font-medium text-xl pt-5">Subscriptions</h1>
      <ul className="text-lg p-1">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-medium text-xl  pt-5">Watch Later</h1>
      <ul className="text-lg p-1">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
