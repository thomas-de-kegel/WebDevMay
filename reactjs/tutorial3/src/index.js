import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Blog from "./Blog";
import Blogdetail from "./Blogdetail";
//!!!!! gebruik element in plaats van component, anders werkt <Route> niet in v6 !!!!!\\

const TestFunction= () => {
  console.log("Test Function");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <h1>This is static</h1>
    <ul>
      <li><a href="/">Home Page</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/blog/5">Post 5</a></li> {/*De tekst op deze pagina zal weergeven wat we na de / hebben geschreven*/}
    </ul>
      <Routes>
        <Route path="/" element= {<App users={[1,2,3,4]} posts={["id1","id2"]} />}/> {/*Niet vergeten om in het js file ook deze objecten te callen*/}
        <Route path="/contact" element= {<Contact MyFunction={TestFunction} />}/> 
        <Route path="*" element= {<NotFound />}/> 
        <Route path="/blog" element= {<Blog />}/> 
        <Route path="/blog/:id" element= {<Blogdetail />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
