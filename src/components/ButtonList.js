import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",

  "Funny",
  "Javascript",
];

const ButtonList = () => {
  return (
    <div className="flex sm:m-3 overflow-y-auto w-[26rem] sm:w-full border border-orange-800">
      {list.map((list, i) => (
        <Button key={i} name={list} />
      ))}
    </div>
  );
};
// const ButtonList = () => {
//   return (
//     <div className="flex">
//       <Button name="All" />
//       <Button name="Gaming" />
//       <Button name="Songs" />
//       <Button name="Live" />
//       <Button name="Soccer" />
//       <Button name="Cooking" />
//       <Button name="Cricket" />
//       <Button name="News" />
//     </div>
//   );
// };

export default ButtonList;
