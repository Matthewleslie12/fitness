// EventHandlers.js
import {useNavigate} from "react-router-dom";

export function handleWorkoutClick() {
  const navigate = useNavigate();
  navigate("/selectedWorkout");
}
