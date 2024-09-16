import React from 'react';
import { useState ,useEffect } from 'react';
import Cards from '../components/Home/Cards';
import axios from 'axios';

const ImportantTasks = () => {
  const headers = {id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  };
  const [Data, setData] = useState();
  useEffect(() =>{
      const fetch = async () => {
          const response = await axios.get("http://localhost:1000/api/v2/get-imp-task", {headers,});
          setData(response.data.data);
      };
      fetch();
  },[]);
  return (
    <div>
        <Cards home={"false"} data={Data} />

    </div>
  )
}

export default ImportantTasks;