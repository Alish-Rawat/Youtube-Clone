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
    <div className="flex m-3">
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
