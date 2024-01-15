import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessages from "./ChatMessages";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-[20rem] h-[500px] bg-slate-100 ml-2 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((e, i) => (
          <ChatMessages name={e.name} message={e.message} />
        ))}
      </div>
      <form
        className="p-2 m-2 border rounded-sm border-red-600 w-[20rem] "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Alish Rawat",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-[13rem] border rounded-sm border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="font-sans bg-slate-300 mx-4 px-2 py-1 rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
