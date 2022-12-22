import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdAdd, MdLibraryBooks, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const UserDropDown = () => {
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  console.log("usrrr", user);

  return (
    <div className="relative">
      <motion.img
        referrerPolicy="no-referrer"
        whileTap={{ scale: 0.6 }}
        src={
          user
            ? user.photoURL
            : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        }
        className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl rounded-full object-contain"
        alt="user"
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      />
      {isMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="w-40 shadow-xl bg-white  rounded-lg flex flex-col absolute top-12 right-0"
        >
          {user && (
            <div>
              <Link to={"/sellbooks"}>
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-gray-900 transition-all duration-100 ease-in-out text-white "
                  onClick={() => {
                    setIsMenu(false);
                  }}
                >
                  Sell Books <MdAdd />
                </p>
              </Link>
              <Link to={"/mybooks"}>
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-gray-900 transition-all duration-100 ease-in-out text-white"
                  onClick={() => {
                    setIsMenu(false);
                  }}
                >
                  My Books <MdLibraryBooks />
                </p>
              </Link>
            </div>
          )}
          <p
            onClick={logout}
            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-gray-900 transition-all duration-100 ease-in-out text-white"
          >
            Logout <MdLogout />
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default UserDropDown;
