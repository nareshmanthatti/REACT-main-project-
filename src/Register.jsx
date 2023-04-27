import React from 'react'
import style from "./navbar/_navbar.module.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Login from './Login';
import axiosInstance from './Axiosinstatnce';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const Register = () => {
  let navigate=useNavigate()

let[state,setState]=useState({
  userName:"",
  email:"",
  phone:"",
  gender:"",
  dob:"",
  password:""
})

let {userName,email,phone,dob,password,gender}=state

let handelSubmit= async(e)=>{
  e.preventDefault()
  try{
    let payload={userName,email,phone,dob,password,gender}
    let data=await axiosInstance.post("/users/save",payload)
    toast.success("successfully login")
    navigate("/login")
    console.log(data);
  }
  catch{
    console.log("error");
  }
}
let handelchang=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
}

  return (<>   
  <div id={style.Register1}>
    <div id={style.Register}>
      <ToastContainer/>
      <h1>SIGNUP PAGE</h1>
      <form action="" onSubmit={handelSubmit}>
        <input type="text"  name='userName' placeholder='username' value={userName} onChange={handelchang}/>
        <br />
        <br />
        <input type="email" name='email' placeholder='email' value={email} onChange={handelchang}/>
        <br />
        <br />
        <input type="password" name='password' placeholder='password' value={password} onChange={handelchang}/>
        <br />
        <br />
        <input type="date"  name='dob' value={dob} onChange={handelchang}/>
        <br />
        <br />
        <label htmlFor="gender">gender</label><input type="radio"name='gender' value="male" onChange={handelchang}/> male <input type="radio"name='gender' value="female" onChange={handelchang} /> female
        <br />
        <br />
        <input type="number" name='phone' placeholder='phonenumber' value={phone} onChange={handelchang}/>
        <br />
        <br />
                <button>signup</button>
                <h3 style={{fontSize:"15px",marginLeft:"30px",color:"grey"}}>already have an account?<Link to="/login">Login</Link></h3>
      </form>
    </div>
    </div>
    </>
  )
  }

export default Register