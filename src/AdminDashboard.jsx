import React from 'react'
// import { Link } from 'react-router-dom'
// import style from "../src/navbar/_navbar.module.css"
// import {AiOutlineEye} from "react-icons/ai"
// import {AiOutlineUserAdd} from "react-icons/ai"
import AdminNavDashboard from './AdmiNavDashboard';
import AdminMainDashboard from './AdminMainDashboard';
// import { Outlet } from 'react-router-dom';
import style from "./admin.module.css"

const AdminDashboard = () => {
  return (
    <>
    <div id={style.admindashboard}>
       <AdminNavDashboard /> 
        <AdminMainDashboard/> 
    </div>
    </>
  )
}

export default AdminDashboard

