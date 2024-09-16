import React, { useEffect, useState } from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link , Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = [
        {
            title:"All tasks",
            icon: <CgNotes />,
            link: "/",
        },
        {
            title:"Important tasks",
            icon: <MdLabelImportant />,
            link: "/importantTasks",
        },
        {
            title:"Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completedTasks",
        },
        {
            title:"Incomplete tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedTasks",
        },
        {
            title:"Group Chat",
            icon: <IoChatbubbleEllipsesOutline />,
            link: "/groupChat",
        },
    ];
    const [Data, setData] = useState();
    const logout = () => {
        dispatch(authActions.logout());
        localStorage.clear("id");
        localStorage.clear("token");
        navigate("/signup");
    };
    const headers = {id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
    }; 
    useEffect(() =>{
        const fetch = async () => {
            const response = await axios.get("http://localhost:1000/api/v2/get-all-tasks", {headers,});
            setData(response.data.data);
        };
        if(localStorage.getItem("id") && localStorage.getItem("token") )
            { 
                fetch(); 
            }
    },[]);

  return (
    <>    
    {Data && (
        <div>
            <h1 className=" font-mono text-xl flex items-center"><b>InstiCollab</b><FcCollaboration text-xl /></h1>
            <h3 className="font-mono text-lg font-semibold">{Data.username}</h3>
            <h4 className="font-mono mb-1 text-gray-400">{Data.email}</h4>
            <hr />
        </div>)}
        <div>
            {data.map((items, i) =>(
                <Link 
                to = {items.link}
                key={i}
                className='my-2 flex items-center hover:bg-gray-700 p-2 rounded transition-all duration-300'>
                    {items.icon}&nbsp;&nbsp;{items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className="bg-gray-600 w-full p-2 rounded"  onClick={logout}>Logout</button>
        </div>
    </>
  )
}

export default Sidebar;