
import React, { Component, useState } from "react";
import { Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  deleteField,
  updateDoc
} from "firebase/firestore/lite";
import { db } from "../firebase/index";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Room4 = (props) => {
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
        const firebaseConfig = {
          apiKey: "AIzaSyDJvLhy3fSxVTHSOyT32X70UPTWK2UQHfM",
          authDomain: "firestore-app-3af45.firebaseapp.com",
          projectId: "firestore-app-3af45",
          storageBucket: "firestore-app-3af45.appspot.com",
          messagingSenderId: "617491569351",
          appId: "1:617491569351:web:5efa7bf5010a5c00fe7ce2",
          measurementId: "G-235WTYHX3D",
        };
        const app = initializeApp(firebaseConfig);
         const auth = getAuth(app);
         const db = getFirestore(app);
      if (id = "r1-tues-slot1")
       { await addDoc(collection(db, "room1/tuesday/slot1"), {
          course: values.course,
          date: values.date,
        }).then((res) => {
              
            console.log("Slot entered successfully");
            alert("Slot reserved successfully")
                         
            var div = document.getElementById("r1-tues-slot1");
            var p = document.createElement("p");
            p.textContent = values.course;
            console.log(p);
            div.appendChild(p);
            console.log("Slot entered successfully");
          })
          .catch((err) => {
            console.log(err);
          });

       }
              
    };
    return (

      <div>
        <Form >
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
              <Nav.Link href="/classroom">Room1</Nav.Link>
              <Nav.Link href="/room2">Room2</Nav.Link>
              <Nav.Link href="/room3">Room3</Nav.Link>
              <Nav.Link href="/room4">Room4</Nav.Link>
              <Nav.Link href="/room5">Room5</Nav.Link>
              <Nav.Link href="/room6">Room6</Nav.Link>
              <Nav.Link href="/classroom">Room7</Nav.Link>
              <Nav.Link href="/room8">Room8</Nav.Link>
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
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-tues-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>  
                </div>
                </td>
             <td>
                <div className='row'>
                  
                <p>DAA(G1)</p>
                <p>TAFL(G2)</p>
                  
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
                  <p>DAA (G1)</p>
                  <p>TAFL(G2)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                
                <p>Alternate Fridays</p>
                  
                </div>
                </td> 
          </tr>
           <tr>
                <td id="slot2">9:20-10:10</td>
                <td>
                  <div className='row'>
                  <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
               
                  <p>TAFL (G1)</p>
                  <p>DAA (G2)</p>
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
                <p>TAFL (G2)</p>
                  <p>DAA (G1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
               <p>PS (G1)</p>
               <p>OS (G2)</p>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot3">10:10-11:00</td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row'>
                <p>PS(G1)</p>
                <p>OS(G2)</p>
                  
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
                <p>PS(G2)</p>
                <p>OS(G1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p>PS(G1)</p>
                <p>OS(G2)</p>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot4">11:30-12:20</td>
                <td>
                  <div className='row'>
                  <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                </div>
                        </td>
                <td>
                <div className='row'>
                <p>PS(G2)</p>
                <p>DAA(G1)</p>
                  
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
                <p>PS(G1)</p>
                <p>DAA(G2)</p> 
                </div>
                </td>
                <td>
                <div className='row'>
                <p>OS(G1)</p>
                <p>PS(G2)</p>
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot5">12:20-1:00</td>
                <td>
                  <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
         <p>OS(G1)</p>
         <p>TAFL(G2)</p>      
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
                <p>OS(G2)</p>
         <p>TAFL(G1)</p> 
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p>OS(G1)</p>
         <p>PS(G2)</p> 
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot6">2:00-2:50</td>
                <td>
                  <div className='row'>
      <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <p>SE(G1)</p>
         
                  
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
                <p>SE(G1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p>SE(G2)</p>
                </div>
                </td>
             </tr> 
             <tr>
                <td id="slot6">2:50-3:40</td>
                <td>
                  <div className='row'>
      <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <p>SE(G1)</p>
         
                  
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
               
                <p>SE(G2)</p>
      
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <p>SE(G2)</p>
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
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
         
                  
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
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
        </tbody>
      </table>
      {showFormval ? showForm() : null}
    </div>
  );
};

export default Room4;