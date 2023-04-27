import React from 'react'
import style from "../navbar/_navbar.module.css"
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div id={style.home} >
        <img src="http://cdn.wallpapersafari.com/22/68/CDxYPo.jpg" alt="" />
        </div>
    </div>
  )
}

export default Home