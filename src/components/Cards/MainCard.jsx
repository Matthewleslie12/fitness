import {useState, useEffect} from "react";
import fire from "../../assets/icons/kcal.png";
import clock from "../../assets/icons/clock.png";
import Bubbles from "./Bubbles";

import {useNavigate} from "react-router-dom";

function MainCard() {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    fetch("http://127.0.0.1:5000/exercises")
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleWorkout = (exerciseId) => {
    navigate(`/exercises/${exerciseId}`);
  };

  return (
    <div>
      <ul className="flex-row flex overflow-x-auto gap-x-2 -mr-3 no-scrollbar">
        {exercises.map((exercise) => (
          <li key={exercise.key} className="flex flex-row flex-none">
            <div
              className="relative mb-4"
              onClick={() => handleWorkout(exercise.id)}
            >
              <img
                src={exercise.image_url}
                alt={exercise.name}
                className="h-44 w-72 bg-black rounded-xl object-cover object-center"
              />
              <div className="absolute inset-0 p-4 bg-black bg-opacity-30 text-white rounded-xl cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">{exercise.name}</h2>
                <Bubbles icon={fire} value={exercise.calories} />
                <Bubbles icon={clock} value={exercise.time} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCard;
