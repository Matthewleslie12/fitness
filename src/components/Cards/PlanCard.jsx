import {useEffect, useState} from "react";
import {ProgressBar} from "../ProgressBar";
import {useNavigate} from "react-router-dom";

const PlanCard = () => {
  const [goals, setGoals] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:5000/goals")
      .then((response) => response.json())
      .then((data) => setGoals(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleGoals = () => {
    navigate("/selectedWorkout");
  };
  return (
    <div className="mb-80">
      {goals.map((goal, index) => (
        <div
          key={index}
          className="w-full bg-white h-32 rounded-3xl justify-center flex flex-col mb-5"
          onClick={handleGoals}
        >
          <li key={index} className="flex flex-row flex-none">
            <img
              src={goal.image_url}
              alt={goal.name}
              className="w-24 h-24 rounded-lg mx-3"
            />
            <div className="flex-col w-full pt-3">
              <h2 className="text-md font-bold">{goal.name}</h2>
              <p className="text-sm pb-4">{goal.goal}</p>
              <ProgressBar />
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
