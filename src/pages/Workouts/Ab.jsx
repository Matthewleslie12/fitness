import {useEffect, useState} from "react";
import {left} from "../../assets/icons/homeMenu";
import {useNavigate} from "react-router-dom";
import Bubbles from "../../components/WorkoutBubble/Bubbles";
import WorkoutCard from "../../components/Cards/WorkoutCard";
import BeginBar from "../../components/BottomBar/BeginBar";

const Ab = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const [abWorkout, setAbWorkout] = useState(null);

  useEffect(() => {
    fetchAbWorkout();
  }, []);

  const fetchAbWorkout = () => {
    fetch("http://127.0.0.1:5000/exercises/ab-attack")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from API:", data);
        setAbWorkout(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  if (!abWorkout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primaryBlack z-10">
      <div className="px-4 pt-6 text-white ">
        <div className="flex pb-3">
          <img
            src={left}
            alt=""
            className="w-6 h-6 hover:cursor-pointer"
            onClick={back}
          />
          <h1 className="ml-20">{abWorkout.name}</h1>
        </div>
        <img src={abWorkout.image_url} alt="" className="rounded-lg" />
        <div className="flex justify-center">
          <Bubbles timeText={abWorkout.time} calorieText={abWorkout.calories} />
        </div>
        <h2 className="capitalize pt-4 pb-2 text-2xl font-extrabold">
          {abWorkout.part}
        </h2>
        <p className="text-sm opacity-50">{abWorkout.description} </p>
        <div className="flex justify-between pt-10">
          <h2 className="text-xl">Rounds</h2>
          <p className="">1/5</p>
        </div>
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <BeginBar />
      </div>
    </div>
  );
};

export default Ab;
