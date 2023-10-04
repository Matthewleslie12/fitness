import {useState, useEffect} from "react";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exercises") // Update with your API URL
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h2>{exercise.name}</h2>
            <p>Muscle Group: {exercise.muscle_group}</p>
            <p>Type: {exercise.type}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Instructions: {exercise.instructions}</p>
            <img src={exercise.image_url} alt={exercise.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
