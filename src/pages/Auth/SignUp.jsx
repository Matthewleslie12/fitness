import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {auth} from "../../config/firebase";
import {
  signUpWithEmailAndPassword,
  signUpWithGoogle,
} from "../../config/firebase";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/Button/GoogleButton";

const SignUp = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log("User is signed in:", user);
        // Redirect or perform other actions as needed.
      } else {
        // User is signed out.
        console.log("User is signed out");
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();

      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Sign Up</h1>
      <p className="text-middleGray">Hi, Welcome!</p>

      <div className="my-5">
        <GoogleButton onClick={handleGoogleSignIn} text="Sign Up With Google" />
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
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>
          <label htmlFor="username">
            <p className="font-medium text-darkGray pb-2">Username</p>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter username"
            />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-darkGray pb-2">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
            />
          </label>
          <div className="flex flex-row justify-between"></div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              signUpWithEmailAndPassword(email, password, name)
                .then(() => {
                  // Sign-up successful, navigate to the homepage
                  navigate("/home");
                })
                .catch((error) => {
                  // Sign-up failed, set the error message
                  setError(error.message);
                });
            }}
            text="Sign Up"
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <p className="text-center text-darkGray">
            Already Have An Account?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate("/sign-in");
              }}
              className="text-lightPurple font-medium inline-flex space-x-1 items-center hover:underline cursor-pointer"
            >
              <span>Sign In now </span>
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
export default SignUp;
