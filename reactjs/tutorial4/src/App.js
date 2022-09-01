//rfce to make new component
import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import SearchResult from "./SearchResult";

function App() {
  const [page, setPage] = useState(1)

  // clickhandlers for pagination
  const nextPage = () => setPage(page + 1)
  const prevPage = () => {
      if (page <= 1) {
          return
      } else {
          setPage(page - 1)
      }
  }
  // https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&query=Joker
  const [result, setResult] = useState([])
  const [inputValue, setInputValue] = useState('')
  const inputHandler = (e) => {
      if (inputValue !== '') {
          setInputValue(e.target.value)
      } else {
          setInputValue('a')

      }
      let inputVal = e.target.value

      //   .finally(()=><Navigate to={'/'}/>)
  }

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&query=${inputValue}`)
          .then(response => response.json())
          .then(data => {
              setResult(data.results)

          })
          .catch(err => console.log(err))
  },[page,inputValue])

  const searchResult = () => {
      console.log('This is search handler')
      // setResult([{
      //     id:1,
      //     name:'Batman & Joker'
      // }])
  }
  return (
      <Layout searchResultHandler={searchResult} inputHandler={inputHandler}>
          <Routes>
              <Route path='/' element={<Home inputValue={inputValue} result={result} nextPage={nextPage} prevPage={prevPage} page={page} />} />
              <Route path='/search' element={<SearchResult result={result} />} />
              <Route path='/:movie_id' element={<MovieDetail />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
      </Layout>
  )
}

export default App;
