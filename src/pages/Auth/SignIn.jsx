import {useNavigate} from "react-router-dom";
import {signInWithGoogle, signInWithEmail} from "../../config/firebase";
import {useState, useEffect} from "react";
import {auth} from "../../config/firebase";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/Button/GoogleButton";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      // Cleanup the subscription
      unsubscribe();
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmail(email, password);

      navigate("/home");
    } catch (error) {
      console.error("Sign-in error:", error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Login</h1>
      <p className="text-middleGray">Hey, Welcome back 👋</p>

      <div className="my-5">
        <GoogleButton onClick={handleGoogleSignIn} text="Sign In With Google" />
      </div>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-darkGray pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-darkGray pb-2">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
            />
          </label>
          <div className="flex flex-row justify-between">
            <div>
              <a
                href="#"
                className="font-medium text-red hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/password-reset");
                }}
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <Button onClick={handleSignIn} text="Sign In" />
          <p className="text-center text-darkGray">
            Not registered yet?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate("/sign-up");
              }}
              className="text-lightPurple font-medium inline-flex space-x-1 items-center hover:underline cursor-pointer"
            >
              <span>Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
