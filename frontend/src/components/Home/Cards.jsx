// eslint-disable-next-line
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
//import InputData from '../components/Home/InputData';


const Cards = ({home , setInputDiv , data = [] , setUpdatedData , handleGetTask }) => {
    const headers = {
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
    };
    const handleCompleteTask = async (id) => {
        try {
            await axios.put(
                `http://localhost:1000/api/v2/update-complete-task/${id}` ,
                {},
                { headers }
            );
            alert("Change added");
            handleGetTask();
        } catch (error) {
            console.log(error);
        }
    };
    const handleImportant = async (id) => {
        try {
            await axios.put(
                `http://localhost:1000/api/v2/update-imp-task/${id}` ,
                {},
                { headers }
            );
            alert("Added Important Tasks");
            handleGetTask();
        } catch (error) {
            console.log(error);
        }
    };
    const handleUpdate = (id , title , desc) => {
        setInputDiv("fixed");
        setUpdatedData({id: id, title: title, desc: desc});
    };
    const deleteTask = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:1000/api/v2/delete-task/${id}` ,
                {},
                { headers }
            );
            alert(response?.data?.message || "Unable to delete");
        } catch (error) {
            console.log(error);
        }
    };
    const [ImportantButton, setImportantButton] = useState("Incomplete");
    //const [InputDiv, setInputDiv] = useState("hidden");  

    return (
      <div className='grid grid-cols-3 gap-4 p-4'>
        {data && data.map((item, i) => (
            <div key={item._id} className=" flex flex-col justify-between bg-gray-800 rounded-xl p-4">
          <div >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 my-2">{item.desc}</p>  
          </div>
            <div className="mt-4 w-full flex items-center">
                <button 
                className={`${item.complete === false ? "bg-red-400" : "bg-green-700"}
                 p-2 rounded w-1/2 `}
                 onClick={() => handleCompleteTask(item._id)}>
                {item.complete === true ? "Completed" : "Incompleted"}
                </button>
                <div className=' p-2 w-1/2 text-2xl font-semibold flex justify-around'>
                    {home !== "false" && (<button onClick={() => handleImportant(item._id)}>
                        {item.important === false ? (<CiHeart />) : 
                        (<FaHeart className="text-red-500"/> )}
                    </button>)}
                    <button onClick={() => handleUpdate(item._id,item.title,item.desc)}>
                        <FaEdit />
                    </button>
                    <button onClick={() => deleteTask(item._id)}>
                        <MdDeleteForever />
                    </button>
                </div>
            </div> 
            </div>
          
        ))}
        {home==="true" && (
        <button onClick={()=> setInputDiv("fixed")} className="flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-1000">
            <IoIosAddCircle className='text-5xl'/>
            <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>        
        )}
      </div>
    )
}


export default Cards;
