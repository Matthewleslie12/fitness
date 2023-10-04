// import CountdownTimer from "../CountdownTimer/CountdownTimer";
import * as icons from "../../assets/icons/homeMenu";

const WorkoutCard = () => {
  return (
    <div className="bg-darkGray w-full h-20 rounded-xl items-center flex mt-5 justify-end">
      <div className="flex ml-3 gap-3 mx-auto">
        <img
          src="https://http.cat/300"
          alt=""
          className="w-20 h-16 rounded-xl"
        />
        <div className="flex-col">
          <h3 className="">Crunches</h3>
          {/* <CountdownTimer /> */}
        </div>
      </div>
      <button className="rounded-full bg-primaryBlack h-7 w-7 mr-3 cursor-pointer">
        <img src={icons.play} alt="" className="w-2 h-2 m-auto" />
      </button>
    </div>
  );
};

export default WorkoutCard;
