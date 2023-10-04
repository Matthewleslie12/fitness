import {useNavigate} from "react-router-dom";
import {useAuth} from "../config/authcontext";
import {signOutUser} from "../config/firebase";
import Button from "../components/Button/Button";

const Profile = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h2 className="font-medium text-lg">Hey, {user.displayName}!</h2>

      <Button
        onClick={() => {
          signOutUser();
          navigate("/sign-in");
        }}
        text="Sign Out"
      />
    </div>
  );
};

export default Profile;
