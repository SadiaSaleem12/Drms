import React, { Component, useEffect } from "react";
import { Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "firebase/app";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  onSnapshot,
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/index";

const Classroom = (props) => {
  const [values, setValues] = useState({
    course: "",
    date: "",
  });
  var [showFormval, setShowForm] = useState(false);
  var [id, setId] = useState("");
  const [roomDetails, setRoomDetails] = useState([]);
  var [fields, setFields] = useState({});

  const handleChange = (e) => {
    values[e.target.id] = e.target.value;
    setValues({ ...values, values });
    // console.log(values);
  };
  const removeClass = async () => {
    await deleteDoc(collection(db, `room1${id}`))
      .then(() => {
        console.log("Slot removed successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const addData = async () => {
  //   const docRef = doc(db, "room1/tuesday/slot1", doc(id));
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("document", docSnap.data());
  //   } else {
  //     console.log("no data");
  //   }
  // };

  //   const addData= async (db) => {
  //  // const db = firebase.firestore();
  // const ref = db.collection('room1/tuesday/slot1').doc()

  //   let getDoc = ref.get()
  //   .then(doc => {
  //     if (!doc.exists) {
  //       console.log('No such document!');
  //     } else {
  //       console.log('Document data:', doc.data());
  //     }
  //   })
  //   .catch(err => {
  //     console.log('Error getting document', err);
  //   });
  // }
  //   useEffect(()=>{

  //       addData()
  //   })
  const showForm = () => {
    const saveChanges = async () => {
      const firebaseConfig = {
        
        // apiKey: process.env.REACT_APP_apiKey,
        // authDomain: process.env.REACT_APP_authDomain,
        // projectId: process.env.REACT_APP_projectId,
        // storageBucket: process.env.REACT_APP_storageBucket,
        // messagingSenderId: process.env.REACT_APP_messagingSenderId,
        // appId: process.env.REACT_APP_appId,
        // measurementId: process.env.REACT_APP_measurementId,
        apiKey: "AIzaSyDJvLhy3fSxVTHSOyT32X70UPTWK2UQHfM",
         authDomain: "firestore-app-3af45.firebaseapp.com",
         databaseURL: "https://firestore-app-3af45-default-rtdb.firebaseio.com",
          projectId: "firestore-app-3af45",
          storageBucket: "firestore-app-3af45.appspot.com",
          messagingSenderId: "617491569351",
          appId: "1:617491569351:web:5efa7bf5010a5c00fe7ce2",
          measurementId: "G-235WTYHX3D"
      
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);

      await addDoc(collection(db, `room2${id}`), {
        course: values.course,
        date: values.date,
      })
        .then((res) => {
          var response = res._key.path.segments[3];
          //  console.log(res._key.path.segments[3]);
          var docRef = doc(db, `room2${id}`, `${response}`);
          onSnapshot(docRef, (doc) => {
            if (id == "/tuesday/slot1") {
              setFields({
                tuesday_slot1: {
                  course: doc.data().course,
                  ids: id,
                },
              });
              var div = document.getElementById(`${id}`);
              console.log(div);
              var p = document.createElement("p");
              p.textContent = doc.data().course;
              // console.log(p);
              div.appendChild(p);
              console.log("Slot entered successfully");
              console.log(fields);
            }
            //  console.log(doc.data().course)
          });

          //  const docRef= doc(db,"room1/tuesday/slot1",doc.id);
          //  const docSnap = await
          //  getDoc(docRef).then( (snapshot)=> setRoomDetails(snapshot.data().course));
          // addData();
          // console.log(setRoomDetails());
          // p.setAttribute("slot-id", doc(id)); // id undefined error
          // console.log(doc.data().course);
          // p.textContent = setRoomDetails();
        })
        // var p = document.createElement("p");
        // p.setAttribute("slot-id",doc.id); // id undefined error
        // // console.log(doc.data().course);
        // p.textContent = values.course;
        // var div = document.getElementById("r1-tues-slot1")
        //    div.appendChild(p);
        //   console.log("Slot entered successfully");
        // })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div>
        <Form db={db} id="formclass">
          <Form.Group className="mt-3">
            <Form.Label id="label">Add Class Details</Form.Label>
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
              id="submitbtn"
              onClick={() => {
                setShowForm(false);
                saveChanges();
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Link to="/Dashboard">
        {" "}
        <button id="dashbtn">Dashboard</button>
      </Link>
      <h1 id="mainhead">Departmental Resource Management System</h1>
      {showFormval ? showForm() : null}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand id="navbarbrand">Classrooms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/classroom" id="navbarlinks">
                Room1
              </Nav.Link>
              <Nav.Link href="/room2" id="navbarlinks">
                Room2
              </Nav.Link>
              <Nav.Link href="/room3" id="navbarlinks">
                Room3
              </Nav.Link>
              <Nav.Link href="/room4" id="navbarlinks">
                Room4
              </Nav.Link>
              <Nav.Link href="/room5" id="navbarlinks">
                Room5
              </Nav.Link>
              <Nav.Link href="/room6" id="navbarlinks">
                Room6
              </Nav.Link>
              <Nav.Link href="/classroom" id="navbarlinks">
                Room7
              </Nav.Link>
              <Nav.Link href="/room8" id="navbarlinks">
                Room8
              </Nav.Link>
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
              <div className="row" id="/monday/slot1">
                <p> DWM (G1) </p>
              </div>
            </td>
            <td>
              <div className="row" id="/tuesday/slot1">
                {/* {roomDetails.map(room =>(
                  return
                  <li key ={room.course}>{room.course}</li>
                ))} */}
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                      setId("/tuesday/slot1");
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      removeClass();
                      setId("/tuesday/slot1");
                    }}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="/wednesday/slot1">
                <p> MS(G1) </p>
              </div>
            </td>
            <td>
              <div className="row" id="/thursday/slot1">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                      setId("/friday/slot1");
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot1">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                      setId("r1-fri-slot1");
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="slot2">9:20-11:00</td>
            <td>
              <div className="row" id="r1-mon-slot2">
                <p>NIS (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-tues-slot2">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-wed-slot2">
                <p>NM (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-thurs-slot2">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot2">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="slot3">11:30-1:10</td>
            <td>
              <div className="row" id="r1-mon-slot3">
                <p>MS (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-tues-slot3">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-wed-slot3">
                <p>DWM (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-thurs-slot3">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot3">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="slot4">2:00-2:50</td>
            <td>
              <div className="row" id="r1-mon-slot4">
                <p>NM (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-tues-slot4">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-wed-slot4">
                <p> NIS (G1)</p>
              </div>
            </td>
            <td>
              <div className="row" id="r1-thurs-slot4">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot4">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="slot5">2:50-3:40</td>
            <td>
              <div className="row" id="r1-mon-slot5">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-tues-slot5">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-wed-slot5">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    {" "}
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-thurs-slot5">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot5">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="slot6">3:40-4:30</td>
            <td>
              <div className="row" id="r1-mon-slot6">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-tues-slot6">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-wed-slot6">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-thurs-slot6">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
            <td>
              <div className="row" id="r1-fri-slot6">
                <div className="col-md-4">
                  <Button
                    id="btns"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    <FaPencilAlt />
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button id="btns">
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Classroom;
