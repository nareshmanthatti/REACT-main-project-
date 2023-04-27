import React from 'react'
import style from "./_navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
  let navigate=useNavigate()

   let role=window.localStorage.getItem("role")
   let token=window.localStorage.getItem("token")
    console.log(role);

    let handelclick=()=>{
      
      window.localStorage.removeItem("role")
      window.localStorage.removeItem("token")
      // window.localStorage.clear()     ---------------use this to clear the local storage
         navigate("/login")
    }
  return (
    <div>
        <section id={style.menulist}>
            <article>
                <ul>
                     { token ?<>
                       <li><Link to="/">HOME</Link></li>
                       <li><Link to="/galery">GALERY</Link></li>
                       <li><Link to="/about">ABOUT</Link></li>
                       <li onClick={handelclick}><Link to="/login">LOGOUT</Link></li>
                       <li><Link to="/admindashboard">{role==="ROLE_ADMIN" ? "ADMIN DASHBOARD":null}</Link></li>
                       </>
                      :
                      <>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                    </>
                    }
                </ul>
            </article>
        </section>
    </div>
  )
}

export default Menu