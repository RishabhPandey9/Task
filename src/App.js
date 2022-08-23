
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";


import PageNotFound from "./Components/PageNotFound/PageNotFound";


function App() {
  return (
    <Router>
    <Routes>
    <Route path='*' exact element={<PageNotFound/>} />
      
    <Route path='/' exact element={<Login/>} />
    <Route path='/home' exact element={<Home/>} />

    
    

    </Routes>
    </Router>
  );
}

export default App;
