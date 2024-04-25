import React, { useState } from 'react'
import { updatepass } from '../../action/auth';
import { useDispatch } from 'react-redux';

const Password = ({setMessage,user,editPasswordMode,setEditPasswordMode}) => {



    //defined functions
    const dispatch = useDispatch();

    // states
    const [passwordsMatch, setPasswordsMatch] = useState(true); //checking pass match
   
    const [passData, setPassData] = useState({
        _id:user.result._id,
        password: '',
        newPassword: '',
        confirmNewPassword: ''
      }); // form for apis

    const handlepassChange = (e) => {
        setPassData({ ...passData, [e.target.name]: e.target.value });
    
        const { name, value } = e.target;
      
        
        // Check if new password matches confirm password
        if (name === 'confirmNewPassword' && passData.newPassword !== value) {
          setPasswordsMatch(false);
        } else {
          setPasswordsMatch(true);
        }
      };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to update user password in backend
        dispatch(updatepass(passData,setMessage));
        setPassData({
            _id:user.result._id,
            password: '',
            newPassword: '',
            confirmNewPassword: ''
          })
        setEditPasswordMode(false); // Turn off edit password mode after submission
      };
  return (
    <div> {editPasswordMode && (
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Old Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              value={passData.password}
              onChange={handlepassChange}
              required
              disabled={!editPasswordMode}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="newPassword"
              type="password"
              value={passData.newPassword}
              onChange={handlepassChange}
              required
              disabled={!editPasswordMode}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmNewPassword"
              type="password"
              value={passData.confirmNewPassword}
              onChange={handlepassChange}
              required
              disabled={!editPasswordMode}
            />
            {!passwordsMatch && <p className="text-red-500 text-xs italic">Passwords do not match.</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Password
          </button>
        </form>
      )}
      </div>
  )
}

export default Password