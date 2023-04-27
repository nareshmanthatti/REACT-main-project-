import React from 'react'
import { Link } from 'react-router-dom'
// import style from "../src/navbar/_navbar.module.css"
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineUserAdd} from "react-icons/ai"
import style from "./admin.module.css"

const AdminNavDashboard = () => {
  return (
    <>
        <div  id={style.adminnavdashboard}>
            <h2>ADMIN DASHBOARD</h2>
            <div id={style.adminnavdashboardlist}>
          <ul>
            <li><Link to="/admindashboard/acadmymanagerregister"><span><AiOutlineUserAdd/>   Add Academy manager</span></Link></li>
            <li><Link><span><AiOutlineEye/>   View Academy Manager</span></Link></li>
            <li><Link><span><AiOutlineEye/>   View Academy</span></Link></li>
            <li><Link><span><AiOutlineEye/>   View Branch</span></Link></li>
            <li><Link><span><AiOutlineEye/>   View Course</span></Link></li>
            <li><Link to="/"><span>HOME</span></Link></li>
          </ul>
          </div>
        </div>
       

    </>
  )
}

export default AdminNavDashboard

