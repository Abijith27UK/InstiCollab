import React from 'react';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useState ,useEffect } from 'react';

const InputData = ({InputDiv,setInputDiv,UpdatedData,setUpdatedData,handleGetTask}) => {
    const headers = {
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
    };
    const [data, setData] = useState({title: "", desc: ""});
    useEffect(() => {
        setData({title: UpdatedData.title , desc: UpdatedData.desc});
    }, [UpdatedData])
    
    
    const change = (e) => {
        const {name, value} = e.target;
        setData({...data,[name]:value});
    };
    const submitData = async () => {
        if(data.title === "" || data.desc === ""){
            alert("Please fill all fields");
        }else{
            //alert("Before task");
            await axios.post("http://localhost:1000/api/v2/create-task" , data , {headers});
            //alert("After post task");
            setData({title: "", desc: ""});
            setInputDiv("hidden");
            alert("Task created successfully");
            handleGetTask();
        }
    };
    const UpdateTask = async () => {
        if(data.title === "" || data.desc === ""){
            alert("Please fill all fields");
        }else{
            await axios.put(`http://localhost:1000/api/v2/update-task/${UpdatedData.id}` , data , {headers});
            setData({title: "", desc: ""});
            setUpdatedData({
                id: "",
                title: "",
                desc: "",
            });
            setData({title: "", desc: ""});
            setInputDiv("hidden");
            handleGetTask();
        }
    };
  return (
    <>
        <div className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
        <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        
        <div className="w-1/3 bg-gray-900 p-4 rounded">
            <div className='flex'>
                <button className='text-xl' onClick={() => {
                    setInputDiv("hidden");
                    setData({
                        title: "",
                        desc: "",
                    });
                    setUpdatedData({
                        id: "",
                        title: "",
                        desc: "",
                    });}
                }>
                    <RxCross2 />
                </button>            
            </div>
            <input
                type="text"
                placeholder="Title"
                name="title"
                className="px-3 py-2 rounded w-full bg-gray-700 my-3"
                value = {data.title}
                onChange={change}
            />
            <textarea
                name = "desc"
                cols = "30"
                rows = "10"
                placeholder = "Description..."
                className="px-3 py-2 rounded w-full bg-gray-700 my-3"
                value = {data.desc}
                onChange={change}
            ></textarea>
            {UpdatedData.id === "" ? (
            <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold' onClick={submitData}>Submit</button>
) : (       <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold' onClick={UpdateTask}>Update</button>
            )}
            </div> 
        </div>
        
    </>
  );
};

export default InputData