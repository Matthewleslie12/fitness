import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../../config/firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Track button state

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (email.trim() === "") {
      console.error("Email field is empty.");
      return;
    }

    // Disable the button to prevent multiple clicks
    setIsButtonDisabled(true);

    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }

    // Re-enable the button after a delay (e.g., 5 seconds)
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);
  };

  return (
    <div className="max-w-lg mx-auto my-20 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Forgot your password?</h1>
      <p className="text-middleGray">Get a reset link below</p>

      <div className="my-5"></div>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-darkGray pb-2">
              Email address linked to account
            </p>
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

          <div className="flex flex-row justify-between"></div>
          <button
            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
            disabled={isButtonDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Get email</span>
          </button>
          <p className="text-center text-darkGray">
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

export default PasswordReset;
