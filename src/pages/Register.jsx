import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../features/api/authApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  //RTK query
  const [registerUser] = useRegisterUserMutation();

  const registerHandler = async(e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    const data = await registerUser(user)
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        className="w-96 flex flex-col items-center bg-gray-100 p-10 gap-10 rounded shadow"
      >
        <div className="text-green-500 text-xl font-bold">Register Account</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your password"
        />
        <input
          type="password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your password confirmation"
        />
        <div>
          <small className="text-sm">
            Already have an account?
            <Link to="/login">
              <span className="text-green-500 cursor-pointer ml-2">login</span>
            </Link>
          </small>
          <button
            type="submit"
            className="bg-green-400 px-10 py-2 text-white rounded "
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
