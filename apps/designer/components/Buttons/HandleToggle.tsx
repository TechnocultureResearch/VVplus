import React from "react";

const HandleToggle = ({
  isToggled,
  handleClickForToggle,
}: {
  isToggled: boolean;
  handleClickForToggle: CallableFunction;
}) => {
  return (
    <button
      className={` hidden md:flex justify-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px]   bg-gray-400 
              ${
                isToggled === true
                  ? "bg-[#D9D9D9]  ease-in"
                  : "bg-[#A6A6A6]    ease-out"
              }`}
      onClick={() => {
        handleClickForToggle(isToggled);
      }}
    >
      {isToggled === false ? "-" : "+"}
    </button>
  );
};

export default HandleToggle;