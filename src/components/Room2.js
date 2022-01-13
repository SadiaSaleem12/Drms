
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
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/index";


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
  const removeClass = async ()=>{
    if (id="r1-tues-slot1")
       await  deleteDoc(collection(db,"room1/tuesday/slot1"))
       .then(()=>{
         console.log("Slot removed successfully");
         
       }).catch((err)=>{
         console.log(err)
       })
}

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
      if (id == "r2-mon-slot1")
       { await addDoc(collection(db, "room2/monday/slot1"), {
          course: values.course,
          date: values.date,
        }).then((res) => {
              alert("Slot reserved successfully");       
            var div = document.getElementById("r2-mon-slot1");
            var p = document.createElement("p");
            p.textContent = values.course;
            console.log(p);
            div.appendChild(p);
          })
          .catch((err) => {
            console.log(err);
          });

       }
      // else if (id == "r2-tues-slot1")
      //  { await addDoc(collection(db, "room2/tuesday/slot1"), {
      //     course: values.course,
      //     date: values.date,
      //   }).then((res) => {
      //         alert("Slot reserved successfully");       
      //       var div = document.getElementById("r2-tues-slot1");
      //       var p = document.createElement("p");
      //       p.textContent = values.course;
      //       console.log(p);
      //       div.appendChild(p);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //   }
      //     if (id = "r2-wed-slot1")
      //     { await addDoc(collection(db, "room2/wednesday/slot1"), {
      //        course: values.course,
      //        date: values.date,
      //      }).then((res) => {
      //            alert("Slot reserved successfully");       
      //          var div = document.getElementById("r2-wed-slot1");
      //          var p = document.createElement("p");
      //          p.textContent = values.course;
      //          console.log(p);
      //          div.appendChild(p);
      //        })
      //        .catch((err) => {
      //          console.log(err);
      //        });
      //     }
      //     if (id = "r2-thurs-slot1")
      //     { await addDoc(collection(db, "room2/thursday/slot1"), {
      //        course: values.course,
      //        date: values.date,
      //      }).then((res) => {
      //            alert("Slot reserved successfully");       
      //          var div = document.getElementById("r2-thurs-slot1");
      //          var p = document.createElement("p");
      //          p.textContent = values.course;
      //          console.log(p);
      //          div.appendChild(p);
      //        })
      //        .catch((err) => {
      //          console.log(err);
      //        });
      //     }
      //     if (id = "r2-fri-slot1")
      //     { await addDoc(collection(db, "room2/friday/slot1"), {
      //        course: values.course,
      //        date: values.date,
      //      }).then((res) => {
      //            alert("Slot reserved successfully");       
      //          var div = document.getElementById("r2-fri-slot1");
      //          var p = document.createElement("p");
      //          p.textContent = values.course;
      //          console.log(p);
      //          div.appendChild(p);
      //        })
      //        .catch((err) => {
      //          console.log(err);
      //        });
      //     }
      //     if (id = "r2-mon-slot2")
      //     { await addDoc(collection(db, "room2/monday/slot2"), {
      //        course: values.course,
      //        date: values.date,
      //      }).then((res) => {
      //            alert("Slot reserved successfully");       
      //          var div = document.getElementById("r2-mon-slot2");
      //          var p = document.createElement("p");
      //          p.textContent = values.course;
      //          console.log(p);
      //          div.appendChild(p);
      //        })
      //        .catch((err) => {
      //          console.log(err);
      //        });
   
      //     }
      //     if (id = "r2-tues-slot2")
      //     { await addDoc(collection(db, "room2/tuesday/slot2"), {
      //        course: values.course,
      //        date: values.date,
      //      }).then((res) => {
      //            alert("Slot reserved successfully");       
      //          var div = document.getElementById("r2-tues-slot2");
      //          var p = document.createElement("p");
      //          p.textContent = values.course;
      //          console.log(p);
      //          div.appendChild(p);
      //        })
      //        .catch((err) => {
      //          console.log(err);
      //        });
      //      }
      //        if (id = "r2-wed-slot2")
      //        { await addDoc(collection(db, "room2/wednesday/slot2"), {
      //           course: values.course,
      //           date: values.date,
      //         }).then((res) => {
      //               alert("Slot reserved successfully");       
      //             var div = document.getElementById("r2-wed-slot2");
      //             var p = document.createElement("p");
      //             p.textContent = values.course;
      //             console.log(p);
      //             div.appendChild(p);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      //        }
      //        if (id = "r2-thurs-slot2")
      //        { await addDoc(collection(db, "room2/thursday/slot2"), {
      //           course: values.course,
      //           date: values.date,
      //         }).then((res) => {
      //               alert("Slot reserved successfully");       
      //             var div = document.getElementById("r2-thurs-slot2");
      //             var p = document.createElement("p");
      //             p.textContent = values.course;
      //             console.log(p);
      //             div.appendChild(p);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      //        }
      //        if (id = "r2-fri-slot2")
      //        { await addDoc(collection(db, "room2/friday/slot2"), {
      //           course: values.course,
      //           date: values.date,
      //         }).then((res) => {
      //               alert("Slot reserved successfully");       
      //             var div = document.getElementById("r2-fri-slot2");
      //             var p = document.createElement("p");
      //             p.textContent = values.course;
      //             console.log(p);
      //             div.appendChild(p);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      //        }
      //        if (id = "r2-mon-slot3")
      //        { await addDoc(collection(db, "room2/monday/slot3"), {
      //           course: values.course,
      //           date: values.date,
      //         }).then((res) => {
      //               alert("Slot reserved successfully");       
      //             var div = document.getElementById("r2-mon-slot3");
      //             var p = document.createElement("p");
      //             p.textContent = values.course;
      //             console.log(p);
      //             div.appendChild(p);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      
      //        }
      //        if (id = "r2-tues-slot3")
      //        { await addDoc(collection(db, "room2/tuesday/slot3"), {
      //           course: values.course,
      //           date: values.date,
      //         }).then((res) => {
      //               alert("Slot reserved successfully");       
      //             var div = document.getElementById("r2-tues-slot3");
      //             var p = document.createElement("p");
      //             p.textContent = values.course;
      //             console.log(p);
      //             div.appendChild(p);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      //         }
      //           if (id = "r2-wed-slot3")
      //           { await addDoc(collection(db, "room2/wednesday/slot3"), {
      //              course: values.course,
      //              date: values.date,
      //            }).then((res) => {
      //                  alert("Slot reserved successfully");       
      //                var div = document.getElementById("r2-wed-slot3");
      //                var p = document.createElement("p");
      //                p.textContent = values.course;
      //                console.log(p);
      //                div.appendChild(p);
      //              })
      //              .catch((err) => {
      //                console.log(err);
      //              });
      //           }
      //           if (id = "r2-thurs-slot3")
      //           { await addDoc(collection(db, "room2/thursday/slot3"), {
      //              course: values.course,
      //              date: values.date,
      //            }).then((res) => {
      //                  alert("Slot reserved successfully");       
      //                var div = document.getElementById("r2-thurs-slot3");
      //                var p = document.createElement("p");
      //                p.textContent = values.course;
      //                console.log(p);
      //                div.appendChild(p);
      //              })
      //              .catch((err) => {
      //                console.log(err);
      //              });
      //           }
      //           if (id = "r2-fri-slot3")
      //           { await addDoc(collection(db, "room2/friday/slot3"), {
      //              course: values.course,
      //              date: values.date,
      //            }).then((res) => {
      //                  alert("Slot reserved successfully");       
      //                var div = document.getElementById("r2-fri-slot3");
      //                var p = document.createElement("p");
      //                p.textContent = values.course;
      //                console.log(p);
      //                div.appendChild(p);
      //              })
      //              .catch((err) => {
      //                console.log(err);
      //              });
      //           }
      //           if (id = "r2-mon-slot4")
      //           { await addDoc(collection(db, "room2/monday/slot4"), {
      //              course: values.course,
      //              date: values.date,
      //            }).then((res) => {
      //                  alert("Slot reserved successfully");       
      //                var div = document.getElementById("r2-mon-slot4");
      //                var p = document.createElement("p");
      //                p.textContent = values.course;
      //                console.log(p);
      //                div.appendChild(p);
      //              })
      //              .catch((err) => {
      //                console.log(err);
      //              });
         
      //           }
      //           if (id = "r2-tues-slot4")
      //           { await addDoc(collection(db, "room2/tuesday/slot4"), {
      //              course: values.course,
      //              date: values.date,
      //            }).then((res) => {
      //                  alert("Slot reserved successfully");       
      //                var div = document.getElementById("r2-tues-slot4");
      //                var p = document.createElement("p");
      //                p.textContent = values.course;
      //                console.log(p);
      //                div.appendChild(p);
      //              })
      //              .catch((err) => {
      //                console.log(err);
      //              });
      //            }
      //              if (id = "r2-wed-slot4")
      //              { await addDoc(collection(db, "room2/wednesday/slot4"), {
      //                 course: values.course,
      //                 date: values.date,
      //               }).then((res) => {
      //                     alert("Slot reserved successfully");       
      //                   var div = document.getElementById("r2-wed-slot4");
      //                   var p = document.createElement("p");
      //                   p.textContent = values.course;
      //                   console.log(p);
      //                   div.appendChild(p);
      //                 })
      //                 .catch((err) => {
      //                   console.log(err);
      //                 });
      //              }
      //              if (id = "r2-thurs-slot4")
      //              { await addDoc(collection(db, "room2/thursday/slot4"), {
      //                 course: values.course,
      //                 date: values.date,
      //               }).then((res) => {
      //                     alert("Slot reserved successfully");       
      //                   var div = document.getElementById("r2-thurs-slot4");
      //                   var p = document.createElement("p");
      //                   p.textContent = values.course;
      //                   console.log(p);
      //                   div.appendChild(p);
      //                 })
      //                 .catch((err) => {
      //                   console.log(err);
      //                 });
      //              }
      //              if (id = "r2-fri-slot4")
      //              { await addDoc(collection(db, "room2/friday/slot4"), {
      //                 course: values.course,
      //                 date: values.date,
      //               }).then((res) => {
      //                     alert("Slot reserved successfully");       
      //                   var div = document.getElementById("r2-fri-slot4");
      //                   var p = document.createElement("p");
      //                   p.textContent = values.course;
      //                   console.log(p);
      //                   div.appendChild(p);
      //                 })
      //                 .catch((err) => {
      //                   console.log(err);
      //                 });
      //              }
      //              if (id = "r2-mon-slot5")
      //              { await addDoc(collection(db, "room2/monday/slot5"), {
      //                 course: values.course,
      //                 date: values.date,
      //               }).then((res) => {
      //                     alert("Slot reserved successfully");       
      //                   var div = document.getElementById("r2-mon-slot5");
      //                   var p = document.createElement("p");
      //                   p.textContent = values.course;
      //                   console.log(p);
      //                   div.appendChild(p);
      //                 })
      //                 .catch((err) => {
      //                   console.log(err);
      //                 });
            
      //              }
      //              if (id = "r2-tues-slot5")
      //              { await addDoc(collection(db, "room2/tuesday/slot5"), {
      //                 course: values.course,
      //                 date: values.date,
      //               }).then((res) => {
      //                     alert("Slot reserved successfully");       
      //                   var div = document.getElementById("r2-tues-slot5");
      //                   var p = document.createElement("p");
      //                   p.textContent = values.course;
      //                   console.log(p);
      //                   div.appendChild(p);
      //                 })
      //                 .catch((err) => {
      //                   console.log(err);
      //                 });
      //               }
      //                 if (id = "r2-wed-slot5")
      //                 { await addDoc(collection(db, "room2/wednesday/slot5"), {
      //                    course: values.course,
      //                    date: values.date,
      //                  }).then((res) => {
      //                        alert("Slot reserved successfully");       
      //                      var div = document.getElementById("r2-wed-slot5");
      //                      var p = document.createElement("p");
      //                      p.textContent = values.course;
      //                      console.log(p);
      //                      div.appendChild(p);
      //                    })
      //                    .catch((err) => {
      //                      console.log(err);
      //                    });
      //                 }
      //                 if (id = "r2-thurs-slot5")
      //                 { await addDoc(collection(db, "room2/thursday/slot5"), {
      //                    course: values.course,
      //                    date: values.date,
      //                  }).then((res) => {
      //                        alert("Slot reserved successfully");       
      //                      var div = document.getElementById("r2-thurs-slot5");
      //                      var p = document.createElement("p");
      //                      p.textContent = values.course;
      //                      console.log(p);
      //                      div.appendChild(p);
      //                    })
      //                    .catch((err) => {
      //                      console.log(err);
      //                    });
      //                 }
      //                 if (id = "r2-fri-slot5")
      //                 { await addDoc(collection(db, "room2/friday/slot5"), {
      //                    course: values.course,
      //                    date: values.date,
      //                  }).then((res) => {
      //                        alert("Slot reserved successfully");       
      //                      var div = document.getElementById("r2-fri-slot5");
      //                      var p = document.createElement("p");
      //                      p.textContent = values.course;
      //                      console.log(p);
      //                      div.appendChild(p);
      //                    })
      //                    .catch((err) => {
      //                      console.log(err);
      //                    });
      //                 }
      //                 if (id = "r2-mon-slot6")
      //                 { await addDoc(collection(db, "room2/monday/slot6"), {
      //                    course: values.course,
      //                    date: values.date,
      //                  }).then((res) => {
      //                        alert("Slot reserved successfully");       
      //                      var div = document.getElementById("r2-mon-slot6");
      //                      var p = document.createElement("p");
      //                      p.textContent = values.course;
      //                      console.log(p);
      //                      div.appendChild(p);
      //                    })
      //                    .catch((err) => {
      //                      console.log(err);
      //                    });
               
      //                 }
      //                 if (id = "r2-tues-slot6")
      //                 { await addDoc(collection(db, "room2/tuesday/slot6"), {
      //                    course: values.course,
      //                    date: values.date,
      //                  }).then((res) => {
      //                        alert("Slot reserved successfully");       
      //                      var div = document.getElementById("r2-tues-slot6");
      //                      var p = document.createElement("p");
      //                      p.textContent = values.course;
      //                      console.log(p);
      //                      div.appendChild(p);
      //                    })
      //                    .catch((err) => {
      //                      console.log(err);
      //                    });
      //                  }
      //                    if (id = "r2-wed-slot6")
      //                    { await addDoc(collection(db, "room2/wednesday/slot6"), {
      //                       course: values.course,
      //                       date: values.date,
      //                     }).then((res) => {
      //                           alert("Slot reserved successfully");       
      //                         var div = document.getElementById("r2-wed-slot6");
      //                         var p = document.createElement("p");
      //                         p.textContent = values.course;
      //                         console.log(p);
      //                         div.appendChild(p);
      //                       })
      //                       .catch((err) => {
      //                         console.log(err);
      //                       });
      //                    }
      //                    if (id = "r2-thurs-slot6")
      //                    { await addDoc(collection(db, "room2/thursday/slot6"), {
      //                       course: values.course,
      //                       date: values.date,
      //                     }).then((res) => {
      //                           alert("Slot reserved successfully");       
      //                         var div = document.getElementById("r2-thurs-slot6");
      //                         var p = document.createElement("p");
      //                         p.textContent = values.course;
      //                         console.log(p);
      //                         div.appendChild(p);
      //                       })
      //                       .catch((err) => {
      //                         console.log(err);
      //                       });
      //                    }
      //                    if (id = "r2-fri-slot6")
      //                    { await addDoc(collection(db, "room2/friday/slot6"), {
      //                       course: values.course,
      //                       date: values.date,
      //                     }).then((res) => {
      //                           alert("Slot reserved successfully");       
      //                         var div = document.getElementById("r2-fri-slot6");
      //                         var p = document.createElement("p");
      //                         p.textContent = values.course;
      //                         console.log(p);
      //                         div.appendChild(p);
      //                       })
      //                       .catch((err) => {
      //                         console.log(err);
      //                       });
      //                    }
      //                    if (id = "r2-mon-slot6")
      //                    { await addDoc(collection(db, "room2/monday/slot6"), {
      //                       course: values.course,
      //                       date: values.date,
      //                     }).then((res) => {
      //                           alert("Slot reserved successfully");       
      //                         var div = document.getElementById("r2-mon-slot6");
      //                         var p = document.createElement("p");
      //                         p.textContent = values.course;
      //                         console.log(p);
      //                         div.appendChild(p);
      //                       })
      //                       .catch((err) => {
      //                         console.log(err);
      //                       });
                  
      //                    }
      //                    if (id = "r2-tues-slot6")
      //                    { await addDoc(collection(db, "room2/tuesday/slot6"), {
      //                       course: values.course,
      //                       date: values.date,
      //                     }).then((res) => {
      //                           alert("Slot reserved successfully");       
      //                         var div = document.getElementById("r2-tues-slot6");
      //                         var p = document.createElement("p");
      //                         p.textContent = values.course;
      //                         console.log(p);
      //                         div.appendChild(p);
      //                       })
      //                       .catch((err) => {
      //                         console.log(err);
      //                       });
      //                     }
      //                       if (id = "r2-wed-slot6")
      //                       { await addDoc(collection(db, "room2/wednesday/slot6"), {
      //                          course: values.course,
      //                          date: values.date,
      //                        }).then((res) => {
      //                              alert("Slot reserved successfully");       
      //                            var div = document.getElementById("r2-wed-slot6");
      //                            var p = document.createElement("p");
      //                            p.textContent = values.course;
      //                            console.log(p);
      //                            div.appendChild(p);
      //                          })
      //                          .catch((err) => {
      //                            console.log(err);
      //                          });
      //                       }
      //                       if (id = "r2-thurs-slot6")
      //                       { await addDoc(collection(db, "room2/thursday/slot6"), {
      //                          course: values.course,
      //                          date: values.date,
      //                        }).then((res) => {
      //                              alert("Slot reserved successfully");       
      //                            var div = document.getElementById("r2-thurs-slot6");
      //                            var p = document.createElement("p");
      //                            p.textContent = values.course;
      //                            console.log(p);
      //                            div.appendChild(p);
      //                          })
      //                          .catch((err) => {
      //                            console.log(err);
      //                          });
      //                       }
      //                       if (id = "r2-fri-slot6")
      //                       { await addDoc(collection(db, "room2/friday/slot6"), {
      //                          course: values.course,
      //                          date: values.date,
      //                        }).then((res) => {
      //                              alert("Slot reserved successfully");       
      //                            var div = document.getElementById("r2-fri-slot6");
      //                            var p = document.createElement("p");
      //                            p.textContent = values.course;
      //                            console.log(p);
      //                            div.appendChild(p);
      //                          })
      //                          .catch((err) => {
      //                            console.log(err);
      //                          });
      //                       }
      //                       if (id = "r2-mon-slot7")
      //                       { await addDoc(collection(db, "room2/monday/slot7"), {
      //                          course: values.course,
      //                          date: values.date,
      //                        }).then((res) => {
      //                              alert("Slot reserved successfully");       
      //                            var div = document.getElementById("r2-mon-slot7");
      //                            var p = document.createElement("p");
      //                            p.textContent = values.course;
      //                            console.log(p);
      //                            div.appendChild(p);
      //                          })
      //                          .catch((err) => {
      //                            console.log(err);
      //                          });
                     
      //                       }
      //                       if (id = "r2-tues-slot7")
      //                       { await addDoc(collection(db, "room2/tuesday/slot7"), {
      //                          course: values.course,
      //                          date: values.date,
      //                        }).then((res) => {
      //                              alert("Slot reserved successfully");       
      //                            var div = document.getElementById("r2-tues-slot7");
      //                            var p = document.createElement("p");
      //                            p.textContent = values.course;
      //                            console.log(p);
      //                            div.appendChild(p);
      //                          })
      //                          .catch((err) => {
      //                            console.log(err);
      //                          });
      //                        }
      //                          if (id = "r2-wed-slot7")
      //                          { await addDoc(collection(db, "room2/wednesday/slot7"), {
      //                             course: values.course,
      //                             date: values.date,
      //                           }).then((res) => {
      //                                 alert("Slot reserved successfully");       
      //                               var div = document.getElementById("r2-wed-slot7");
      //                               var p = document.createElement("p");
      //                               p.textContent = values.course;
      //                               console.log(p);
      //                               div.appendChild(p);
      //                             })
      //                             .catch((err) => {
      //                               console.log(err);
      //                             });
      //                          }
      //                          if (id = "r2-thurs-slot7")
      //                          { await addDoc(collection(db, "room2/thursday/slot7"), {
      //                             course: values.course,
      //                             date: values.date,
      //                           }).then((res) => {
      //                                 alert("Slot reserved successfully");       
      //                               var div = document.getElementById("r2-thurs-slot7");
      //                               var p = document.createElement("p");
      //                               p.textContent = values.course;
      //                               console.log(p);
      //                               div.appendChild(p);
      //                             })
      //                             .catch((err) => {
      //                               console.log(err);
      //                             });
      //                          }
      //                          if (id = "r2-fri-slot7")
      //                          { await addDoc(collection(db, "room2/friday/slot7"), {
      //                             course: values.course,
      //                             date: values.date,
      //                           }).then((res) => {
      //                                 alert("Slot reserved successfully");       
      //                               var div = document.getElementById("r2-fri-slot7");
      //                               var p = document.createElement("p");
      //                               p.textContent = values.course;
      //                               console.log(p);
      //                               div.appendChild(p);
      //                             })
      //                             .catch((err) => {
      //                               console.log(err);
      //                             });
      //                          }
      //                          if (id = "r2-mon-slot8")
      //                          { await addDoc(collection(db, "room2/monday/slot8"), {
      //                             course: values.course,
      //                             date: values.date,
      //                           }).then((res) => {
      //                                 alert("Slot reserved successfully");       
      //                               var div = document.getElementById("r2-mon-slot8");
      //                               var p = document.createElement("p");
      //                               p.textContent = values.course;
      //                               console.log(p);
      //                               div.appendChild(p);
      //                             })
      //                             .catch((err) => {
      //                               console.log(err);
      //                             });
                        
      //                          }
      //                          if (id = "r2-tues-slot8")
      //                          { await addDoc(collection(db, "room2/tuesday/slot8"), {
      //                             course: values.course,
      //                             date: values.date,
      //                           }).then((res) => {
      //                                 alert("Slot reserved successfully");       
      //                               var div = document.getElementById("r2-tues-slot8");
      //                               var p = document.createElement("p");
      //                               p.textContent = values.course;
      //                               console.log(p);
      //                               div.appendChild(p);
      //                             })
      //                             .catch((err) => {
      //                               console.log(err);
      //                             });
      //                           }
      //                             if (id = "r2-wed-slot8")
      //                             { await addDoc(collection(db, "room2/wednesday/slot8"), {
      //                                course: values.course,
      //                                date: values.date,
      //                              }).then((res) => {
      //                                    alert("Slot reserved successfully");       
      //                                  var div = document.getElementById("r2-wed-slot8");
      //                                  var p = document.createElement("p");
      //                                  p.textContent = values.course;
      //                                  console.log(p);
      //                                  div.appendChild(p);
      //                                })
      //                                .catch((err) => {
      //                                  console.log(err);
      //                                });
      //                             }
      //                             if (id = "r2-thurs-slot8")
      //                             { await addDoc(collection(db, "room2/thursday/slot8"), {
      //                                course: values.course,
      //                                date: values.date,
      //                              }).then((res) => {
      //                                    alert("Slot reserved successfully");       
      //                                  var div = document.getElementById("r2-thurs-slot8");
      //                                  var p = document.createElement("p");
      //                                  p.textContent = values.course;
      //                                  console.log(p);
      //                                  div.appendChild(p);
      //                                })
      //                                .catch((err) => {
      //                                  console.log(err);
      //                                });
      //                             }
      //                             if (id = "r2-fri-slot8")
      //                             { await addDoc(collection(db, "room2/friday/slot8"), {
      //                                course: values.course,
      //                                date: values.date,
      //                              }).then((res) => {
      //                                    alert("Slot reserved successfully");       
      //                                  var div = document.getElementById("r2-fri-slot8");
      //                                  var p = document.createElement("p");
      //                                  p.textContent = values.course;
      //                                  console.log(p);
      //                                  div.appendChild(p);
      //                                })
      //                                .catch((err) => {
      //                                  console.log(err);
      //                                });
      //                             }                                                       
       
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
                <div className='row' id="r2-mon-slot1">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-thurs-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div> 
                </div>
                </td>
             <td>
                <div className='row' id="r2-tues-slot1">
                  
                <p>ISLM</p>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot1">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true); setId("r1-thurs-slot1")}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot1">
                <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot1">
                
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td> 
          </tr>
           <tr>
                <td id="slot2">9:20-10:10</td>
                <td>
                  <div className='row' id="r2-mon-slot2">
                  <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                 
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot2">
               
                <p>ISLM(S1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot2">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
              
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot2">
                <p>DIC(S1)</p>
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot2">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot3">10:10-11:00</td>
                <td>
                <div className='row' id="r2-mon-slot3">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
              
                </div>
                </td>
                <td>
                <div className='row' id="r2-tues-slot3">
               <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot3">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
             
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot3">
                <p>DIC(S1)</p>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot3">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot4">11:30-12:20</td>
                <td>
                  <div className='row' id="r2-mon-slot4">
                  <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot4">
                <p>AP(S1)</p>
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot4">
               
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot4">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot4">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot5">12:20-1:00</td>
                <td>
                  <div className='row' id="r2-mon-slot5">
                  <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
              
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot5">
               <p>DIC(S1)</p>    
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot5">
               
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot5">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>  
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot5">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
         
                  
                </div>
                </td>
             </tr>
             <tr>
                <td id="slot6">2:00-2:50</td>
                <td>
                  <div className='row' id="r2-mon-slot6">
                  <p>PF(S1)</p>
              
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot6">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
         
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot6">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot6">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot6">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
             <tr>
                <td id="slot6">2:50-3:40</td>
                <td>
                  <div className='row' id="r2-mon-slot7">
                    
                        <p> PF(S1)</p>
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot7">
                <p> FIT(S1)</p>
                  
         
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot7">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
               
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot7">
               
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
      
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot7">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                </div>
                </td>
             </tr> 
             <tr>
                <td id="slot6">3:40-4:30</td>
                <td>
                  <div className='row' id="r2-mon-slot8">
    <p>PF(S1)</p>
                  
                </div>
                        </td>
                <td>
                <div className='row' id="r2-tues-slot8">
                <p>FIT(S1)</p>
         
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-wed-slot8">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'><FaTrash /></Button></div>
                  
                </div>
                </td>
                <td>
                <div className='row' id="r2-thurs-slot8">
                <div className='col-md-4'><Button className='btns' onClick={() => {setShowForm(true)}}><FaPencilAlt/></Button></div>
                  <div className='col-md-4'><Button className='btns'> <FaTrash /></Button></div>
                </div>
                </td>
                <td>
                <div className='row' id="r2-fri-slot8">
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

export default Room2;