import * as icons from "../../assets/icons/homeMenu";
const Bubbles = ({calorieText, timeText}) => {
  const parentStyle = {
    background: "rgba(25,33,38, 0.3)",
  };
  return (
    <div
      className="w-64 h-16 -mt-8 border-neon border rounded-2xl text-white flex justify-evenly z-50 backdrop-blur-md"
      style={parentStyle}
    >
      <div className="flex flex-row items-center gap-x-3">
        <img src={icons.greenClock} alt="" className="w-8 h-8 rounded-md" />
        <div className="">
          <p className="text-xs">Time</p>
          <p className="text-neon">{timeText}</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-3">
        <img src={icons.calories} alt="" className="w-8 h-8 rounded-md" />
        <div className="">
          <p className="text-xs">Burn</p>
          <p className="text-neon">{calorieText}</p>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
