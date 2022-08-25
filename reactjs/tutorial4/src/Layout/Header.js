import React from 'react'
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";


function Header() {
  return (
    <div>
      <nav>
          <ul>
            <li><Link to={"/"}>Homepage</Link></li> {/*Compared to using an <a> tag with a href, Link, being a react tag, doesn't reload the whole page when we click the link*/}
            <li><Link to={"/Contact"}>Contact Page</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header