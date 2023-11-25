import React from "react";

const CommentsData = [
  {
    name: "Alish",
    comnt: "Hi I'm from Pauri Garhwal",
    reply: [
      {
        name: "Alish",
        comnt: "Hi I'm from Pauri Garhwal",
        reply: [],
      },
      {
        name: "Alish",
        comnt: "Hi I'm from Pauri Garhwal",
        reply: [
          {
            name: "Alish",
            comnt: "Hi I'm from Pauri Garhwal",
            reply: [
              {
                name: "Alish",
                comnt: "Hi I'm from Pauri Garhwal",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Gaurav",
    comnt: "Hi I'm from Pauri Garhwal",
    reply: [
      {
        name: "Alish",
        comnt: "Hi I'm from Pauri Garhwal",
        reply: [
          {
            name: "Alish",
            comnt: "Hi I'm from Pauri Garhwal",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rahul",
    comnt: "Hi I'm from Pauri Garhwal",
    reply: [
      {
        name: "Alish",
        comnt: "Hi I'm from Pauri Garhwal",
        reply: [],
      },
      {
        name: "Alish",
        comnt: "Hi I'm from Pauri Garhwal",
        reply: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comnt } = data;
  return (
    <div className="flex px-1 ml-8 my-2 bg-gray-100 rounded-md shadow-sm">
      <img
        className="w-9 h-9 my-1"
        alt="php"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-1 py-1">
        <h1 className="font-bold text-lg font-sans">{name}</h1>
        <h2 className="text-md font-serif">- {comnt}</h2>
      </div>
      {/* <Comment /> */}
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="ml-10 border  border-l-black">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="pl-6 text-3xl font-bold">Comments :</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
