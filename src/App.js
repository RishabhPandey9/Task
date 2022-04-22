import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Jobs from "./Components/Posted_Jobs/Jobs";
import EnterOtp from "./Components/ForgotPass/EnterOtp";
import ChangePass from "./Components/ForgotPass/ChangePass";
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import Message from "./Components/Message/Message";
import SendMessage from "./Components/Message/SendMessage";
import SendReply from "./Components/Message/SendReply";
import JobDetails from "./Components/Posted_Jobs/JobDetails";
import Profile from "./Components/Profile/Profile";
import Meeting from "./Components/Meeting/Meeting";
import Settings from "./Components/Settings/Settings";


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<Signup/>} />
      <Route exact path="/ForgotPass" element={<ForgotPass/>} />
      <Route exact path="/EnterOtp" element={<EnterOtp/>} />
      <Route exact path="/ChangePass" element={<ChangePass/>} />
      <Route exact path="/Jobs" element={<Jobs/>} />
      <Route exact path="/CompanyProfile" element={<CompanyProfile/>} />
      <Route exact path="/Message" element={<Message/>} />
      <Route exact path="/SendMessage" element={<SendMessage/>} />
      <Route exact path="/SendReply" element={<SendReply/>} />
      <Route exact path="/JobDetails" element={<JobDetails/>} />
      <Route exact path="/Profile" element={<Profile/>} />
      <Route exact path="/Meeting" element={<Meeting/>} />
      <Route exact path="/Settings" element={<Settings/>} />

    </Routes>
    </Router>
  );
}

export default App;
