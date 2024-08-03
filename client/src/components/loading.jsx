import React from "react";
import "ldrs/grid";

// Default values shown

const Loading = () => {
  return (
    <div className="bg-gradient absolute left-0 top-0 grid h-full w-screen place-items-center">
      <l-grid size="250" speed="1.5" color="#fff"></l-grid>
    </div>
  );
};

export default Loading;
