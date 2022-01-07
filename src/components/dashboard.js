import React from "react";
import { useUserContext } from "../context/userContext";
import {Link} from "react-router-dom";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      {/* <h2>Email : {user.email}</h2> */}
      <Link to="/classroom"> <button>Classrooms</button></Link>

      <Link to="/login"><button onClick={logoutUser}>Log out</button></Link>
    </div>
  );
};

export default Dashboard;
