//rfce to make new component
import React from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <>
    <Layout></Layout>
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={"/"}>Homepage</Link></li> {/*Compared to using an <a> tag with a href, Link, being a react tag, doesn't reload the whole page when we click the link*/}
            <li><Link to={"/Contact"}>Contact Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
