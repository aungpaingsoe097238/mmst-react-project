import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/authApi";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //RTK Query
  const [login] = useLoginMutation();

  //RTK
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await login(user);
    dispatch(addUser({ user: data?.user, token: data?.token }));
    navigate('/')
  };

  return (
    <div
      onSubmit={loginHandler}
      className="w-full h-screen flex justify-center items-center"
    >
      <form className="w-96 flex flex-col items-center bg-gray-100 p-10 gap-10 rounded shadow">
        <div className="text-blue-500 text-xl font-bold">Login Account</div>
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
        <div>
          <small className="text-sm">
            Don't have an account?
            <Link to="/register">
              <span className="text-green-500 cursor-pointer ml-2">
                register account
              </span>
            </Link>
          </small>
          <button
            type="submit"
            className="bg-blue-400 px-10 py-2 text-white rounded "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
