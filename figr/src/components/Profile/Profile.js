import React, { useEffect, useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import Password from "./Password";
import Details from "./Details";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [editDetailsMode, setEditDetailsMode] = useState(false); // State for editing other details
  const [editPasswordMode, setEditPasswordMode] = useState(false); // State for editing password

  const [isVisible, setIsVisible] = useState(false); // alert modal
  const [message, setMessage] = useState("");

  return (
    <div>
     

      {isVisible && (
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Change Alert!</p>
              <p className="text-sm">
                {message ? message : "something went wrong"}
              </p>
            </div>
          </div>
        </div>
      )}

      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-1 text-center order-last md:order-first mt-20 md:mt-0">
              <button
                onClick={() => setEditDetailsMode(true)}
                class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Change Details
              </button>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                onClick={() => setEditPasswordMode(true)}
                class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Change Password
              </button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">

            {/* Details page */}
            <Details
              user={user}
              setMessage={setMessage}
              editDetailsMode={editDetailsMode}
              setEditDetailsMode={setEditDetailsMode}
            />
             {/* Password page */}
            <Password
              user={user}
              setMessage={setMessage}
              editPasswordMode={editPasswordMode}
              setEditPasswordMode={setEditPasswordMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
