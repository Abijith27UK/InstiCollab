import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const Signup = () => {
  //const navigate = useNavigate();
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if(isLoggedIn === true){
    history("/");
  }
  const [Data, setData] = useState({ username: "", email: "", password: ""});
  const change = (e) =>{
    const { name , value } = e.target;
    setData({...Data, [name]: value});
  };
  const submit = async () =>{
    try {
      if(Data.username === "" || Data.email === "" || Data.password === ""){
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:1000/api/v1/sign-in", Data);
        //alert("Entering else");
        setData({ username: "", email: "", password: ""});
        //alert(response.data.message);
        //history("/login");
        history("/login");
      }
    } catch (error) {
      alert("Inside SignUp Catch Error");
      //alert(error.response.data.message);
    }
  };
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
          value={Data.username}
          onChange = {change}
        />
        <input
          type="email"
          placeholder="email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="email"
          value={Data.email}
          required
          onChange = {change}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
          value={Data.password}
          onChange = {change}          
        />
        <div className="w-full flex items-center justify-between">
        <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded" onClick={submit}>SignUp</button>
        <Link to = "/login" className="text-gray-400 hover:text-gray-100">Already having an account!!<b>Login here</b> </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
