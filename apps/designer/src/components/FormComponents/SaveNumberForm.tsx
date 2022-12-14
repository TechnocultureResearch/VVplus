import React from "react";
import { boolean } from "zod";
const SaveNumberForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const chk =
    /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/.test(
      inputValue
    );
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">Save</h1>
      <p className="text-base font-normal text-center md:text-lg font-Bodoni">
        Design unique homes,
        <br /> Save the homes of your dreams,
      </p>
      <div className="flex flex-col justify-start w-[300px] gap-1">
        <p className="text-base font-light md:text-lg font-Roboto">
          Phone Number
        </p>

        <input
          type="number"
          className="w-full outline-0 p-[9px_14px] text-base md:text-lg rounded-[10px] border-[1px] border-zinc-300 bg-gray-100 h-9"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          onChange={onChangeHandler}
          placeholder="123-45-678"
          value={inputValue}
          disabled={inputValue.length > 14 || chk}
        />
      </div>
    </div>
  );
};

export default SaveNumberForm;
