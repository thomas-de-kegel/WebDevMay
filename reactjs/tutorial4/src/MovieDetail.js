import React, { useEffect, useState } from "react";
import {
  Badge,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetail() {
  //https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
  //https://api.themoviedb.org/3/movie/616037/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
  const { movie_id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieTrailer(data.results[0].key);
        console.log(data.results);
      });
  }, [movie_id]);
  return (
    <Container className="bg-dark p-0" fluid={true}>
      <div
        className="p-5 bg-secondary text-light movie-img"
        style={{
          background: `url(https://image.tmdb.org/t/p/w500${movieDetail.poster_path})`,
        }}
      >
        <h1 className="text-center movie-title">{movieDetail.title}</h1>
      </div>
      <Row className="p-0 m-0">
        <Col md={4} className="detail-left">
          <ListGroup className="p-3">
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                IMDB score:
              </Badge>{" "}
              {Math.floor(movieDetail.vote_average)}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Original Language:
              </Badge>{" "}
              {movieDetail.original_language !== undefined
                ? movieDetail.original_language.toUpperCase()
                : ""}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Release Date:
              </Badge>{" "}
              {movieDetail.release_date}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Genre(s):
              </Badge>{" "}
              <ListGroup>
                {movieDetail.genres !== undefined
                  ? movieDetail.genres.map((cat, index) => (
                      <ListGroup.Item
                        className="rounded-0 py-0 genre-list text-light"
                        key={cat.id}
                      >
                        {cat.name}
                      </ListGroup.Item>
                    ))
                  : ""}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Production Copmany(s):
              </Badge>{" "}
              {movieDetail.production_companies !== undefined
                ? movieDetail.production_companies.map((prod, index) => (
                    <>
                      <p className="d-inline" key={prod.id}>
                        {prod.name}
                      </p>
                      ,{" "}
                    </>
                  ))
                : ""}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Budget:
              </Badge>{" "}
              {movieDetail.budget > 0 ? `$ ${movieDetail.budget}` : "No Data"}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Box Office Returns:
              </Badge>{" "}
              {movieDetail.revenue > 0 ? `$ ${movieDetail.revenue}` : "No Data"}
            </ListGroup.Item>
            <ListGroup.Item className="bg-none text-light">
              <Badge bg="warning" text="dark">
                Synopsis:
              </Badge>{" "}
              {movieDetail.overview}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={8}>
          <iframe
            width={560}
            height={315}
            src={`https://www.youtube.com/embed/${movieTrailer}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
