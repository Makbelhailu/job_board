import React from "react";
import "ldrs/bouncy";

// Default values shown

const Loading = ({ size = 150 }) => {
  return (
    <div className="grid h-full w-full place-items-center place-self-center">
      <l-bouncy size={`${size}`} speed="1.5" color="#571cbd"></l-bouncy>
    </div>
  );
};

export default Loading;
