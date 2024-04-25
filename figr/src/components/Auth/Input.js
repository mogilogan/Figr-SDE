import React from 'react';

import { FaEye,FaEyeSlash } from "react-icons/fa";
const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    <div className={`w-full sm:w-${half ? '1/2' : 'full'}`}>
      <input
        className="appearance-none border border-gray-400 rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
        name={name}
        onChange={handleChange}
        required
        fullWidth
        placeholder={label}
        autoFocus={autoFocus}
        type={type}
      />
      {name === 'password' && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button onClick={handleShowPassword} className="focus:outline-none">
            {type === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      )}
    </div>
  );

export default Input;