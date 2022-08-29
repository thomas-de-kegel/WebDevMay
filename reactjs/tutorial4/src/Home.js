import React, { useEffect, useState } from "react";
import { Button, CardGroup, Container, ListGroup } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import MovieCards from "./components/MovieCards";

function Home() {
  const [movies, setMovies] = useState([]);
  let pageNumber = 1;

  const fetchMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&}`
    );
    let data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Container fluid={true} className="p-0">
        <CarouselComponent />
        {console.log(movies)}
      </Container>
      <ul className="movies p-4 bg-dark">
        {movies != undefined
          ? movies.map((movie, index) => (
              <MovieCards movie={movie} test={"this is a test props data"} />
            ))
          : ""}
      </ul>
    </>
  );
}

export default Home;
