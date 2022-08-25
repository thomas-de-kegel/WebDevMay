import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import MovieCards from "./components/MovieCards";
import CarouselComponent from "./Layout/Carousel";

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1`
    );
    let data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <Container>
      <CarouselComponent />
      {console.log(movies)}
      <CardGroup>
        {
        movies != undefined ? 
        movies.map((movie, index) => <MovieCards  singlemovie={movie}/>) : ""
      }
      </CardGroup>
    </Container>
  );
}

export default Home;
