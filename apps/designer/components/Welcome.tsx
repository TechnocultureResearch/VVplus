import React from "react";

const Welcome = ({ isActive, welcomeClick }: any) => {
  return (
    <div
      className="flex items-center justify-center mx-auto duration-300 bg-gray-100 rounded-xl w-96 "
      style={{
        height: "800px",
        marginRight: isActive ? "3%" : "",
        width: isActive ? "400px" : "",
      }}
    >
      <h2
        className="cursor-pointer"
        onClick={() => {
          welcomeClick();
        }}
      >
        {isActive === false ? "Welcome " : ""}
      </h2>
    </div>
  );
};

export default Welcome;
