import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function TodoList() {
    const [todo,setTodo] = useState("") //store single todo
    const [todos, setTodos] = useState([]) //store multiple todos
    const handleInput= (e) => {
        console.log("Handle input", e.target.value, e.target) //we combine the string "Handle Input" and the value entered into the text field. We also add on what event object we are targetting here
        setTodo(e.target.value)

    }

    function create_UUID(){ //We create a unique UUID so we don't have to use the index number as the key
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
        }

    const handleClick = (e) => {
        console.log("clickety clack =>", todo)
        // let temp = todos; //other way to do this, but takes more lines (BUGGED)
        // temp.push(todo);
        // setTodos(temp);
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
          {console.log(todos)}
        </InputGroup>
            <hr/>
            <ul>
                {
                    todos.map(todo =>(
                        <li key={create_UUID}> {todo}</li>
                    ))
                }
            </ul>
      </Col>
    </Row>
  );
}

export default TodoList;
