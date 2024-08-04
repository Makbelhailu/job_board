import React from "react";
import "ldrs/newtonsCradle";

// Default values shown

const Loading = () => {
  return (
    <div className="grid h-full w-full place-items-center place-self-center">
      <l-newtons-cradle
        size="250"
        speed="1.5"
        color="#571cbd"
      ></l-newtons-cradle>
    </div>
  );
};

export default Loading;
