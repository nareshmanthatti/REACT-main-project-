import React, { useState } from 'react'
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import style from "./navbar/_navbar.module.css"
import axiosInstance from './Axiosinstatnce'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const Login = () => {
    let navigate =useNavigate()
    let[state,setState]=useState({
        userEmail:"",
        password:""
    })
    let[show,setShow]=useState(false)
    let {userEmail,password}=state
    let handelChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
       
    }
    let handelSubmit= async(e)=>{
        e.preventDefault()
        console.log(state);
       

        try{
        let payload={userEmail,password}
        let {data}=await axiosInstance.post("/authenticate",payload)

        let token=data.token
        let role=data.role
        console.log(token);
        if(token)
        {
            window.localStorage.setItem("token",token)
            window.localStorage.setItem("role",role)
            navigate("/")
            toast.success("successfully login")
         alert("login")
        }else
        {
            window.localStorage.removeItem("token",token)
            window.localStorage.removeItem("role",role)   
        }
        }
        catch (err){
    //   alert("err")
    toast.error("error")
        }

           }
    let showPassword=()=>{
        setShow(!show)
    }
  return (
<div id={style.loginDiv}>
            <h1>LOGIN PAGE</h1>
            <ToastContainer/>
    <form action="" onSubmit={handelSubmit}>
        <fieldset id={style.fieldSet}>
            
            <input type="email"  placeholder='userEmail' name='userEmail' required onChange={handelChange} value={userEmail}/>
            <br />
            <br />
            <input type={show ? "text":"password"} placeholder='password' name='password' required onChange={handelChange} value={password} style={{margin:"0px 0px 0px 15px"}}/>
            <span onClick={showPassword}>{show ?<AiFillEye/> :<AiFillEyeInvisible />}</span>
            <br />
            <br />
         
            <button>login</button>
            <Link to="/register" style={{color:"white"}}>Create Account</Link>
            </fieldset>
        </form>
        </div>
  )
}

export default Login