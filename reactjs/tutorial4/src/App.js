//rfce to make new component
import React from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Layout>
    </>
  );
}

export default App;
