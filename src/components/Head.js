import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEACCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice.";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEACCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-5 py-3 m-2 shadow-md ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="Youtube-logo"
            src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-2/3 px-7 font-sans border text-lg border-gray-400 py-[.40rem] rounded-l-full focus:outline-blue-300"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-[.40rem]  rounded-r-full bg-gray-200   px-5 text-lg font-bold">
            &#128269;
          </button>
          {showSuggestions && (
            <ul className="absolute bg-white py-2 px-4 mx-1 w-[26rem] shadow-lg rounded-lg border border-gray-200">
              {suggestions.map((i) => (
                <li
                  key={i}
                  className="m-2 text-lg font-sans shadow-sm hover:bg-gray-100"
                >
                  &#128269; {i}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex  space-x-8 ">
        <img
          className="h-7 w-7 cursor-pointer mt-2 srounded-full"
          alt="user-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
        />
        <img
          className="h-8 w-7 cursor-pointer mt-1 shadow-lg rounded-full"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png"
        />
        <img
          className="h-9 cursor-pointer  shadow-sm rounded-full"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYJibbTF4B6wBX3SAHyL2HI7FR_TuDl_y9A&usqp=CAU "
        />
      </div>
    </div>
  );
};

export default Head;
