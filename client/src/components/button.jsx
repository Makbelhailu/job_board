import React from "react";
import classNames from "classnames";

const MyButton = ({ children, colored, className, onClick }) => {
  const defaultClasses = `bg-inherit rounded-full border-2 shadow-lg ${colored ? `border-secondary text-secondary hover:text-white` : `hover:border-secondary border-slate-500`} mx-2 px-7 py-2 hover:bg-secondary hover:text-white`;
  const combinedClasses = classNames(defaultClasses, className);
  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default MyButton;
