import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LiveJobs from "./Components/Posted_Jobs/LiveJobs";
import EnterOtp from "./Components/ForgotPass/EnterOtp";
import ChangePass from "./Components/ForgotPass/ChangePass";
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<Signup/>} />
      <Route exact path="/ForgotPass" element={<ForgotPass/>} />
      <Route exact path="/EnterOtp" element={<EnterOtp/>} />
      <Route exact path="/ChangePass" element={<ChangePass/>} />
      <Route exact path="/LiveJobs" element={<LiveJobs/>} />
      <Route exact path="/CompanyProfile" element={<CompanyProfile/>} />

    </Routes>
    </Router>
  );
}

export default App;
