import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, CardGroup, Container, ListGroup } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import MovieCards from "./components/MovieCards";

function Home() {
  const [movies, setMovies] = useState([]);
const [page,setPage] = useState(1);

const nextPage = () => setPage(page+1)
const prevPage = () => {
  if(page <= 1){
    return
  }else{
    setPage(page-1)

  }
}
  const fetchMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`
    );
    let data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <>
      <Container fluid={true} className="p-0">
        <CarouselComponent />
        {console.log(page, "page number")}
      </Container>
      <ul className="movies p-4 bg-dark">
        {movies != undefined
          ? movies.map((movie, index) => (
              <MovieCards movie={movie} key={index} test={"this is a test props data"} />
            ))
          : ""}
      </ul>

      <div className="pagination d-flex justify-content-center pb-2 bg-dark">
      <ButtonGroup aria-label="Basic example">
      <Button variant="warning" onClick={prevPage}>Prev.</Button>
      <Button variant="warning"onClick={nextPage}>Next.</Button>
    </ButtonGroup>
      </div>
    </>
  );
}

export default Home;
