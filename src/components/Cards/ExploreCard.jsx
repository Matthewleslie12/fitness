import {useNavigate} from "react-router-dom";

const ExploreCard = () => {
  const navigate = useNavigate();
  const handleWorkout = (exerciseId) => {
    navigate(`/exercises/${exerciseId}`);
  };
  return (
    <div className="w-full h-44 bg-black rounded-3xl flex flex-col justify-between py-7 px-7 font-bold">
      <img
        src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
        className="w-80 h-44"
      />
      <h1 className="text-white capitalize text-2xl">title</h1>
      <p className="text-neon text-sm" onClick={handleWorkout}>
        {/* //* Make the handleWorkout work like the one on the homepage, generate a random workout on the explore page
              //* and navigate to that one.  
              //* add a chevron to pointing to the right
              */}
        See more!
      </p>
    </div>
  );
};

export default ExploreCard;
