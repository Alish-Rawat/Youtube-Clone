import React from "react";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 cursor-pointer  shadow-sm rounded-full"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYJibbTF4B6wBX3SAHyL2HI7FR_TuDl_y9A&usqp=CAU "
      />
      <span className="font-bold px-2"> {name}</span>
      <span className=""> {message}</span>
    </div>
  );
};

export default ChatMessages;
