import {useNavigate} from "react-router-dom";
import * as icons from "../../assets/icons/homeMenu";

const iconData = [
  {icon: icons.whiteHome, route: "/home"},
  {icon: icons.whiteRocket, route: "/explore"},
  {icon: icons.whiteAnalytics, route: "/analytics"},
  {icon: icons.whiteProfile, route: "/profile"},
];

const Bar = () => {
  const navigate = useNavigate();

  const handleIconClick = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-primaryBlack h-16 flex justify-evenly  w-full rounded-t-lg items-center fixed bottom-0 ">
      {iconData.map((data, index) => (
        <img
          key={index}
          src={data.icon}
          alt=""
          className="w-6 h-6 hover:cursor-pointer"
          onClick={() => handleIconClick(data.route)}
        />
      ))}
    </div>
  );
};

export default Bar;
