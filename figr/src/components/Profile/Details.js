import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatedetails } from "../../action/auth";

const Details = ({user,setMessage,editDetailsMode,setEditDetailsMode}) => {
  //defined functions
  const dispatch = useDispatch();

  //states
  const [detailsData, setDetailsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  const handledetailsChange = (e) => {
    setDetailsData({ ...detailsData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    // Dispatch action to update user details in backend
   await dispatch(updatedetails(detailsData, setMessage));
    setEditDetailsMode(false); // Turn off edit details mode after submission
    window.location.reload();
  };

  useEffect(() => {
    const [firstName, lastName] = user.result.name.split(" ");
    setDetailsData({
      _id: user.result._id,
      firstName: firstName || "",
      lastName: lastName || "",
      email: user.result.email || "",
    });
  }, []);

  return (
    <div>
      {" "}
     
        <form onSubmit={handleDetailsSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              type="text"
              value={detailsData.firstName}
              onChange={handledetailsChange}
              required
              disabled={!editDetailsMode}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              type="text"
              value={detailsData.lastName}
              onChange={handledetailsChange}
              required
              disabled={!editDetailsMode}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              value={detailsData.email}
              onChange={handledetailsChange}
              required
              disabled={!editDetailsMode}
            />
          </div>
          {editDetailsMode &&
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Details
          </button>
}
        </form>
  
      
     
    </div>
  );
};

export default Details;
