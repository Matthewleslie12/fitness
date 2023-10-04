import {useNavigate} from "react-router-dom";
import test from "../../assets/loadingImg.png";

const InitialPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <img src={test} alt="" className="" />
      <main className="text-center ">
        <h1 className="font-bold pb-4 text-xl pt-4">
          Wherever You Are <br></br>
          <span className="bg-neon px-2 rounded-md">Health</span> Is Number One
        </h1>
        <h2 className="pb-8">
          There are no shortcuts when it comes to living a healthy life.
        </h2>
        <div
          className="h-11 bg-black rounded-3xl flex mx-6 justify-center items-center hover:bg-neon hover:cursor-pointer"
          onClick={handleClick}
        >
          <p className="text-white font-bold">Get Started</p>
        </div>
      </main>
    </div>
  );
};

export default InitialPage;
