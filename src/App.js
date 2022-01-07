import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Classroom from "./components/classroom";
import { useUserContext } from "./context/userContext";
import {BrowserRouter,Routes,Route} from "react-router-dom";
 import "./App.css";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">

    
      <BrowserRouter>
    <Routes>
    <Route exact path="/classroom" element={<Classroom/>}>
        </Route>
         <Route exact path="/" element={<Auth/>}>
        </Route>
        <Route exact path="/login" element={<Auth/>}>
        </Route>
        <Route exact path="/Dashboard" element={<Dashboard/>}>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
