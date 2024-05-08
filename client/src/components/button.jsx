import React from "react";

const Button = ({ content, colored }) => {
  return (
    <div>
      <button
        className={`rounded-full border-2 bg-white ${colored ? `border-secondary text-secondary ` : `hover:border-secondary`} mx-2 px-7 py-2 hover:bg-secondary hover:text-white`}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
