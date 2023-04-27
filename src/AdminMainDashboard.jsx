import React from 'react'
import { Outlet } from 'react-router-dom'
// import AcademyManagerRegister from './AcademyManagerRegister';
import style from "./admin.module.css"

const AdminMainDashboard = () => {
  return (
    <div id={style.adminmaindashboard}>
        <Outlet/>
    </div>
  )
}

export default AdminMainDashboard

 