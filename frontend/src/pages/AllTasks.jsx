import React from 'react';
import Cards from '../components/Home/Cards';
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../components/Home/InputData';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useStore } from 'react-redux';

const AllTasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");
    const [Data, setData] = useState();
    const [UpdatedData, setUpdatedData] = useState({
        id: "",
        title: "",
        desc: "",
    });
    const headers = {id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
    };
    useEffect(() =>{
        handleGetTask();
    },[]);

    const handleGetTask = () => {
            const fetch = async () => {
                const response = await axios.get("http://localhost:1000/api/v2/get-all-tasks", {headers,});
                setData(response.data.data);
            };
            if(localStorage.getItem("id") && localStorage.getItem("token") )
            { 
                fetch(); 
            }
    };

  return (
    <>
        <div>
            <div className='w-full flex justify-end px-4 py-2'>
                <button onClick={()=> setInputDiv("fixed")}>
                    <IoIosAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
                </button>            
            </div>
            {Data && (
            <Cards 
            home={"true"} 
            setInputDiv={setInputDiv} 
            data = {Data.tasks} 
            setUpdatedData ={setUpdatedData}
            handleGetTask = {handleGetTask}
            />
            )}
        </div>
        <InputData 
        InputDiv={InputDiv} 
        setInputDiv={setInputDiv} 
        UpdatedData={UpdatedData}
        setUpdatedData={setUpdatedData}
        handleGetTask = {handleGetTask}
        />
    </>
  );
};

export default AllTasks;