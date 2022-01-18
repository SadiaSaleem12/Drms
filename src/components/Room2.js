
import React, { Component, useState } from "react";
import { Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Room2 = (props) => {
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
  
    return (

      <div>
        <Form id="formclass">
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
            <Button id="submitbtn"
              onClick={() => {
                setShowForm(false);
                //saveChanges();
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return (
    <div>
      <Link to="/Dashboard"> <button id="dashbtn">Dashboard</button></Link>
<h1 id="mainhead">Departmental Resource Management System</h1>
          {showFormval ? showForm() : null}
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand id="navbarbrand">Classrooms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/classroom" id="navbarlinks">Room1</Nav.Link>
              <Nav.Link href="/room2" id="navbarlinks">Room2</Nav.Link>
              <Nav.Link href="/room3" id="navbarlinks">Room3</Nav.Link>
              <Nav.Link href="/room4" id="navbarlinks">Room4</Nav.Link>
              <Nav.Link href="/room5" id="navbarlinks">Room5</Nav.Link>
              <Nav.Link href="/room6" id="navbarlinks">Room6</Nav.Link>
              <Nav.Link href="/classroom" id="navbarlinks">Room7</Nav.Link>
              <Nav.Link href="/room8" id="navbarlinks">Room8</Nav.Link>
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
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true); setId("r1-thurs-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div> 
                </div>
                </td>
             <td>
                <div className='row'>
                  
                <p>ISLM</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true); setId("r1-thurs-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row'>
                <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                </td> 
          </tr>
           <tr>
                <td id="slot2">9:20-10:10</td>
                <td>
                  <div className='row'>
                  <div className='col-md-4'><Button id ='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                 
                  
                </div>
                        </td>
                <td>
                <div className='row'>
               
                <p>ISLM(S1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
              
                </div>
                </td>
                <td>
                <div className='row'>
                <p>DIC(S1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot3">10:10-11:00</td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
              
                </div>
                </td>
                <td>
                <div className='row'>
               <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
             
                </div>
                </td>
                <td>
                <div className='row'>
                <p>DIC(S1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot4">11:30-12:20</td>
                <td>
                  <div className='row'>
                  <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row'>
               
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot5">12:20-1:00</td>
                <td>
                  <div className='row'>
                  <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
              
                  
                </div>
                        </td>
                <td>
                <div className='row'>
               <p>DIC(S1)</p>    
                </div>
                </td>
                <td>
                <div className='row'>
               
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>  
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
         
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot6">2:00-2:50</td>
                <td>
                  <div className='row'>
                  <p>PF(S1)</p>
              
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'> <FaTrash /></Button></div>
         
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'> <FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'> <FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
             <tr>
                <td id="slot6">2:50-3:40</td>
                <td>
                  <div className='row'>
                    
                        <p> PF(S1)</p>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <p> FIT(S1)</p>
                  
         
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
                <td>
                <div className='row'>
               
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
      
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
             <tr>
                <td id="slot6">3:40-4:30</td>
                <td>
                  <div className='row'>
    <p>PF(S1)</p>
                  
                </div>
                        </td>
                <td>
                <div className='row'>
                <p>FIT(S1)</p>
         
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'> <FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row'>
                <div className='col-md-4'><Button id ='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button id='btns'> <FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
        </tbody>
      </table>
      {showFormval ? showForm() : null}
    </div>
  );
};

export default Room2;
