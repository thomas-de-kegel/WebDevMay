//rfce to make new component
import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import SearchResult from "./SearchResult";

function App() {
  const [result,setResult] = useState([])
  const searchResult = () => {
    console.log("this is a search result")
    setResult([{
      id:1,
      name:'Batman'

    }])
  }
  return (
    <>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/:movie_id" element={<MovieDetail />} />
          <Route path="/search" element={<SearchResult result={result} />} />
        </Routes>
    </Layout>
    </>
  );
}

export default App;
