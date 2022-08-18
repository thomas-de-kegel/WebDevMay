import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function TodoList() {
    const [todo,setTodo] = useState("") //store single todo
    const [todos, setTodos] = useState([]) //store multiple todos
    const handleInput= (e) => {
        console.log("Handle input", e.target.value, e.target) //we combine the string "Handle Input" and the value entered into the text field. We also add on what event object we are targetting here
        setTodo(e.target.value)

    }

    const handleClick = (e) => {
        console.log("clickety clack =>", todo)
        setTodos([...todos,todo]) //we add the latest todo to our existing todos list. Faster than converting it so we can use .push
    }
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <InputGroup className="mb-3">

          <Form.Control
          onChange = {handleInput}
            placeholder="todo"
            aria-label="todo"
            aria-describedby="basic-addon1"
          />
          <Button onClick={handleClick}>Add</Button>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default TodoList;
