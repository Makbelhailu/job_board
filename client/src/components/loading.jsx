import React from "react";
import "ldrs/grid";

// Default values shown

const Loading = () => {
  return (
    <div className="grid h-full w-full place-items-center place-self-center">
      <l-grid size="250" speed="1.5" color="#571cbd"></l-grid>
    </div>
  );
};

export default Loading;
