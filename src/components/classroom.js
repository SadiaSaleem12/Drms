import React, { Component } from "react";
import { Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "firebase/app";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc
} from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../firebase/index";

const Classroom = (props) => {
  const [values, setValues] = useState({
    course: "",
    date: "",
  });
  var [showFormval, setShowForm] = useState(false);
  var [id, setId] = useState("");
  const handleChange = (e) => {
    values[e.target.id] = e.target.value;
    setValues({ ...values, values });
    console.log(values);
  };
  const showForm = () => {
  
    const saveChanges = async () => {
      if (id = "r1-mon-slot1")
        await addDoc(collection(db, "room1/monday/slot1"), {
          course: values.course,
          date: values.date,
        }).then((res) => {
            console.log("Slot entered successfully");
          })
          .catch((err) => {
            console.log(err);
          });

    };
    const removeClass = async ()=>{
        if (id="r1-mon-slot1")
           await  deleteDoc(collection(db,"room1/monday/slot1"))
           .then(()=>{
             console.log("Slot removed successfully")
           }).catch((err)=>{
             console.log(err)
           })
 }
    return (

      <div>
        <Form db={db}>
          <Form.Group className="mt-3">
            <Form.Label>Enter Class Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              name="course"
              id="course"
              onChange={handleChange}
            />
            <Form.Control
              type="text"
              placeholder="Enter date "
              name="date"
              id="date"
              onChange={handleChange}
            />
            <Button
              onClick={() => {
                setShowForm(false);
                saveChanges();
              }}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Classrooms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#room1">Room1</Nav.Link>
              <Nav.Link href="#room2">Room2</Nav.Link>
              <Nav.Link href="#room3">Room3</Nav.Link>
              <Nav.Link href="#room4">Room4</Nav.Link>
              <Nav.Link href="#room5">Room5</Nav.Link>
              <Nav.Link href="#room6">Room6</Nav.Link>
              <Nav.Link href="#room7">Room7</Nav.Link>
              <Nav.Link href="#room8">Room8</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <table className="maintable">
        <thead>
          <tr>
            <th> Days/Timings</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td id="slot1">8:30-9:20</td>
            <td>
                <div className='row' id="r1-mon-slot1">
                       <p> DWM (G1) </p>
                </div>
                </td>
             <td>
                <div className='row'>
                  
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-tues-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p> MS(G1) </p>
                </div>
                </td>
                <td>
                <div className='row'>
              <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-thurs-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-fri-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td> 
          </tr>
           <tr>
                <td id="slot2">9:20-11:00</td>
                <td>
                  <div className='row'>
                       <p>NIS (G1)</p>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
              <p>NM (G1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot3">11:30-1:10</td>
                <td>
                <div className='row'>
                  <p>MS (G1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                       <p>DWM (G1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot4">2:00-2:50</td>
                <td>
                  <div className='row'>
               <p>NM (G1)</p>
                </div>
                        </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p> NIS (G1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
             <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot5">2:50-3:40</td>
                <td>
                  <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
            <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash/></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
         <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot6">3:40-4:30</td>
                <td>
                  <div className='row'>
      <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
             <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
           <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
             </tr> 
        </tbody>
      </table>
      {showFormval ? showForm() : null}
    </div>
  );
};

export default Classroom;
