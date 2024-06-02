import {useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table/Table';


export interface IData{
    id: string
    name:string
    url:string
    username: string
    password: string
    type: string
  }

  
const Connections = () => {

    const [data, setData] = useState<any[]>([]);
  
    useEffect(() => {
      const fakeServerUrl = 'http://localhost:4000/databases';
  
      axios.get(fakeServerUrl)
        .then((response) => {
          setData(response.data)
        })
       
    }, []);
  
    return (
      <div>
        <Table data={data} />
      </div>
    );
  }

  export default Connections;