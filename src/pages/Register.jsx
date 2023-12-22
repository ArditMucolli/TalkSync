import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          //create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        });
      });
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label
            htmlFor="file"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={Add} alt="" className="w-6 h-6 " />
            <span>Add an avatar</span>
          </label>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
            Sign up
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="mt-4 text-center">
          You already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
