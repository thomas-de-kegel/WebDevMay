//rfce -> create a new app
//COMPONENTS(function App()) NAMES NEED TO START WITH A CAPITAL LETTER!!!!!!!!
import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap/";

function App() {
  const [count, setCount] = useState(0); //variable, setVariable
  const [userName, setUserName] = useState("none");
  const [show,setShow] = useState(false);
  const IncreaseNumber = (e) => {
    console.log("+");
    if (count >= 10) {
      alert("Max value reached!");
    } else {
      setCount(count + 1); //update state value
    }
  };
  const DecreaseNumber = (e) => {
    console.log("-");
    if (count !== 0) {
      setCount(count - 1); //update state value
    } else {
      alert("You can't do that!");
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value); //DOM manipulation. The console logs the value(what we are typing) of the event(the input field)
    setUserName(e.target.value); //userName gets assigned whatever we are typing in the input field
  };
  return (
    <Container fluid={false}>
      <Row className="justify-content-center">
        <Col md={5} className="p-3 bg-dark text-light">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button size="lg" className="rounded-2 mb-3" onClick={()=>setShow(!show)}>
            display username
          </Button>
            <h1>{show ? userName : ""}</h1> 
          <Button size="lg" onClick={IncreaseNumber} variant="light">
            Increase Number
          </Button>
        </Col>
        <Col md={5} className="p-3 bg-danger text-light">
          <Button size="lg" onClick={DecreaseNumber} variant="light">
            Increase Number
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10} className="p-5 bg-warning text-center">
          {count}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
