import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  CardGroup,
  Container,
  ListGroup,
} from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import MovieCards from "./components/MovieCards";

function Home({ inputValue, result, page, nextPage, prevPage}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`)
      let data = await response.json()
      setMovies(data.results)
    }
    fetchMovies()

    fetch('/json/8.8.8.8')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }, [page])

  return (
    <>
      <Container fluid={true} className="p-0">
        <CarouselComponent />
        {
          console.log(inputValue, "this is input value")
        }
      </Container>
      <ul className="movies p-4 bg-dark">
        {
          inputValue !== '' && result !== undefined ?
            result.map((movie, index) => (
              <MovieCards movie={movie} key={index} test={'this is a test props data'} />
            ))
            :
            (
              movies !== undefined ?
                movies.map((movie, index) => (
                  <MovieCards movie={movie} key={index} test={'this is a test props data'} />
                ))
                :
                ''
            )
        }
      </ul>

      <div className="pagination bg-dark d-flex justify-content-center pb-2">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={prevPage} className="rounded-0">Previous</Button>
          <Button variant="primary" onClick={()=>{
            nextPage()

          }} className="rounded-0">Next</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default Home;
