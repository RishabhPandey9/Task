import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import EnterOtp from "./Components/ForgotPass/EnterOtp";
import ChangePass from "./Components/ForgotPass/ChangePass";
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";

import CompanyEdit from "./Components/CompanyProfile/CompanyEdit";

import VerifyOtp from "./Components/SignUp/VerifyOtp";
import CreateCompanyProfile from "./Components/CompanyProfile/CreateCpmpanyProfile";

import Colleges from "./Components/Colleges/Colleges";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import CompanyDetails from "./Components/Colleges/CompanyDetails";


function App() {
  return (
    <Router>
    <Routes>
    <Route path='*' exact element={<PageNotFound/>} />
      
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<Signup/>} />
      <Route exact path="/ForgotPass" element={<ForgotPass/>} />
      <Route exact path="/EnterOtp" element={<EnterOtp/>} />
      <Route exact path="/ChangePass" element={<ChangePass/>} />
      <Route exact path="/CompanyProfile" element={<CompanyProfile/>} />
      <Route exact path="/CompanyEdit" element={<CompanyEdit/>} />
      <Route exact path="/VerifySignup" element={<VerifyOtp/>} />
      <Route exact path="/CreateCompanyProfile" element={<CreateCompanyProfile/>} />
      <Route exact path="/Colleges" element={<Colleges/>} />
      <Route exact path="/CompanyDetails" element={<CompanyDetails/>} />

    </Routes>
    </Router>
  );
}

export default App;
