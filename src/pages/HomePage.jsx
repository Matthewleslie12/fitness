import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import Cards from "../components/Cards/MainCard";
import PlanCard from "../components/Cards/PlanCard";
import {useAuth} from "../config/authcontext";

const HomePage = () => {
  const [greeting, setGreeting] = useState("");
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function determineGreeting() {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    }

    determineGreeting();

    const interval = setInterval(determineGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <div className="px-4 pt-6 ">
          <p className="">{greeting}</p>
          <p className="font-bold text-2xl">{user.displayName}</p>
          <SearchBar />
          <h2 className="text-lg font-medium pb-4 pt-6">Popular Workouts</h2>
          <Cards />
          <h2 className="text-lg font-medium pb-4 pt-6">Todays Plan</h2>
          <PlanCard />
        </div>
      ) : null}
    </>
  );
};

export default HomePage;
