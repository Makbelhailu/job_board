import React from "react";
import classNames from "classnames";

const MyButton = ({ children, colored, className }) => {
  const defaultClasses = `rounded-full border-2 bg-white ${colored ? `border-secondary text-secondary hover:text-white` : `hover:border-secondary`} mx-2 px-7 py-2 hover:bg-secondary hover:text-white`;
  const combinedClasses = classNames(defaultClasses, className);
  return <button className={combinedClasses}>{children}</button>;
};

export default MyButton;
