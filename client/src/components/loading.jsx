import React from "react";
import "ldrs/bouncy";

// Default values shown

const Loading = () => {
  return (
    <div className="grid h-full w-full place-items-center place-self-center">
      <l-bouncy size="150" speed="1.5" color="#571cbd"></l-bouncy>
    </div>
  );
};

export default Loading;
