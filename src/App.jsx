import "./index.css";
import InitialPage from "./pages/Auth/InitialPage";
import HomePage from "./pages/HomePage";
import {Routes, Route, useLocation} from "react-router-dom";
import Bar from "./components/MenuBar/Bar";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PasswordReset from "./pages/Auth/PasswordReset";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Analytics from "./pages/Analytics";
import Ab from "./pages/Workouts/Ab";

function App() {
  const location = useLocation();

  const pathsToHideBar = [
    "/",
    "/sign-in",
    "/sign-up",
    "/password-reset",
    "/exercises/Ab-Attack",
  ];

  const shouldHideBar = pathsToHideBar.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/exercises/Ab-Attack" element={<Ab />} />

        {/* <Route path="/workout/:workoutId" element={<Workout />} />s */}
      </Routes>
      {!shouldHideBar && <Bar />}
    </>
  );
}

export default App;
