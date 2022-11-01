import React from "react";
const SaveNumberForm = () => {
  return (
    <div className="flex flex-col items-center justify-between md:gap-10 gap-6">
      <h1 className="text-2xl font-normal font-Roboto">Save</h1>
      <p className="text-base md:text-lg font-normal text-center w-80 font-Bodoni">
        Design unique homes,
        <br /> Save the homes of your dreams,
      </p>
      <div className="flex flex-col justify-start gap-1 w-[80%] md:w-full">
        <p className="text-base md:text-lg font-light font-Roboto">
          Phone Number
        </p>

        <input
          type="text"
          className="w-full outline-0 p-[9px_14px] text-base md:text-lg rounded-[10px] border-[1px] border-zinc-300 bg-gray-100 h-9"
          placeholder="09894323233"
        />
      </div>
    </div>
  );
};

export default SaveNumberForm;