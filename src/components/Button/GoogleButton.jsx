const GoogleButton = ({onClick, text}) => {
  return (
    <button
      className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-darkGray hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      onClick={onClick}
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        className="w-6 h-6 "
        alt=""
      />{" "}
      <span>{text}</span>
    </button>
  );
};

export default GoogleButton;
