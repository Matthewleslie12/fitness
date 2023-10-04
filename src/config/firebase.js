import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOt54wznk4AJewUXineOP638ghRCfiQBs",
  authDomain: "fitness-app-f1866.firebaseapp.com",
  projectId: "fitness-app-f1866",
  storageBucket: "fitness-app-f1866.appspot.com",
  messagingSenderId: "423175698889",
  appId: "1:423175698889:web:20b2bf71992f153a791018",
  measurementId: "G-JDLYLRN20G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Function to sign up with Google
export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // Handle the successful sign-up here, e.g., redirect to another page.
    console.log("Successfully signed up with Google:", result.user.displayName);
  } catch (error) {
    // Handle errors here.
    console.error("Error signing up with Google:", error.message);
  }
};

// Function to sign in with Google
export const signInWithGoogle = async (navigateCallback) => {
  try {
    const result = await signInWithPopup(auth, provider);
    // Handle the successful sign-in here, e.g., redirect to another page.
    console.log("Successfully signed in with Google:", result.user.displayName);
    if (navigateCallback) {
      navigateCallback();
    }
  } catch (error) {
    // Handle errors here.
    console.error("Error signing in with Google:", error.message);
  }
};

// Function to sign up with email and password
export const signUpWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Set the user's display name
    await updateProfile(user, {displayName});

    console.log("Successfully signed up with email:", user.email);
  } catch (error) {
    console.error("Error signing up with email:", error.message);
    throw error; // Re-throw the error for handling in your component
  }
};
// Function to sign in with email and password
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Handle the successful sign-in here
    const user = userCredential.user;
    console.log("Successfully signed in with email:", user.email);
  } catch (error) {
    // Handle errors here.
    console.error("Error signing in with email:", error.message);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

export {auth, signOutUser};
