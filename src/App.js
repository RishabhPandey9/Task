import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<Signup/>} />
      <Route exact path="/ForgotPass" element={<ForgotPass/>} />
    </Routes>
    </Router>
  );
}

export default App;
