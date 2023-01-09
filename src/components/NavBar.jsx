import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/services/authSlice";

const NavBar = () => {
  // RTK
  // const user = useSelector((state) => state.auth.user);
  // const token = useSelector((state) => state.auth.token);
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const data = await logout(token);
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-blue-50 px-10 py-1 shadow-sm">
      <div>React</div>
      <div className="flex items-center gap-5">
        <div>
          <p className="text-sm font-semibold">{user?.name}</p>
          <small>{user?.email}</small>
        </div>
        <button
          onClick={logoutHandler}
          className="bg-gray-400 px-3 py-1 rounded text-white cursor-pointer"
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
