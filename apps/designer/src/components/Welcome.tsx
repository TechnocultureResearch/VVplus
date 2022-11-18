import React from "react";
import Card from "./Cards/Card";
import SelectionPanel from "./SelectionPanel";

interface WelcomePanelProps {
  isWelcomePanelActive: boolean;
  handleClickOnWelcome: () => void;
  isToggled: boolean;
  handleClickForToggle: () => void;
}
//Todo : Animation when open the welcome component

const Welcome = ({
  isWelcomePanelActive,
  handleClickOnWelcome,
  isToggled,
  handleClickForToggle,
}: WelcomePanelProps) => {
  return window.innerWidth < 768 && isWelcomePanelActive === true ? (
    <div className="z-30 flex gap-2 px-6 mt-[45vh] box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x md:hidden whitespace-nowrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  ) : (
    <div>
      <div
        // onClick={() => {
        //   isWelcomePanelActive === true ? handleClickForToggle() : "";
        // }}
        className={`
          z-[100] relative font-Roboto flex  py-2   w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[74vh] rounded-[20px]  
          ${!isWelcomePanelActive ? "items-center justify-center" : ""}
        ${
          isToggled === true && isWelcomePanelActive
            ? "bg-[#A6A6A6] translate-x-[47vw] !h-[113px] !w-[10px] mt-[30vh]   "
            : "bg-[#DADADA]   "
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "translate-x-[32vw] !h-fit  "
            : ""
        }
        `}
      >
        <div
          className={`cursor-pointer
      
      `}
          onClick={handleClickOnWelcome}
        >
          {isWelcomePanelActive === false ? (
            "Welcome"
          ) : isToggled ? (
            ""
          ) : (
            <div className="flex flex-col items-center ">
              <img
                className=" rounded-2xl w-[96%]  "
                src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
                alt=""
              />
              <SelectionPanel />
            </div>
          )}
        </div>
      </div>
      <div className="text-white z-[100] bg-red-300 h-10 w-32 font-Roboto">
        <div>Outdoor</div>
        <p>Floor1</p>
        <p>Floor2</p>
        <p>Floor3</p>
      </div>
    </div>
  );
};

export default Welcome;
