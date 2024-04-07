import axios from 'axios'
import React,{useEffect,useState} from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from "./Login";
import "./Filter.css";
function home(){
    const [data,setData]=useState([])
    const [records,setRecords]=useState([])
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:3000/getData')
        .then(res=>{
           setData(res.data)
           setRecords(res.data);
    })
         .catch(err=> console.log(err));
    },[])

    const Filter =(event)=>{
        setRecords(data.filter(f=>
            f.nameOfOrg.includes(event.target.value)))
    } 
    console.log(data)
    return (
        <>
        <Login/>
        <div className='aa'>
    <div className='bb'>
    <input type="text" className='form-controls' onChange={Filter} placeholder="Search"/>
    <div className='tt'>
        <table className='table'>
            <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Name of Institution</th>
                    <th>Email</th>
                    {/* <th>Phone</th> */}
                
                </tr>
            </thead>
            <tbody>
                {records.map((item,index)=>(
                    <tr key={index}>
                        {/* <Link to={/${item.nameOfOrg}}>{item.nameOfOrg}</Link> */}
                        {/* <td>{item.id}</td> */}
                        {/* <Link to={/${item.nameOfOrg}}>{item.nameOfOrg}</Link> */}
                        <td> <Link to={`/${item.nameOfOrg}`}>{item.nameOfOrg}</Link> </td>
                        <td>{item.email}</td>
                        {/* <td>{item.phone}</td>  */}
                    </tr>
                ))}
                
            </tbody>
        </table>
        </div>
    </div>
</div>
        </>

    )
}
export default home