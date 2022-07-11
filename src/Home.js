import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from'react-redux'
import {ADD} from'./action/Action' 



function Home() {
const [inputData, setInputData]=useState({username:"",email:""})

const dispatch=useDispatch()
const list=useSelector((state)=>state.reducer.list)

// useEffect(()=>{
//      fetchdata();
// },[0])
// const fetchdata=async()=>{
//     debugger
//     // const response= await axios.get('https://jsonplaceholder.typicode.com/users')
//     // console.log(response)
//     // setAdditem(response.data)
// } 





  return (
    <center>
<input type='text' placeholder='username' value={inputData.username} onChange={(e)=>(setInputData({...inputData,username:e.target.value}))}></input> <br></br> <br></br>
<input type='text' placeholder='email' value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})}></input> <br></br>
<button onClick={()=>dispatch(ADD(inputData))}>ADD</button>

<table className="customers">
  <thead>
    <tr>
     
      <th scope="col">userame</th>
    
      <th scope="col">email</th>
  </tr>
  </thead>

 
<tbody>
  { 
    list.map((item)=>{
     return (
      
    <tr key={item.id}>
    <td>{item.username}</td>
    <td>{item.email}</td>
    <td></td>
    <td><button onClick={()=>dispatch( DELETE())} >DELETE</button></td>
   </tr>
     )
     })
    }
    </tbody>
 </table>
</center>
  )
}

export default Home