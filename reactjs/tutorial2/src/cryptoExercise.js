import React, { useState } from "react";
import { Button, Col, Container, Row, Badge } from "react-bootstrap";

function App() {
  const [cryptos, setCryptos] = useState({});
  const getDetailOfCrypto = (param) => {
    console.log(param);
    setCurrentCrypto(param);
  };
  const [currentCrypto, setCurrentCrypto] = useState({});
  // fetching data in react.js
  const fetchData = async () => {
    const proxyUrl = "https://arkakapi.herokuapp.com/",
      targetUrl =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR";

    const res = await fetch(proxyUrl + targetUrl);
    const dataCrypto = await res.json();
    setCryptos(dataCrypto);
  };
  // end of fetching data
  if (Object.keys(cryptos).length === 0) {
    //als het object nog niet gedefinieerd is, i.e. als er nog niets gefetcht is. Anders krijgen we een error
    return (
      <Container className="bg-dark text-light p-4" fluid={true}>
        <Row className="justify-content-center">
          <img src="/Images/logo.jpg" className="mx-auto w-25" />
        </Row>
        <Row>&nbsp;</Row>
        <Row className="justify-content-center text-center">
          <Col md={3}>
            <h1>Fetch data</h1>
            <Button onClick={fetchData}>Get Cryptocurrency Data</Button>
          </Col>
          {/*<Col md={9} className="bg-secondary text-dark">
                        <h1>User details</h1>
                         <p><Badge>Name: </Badge> {currentCrypto.name}</p>
                    <p><Badge>Symbol: </Badge> {currentCrypto.symbol}</p>
                    <p><Badge>Price: </Badge> {currentCrypto.quote.EUR.price}</p> 
                    </Col>*/}
          {/* {console.log(cryptos.data)}
                {cryptos.data.map((crypto, index) => {
                    return <div key={index} onClick={() => getDetailOfCrypto(crypto)}>
                        <p>{crypto.name}</p>
                    </div>
                })
                } */}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="bg-dark text-light p-4" fluid={true}>
        <Row className="justify-content-center">
          <img src="/Images/logo.jpg" className="mx-auto w-25" />
        </Row>
        <Row>&nbsp;</Row>
        <Row className="justify-content-center">
          {Object.keys(currentCrypto).length !== 0 ? (
            <>
              <Col md={3}>
                <h1>Fetch data</h1>
                <Button onClick={fetchData}>Get Cryptocurrency Data</Button>
              </Col>
              <Col md={9} className="bg-secondary text-dark">
                <h1>User details</h1>
                <p>
                  <Badge>Name: </Badge> {currentCrypto.name}
                </p>
                <p>
                  <Badge>Symbol: </Badge> {currentCrypto.symbol}
                </p>
                <p>
                  <Badge>Price: </Badge> €{currentCrypto.quote.EUR.price}
                </p>
              </Col>
            </>
          ) : (
            <Col md={3} className="text-center">
              <h1>Fetch data</h1>
              <Button onClick={fetchData}>Get Cryptocurrency Data</Button>
            </Col>
          )}
          {console.log(cryptos.data)}
          {cryptos.data.map((crypto, index) => {
            return (
              <div key={index} onClick={() => getDetailOfCrypto(crypto)}>
                <p>{crypto.name}</p>
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
