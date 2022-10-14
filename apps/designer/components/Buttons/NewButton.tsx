const NewButton = ({
  newButtonClick,
}: {
  newButtonClick: CallableFunction;
}) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-12 font-light font-Roboto  text-[20px] leading-6 text-center bg-[#D9D9D9] rounded-[15px]"
      onClick={() => {
        newButtonClick();
      }}
    >
      New
    </button>
  );
};

export default NewButton;