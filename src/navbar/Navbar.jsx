import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import style from "./_navbar.module.css"
const Navbar = () => {
  return (
    <div>
        <section  id={style.navbar}>
            <article>
                <Logo/>
                <Menu/>
            </article>
        </section>
    </div>
  )
}

export default Navbar