import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import { jwtDecode } from "jwt-decode"
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();



    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
      };

      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = jwtDecode(token)
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/Home"><span className="font-semibold text-xl tracking-tight">FIGR</span></Link>
    </div>
   
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
       
       
      <Link to="/Projects"> <a  href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Projects
        </a></Link>
      </div>
      <div>
      {user?.result ? (
  <div className="flex items-center">
    <Link to="/Profile"><div   className="w-12 h-12 rounded-full overflow-hidden">
    <FaUserAlt  size={50} />
    </div></Link>
    <p className="text-lg ml-4">{user?.result.name}</p>
    <button onClick={logout} className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Logout</button>
  </div>
) : (
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    <Link to="/auth">Sign In</Link>
  </button>
)}

      </div>
    </div>
  </nav>
  )
}

export default Navbar