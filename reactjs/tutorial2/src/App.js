import React, { useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]); //the standard value of the useState is an empty array
  const [currentUser, setCurrentUser] = useState({}) //the standard value of the useState is an empty object
  const fetchingData = async () => {
    //fetching the data from the server
    console.log("retrieving data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users"); //upon pressing the button we send a fetch request to the fake API and await its response, which we assign to the variable response.
    let data = await response.json(); //we assign the response to data in json format so it becomes readable
    setUsers(data); //we update the state object with the data to retrieve the array list
  };

  const getDetailOfUser = (param)=>{ //the param is the user we clicked on, and as such we change setCurrentUser to that very user to then retrieve their data 
    console.log(param);
    setCurrentUser(param);
  }

  // when we click the button we create an array map that runs through each user and retrieves specifically their name and prints it into a new paragraph, while also assigning each paragraph a unique key in the form of the index number
  return (
    <Container className="bg-dark text-light p-5">
      <Row className="justify-content-center">
        <Col md={3}>
          <h1>Fetch Data</h1>
          <Button onClick={fetchingData}>Get Users Data</Button>
        </Col>

        <Col md={9} className="bg-secondary text-light">
            <h1>User Details:</h1>
            <p><Badge>Phone:</Badge> {currentUser.phone}</p>
            <p><Badge>Email:</Badge> {currentUser.email}</p>
            <p><Badge>Username:</Badge> {currentUser.username}</p>
        </Col>
        {/* {console.log(users)} */}

        {users.map((user, index) => ( //Don't use the index number as a key, use a built in ID instead
          <div key={index} onClick={()=> getDetailOfUser(user)}>
            <p>{user.name}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default App;
