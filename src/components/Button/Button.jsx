const Button = ({onClick, text}) => {
  return (
    <button
      className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
