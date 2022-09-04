
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Page/About/About";
import Head from "./Page/Head/Head";
import Home from "./Page/Home/Home";



import PageNotFound from "./Page/PageNotFound/PageNotFound";


function App() {
  return (
    <>
  
    <Router>
    <Routes>
    <Route path='*' exact element={<PageNotFound/>} />
      
    <Route path='/' exact element={<Home/>} />
    <Route path='/about' exact element={<About/>} />
    <Route path='/head' exact element={<Head/>} />


    
    

    </Routes>
    </Router>
    </>
   
  );
}

export default App;
