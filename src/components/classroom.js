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
  setDoc,
  updateDoc,
  collection,
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
  // const state = {showForm: false,id:""}
  const handleChange = (e) => {
    values[e.target.id] = e.target.value;
    setValues({ ...values, values });
    console.log(values);
  };
  const showForm = () => {
    // const firebaseConfig = {
    //   apiKey: "AIzaSyDJvLhy3fSxVTHSOyT32X70UPTWK2UQHfM",
    //   authDomain: "firestore-app-3af45.firebaseapp.com",
    //   projectId: "firestore-app-3af45",
    //   storageBucket: "firestore-app-3af45.appspot.com",
    //   messagingSenderId: "617491569351",
    //   appId: "1:617491569351:web:5efa7bf5010a5c00fe7ce2",
    //   measurementId: "G-235WTYHX3D"
    // };
    // const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app)

    // Form.addEventListener(("submit"),(e)=>{
    //   e.preventDefault();
    //   if (id="r1-mon-slot1")
    //    db.collection("room1/monday/slot1").add({
    //           course: Form.course.value,
    //           date : Form.date.value
    //    })
    //   //  form.course.value="";
    //   //  form.slot.value="";
    // })

    // const getData = () =>{

    // // console.log(id)

    //   // Form.addEventListener(("submit"),(e)=>{
    //   //   e.preventDefault();
    //     if (id="r1-mon-slot1")
    //       db.collection('room1').document('monday').collection('slot1').setDoc(
    //       {
    //         course: Form.name.value,
    //         date : Form.date.value
    //  })

    //  Form.course.value="";
    //  Form.date.value="";
    //     //  db.collection("room1/monday/slot1").add({
    //     //         course: Form.course.value,
    //     //         date : Form.date.value
    //     //  })
    //     //  Form.course.value="";
    //     //  Form.date.value="";
    //   // })
    // }
    const saveChanges = async () => {
      if ((id = "r1-mon-slot1"))
        await addDoc(collection(db, "room1/monday/slot1"), {
          course: values.course,
          date: values.date,
        })
          .then((res) => {
            console.log("Data is entered successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      console.log(values);
    };
 const removeClass =()=>{

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
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-mon-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns' onClick={()=>{removeClass();setId('r1-mon-slot2')}}><FaTrash /></Button></div>
                  
                </div>
                </td>
            {/* <td>
                <div className='row'>
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-tues-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
               <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-wed-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash/></Button></div>
                  
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
                </td> */}
          </tr>
          {/* <tr>
                <td id="slot2">9:20-11:00</td>
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
             <tr>
                <td id="slot3">11:30-1:10</td>
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
             <tr>
                <td id="slot4">2:00-2:50</td>
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
             </tr> */}
        </tbody>
      </table>
      {showFormval ? showForm() : null}
    </div>
  );
};

export default Classroom;
