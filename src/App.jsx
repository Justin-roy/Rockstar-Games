import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header  from "./components/Header";
import "./styles/App.scss";
import "./styles/Home.scss";
import Home from "./components/Home";
import "./styles/mediaquery.scss";

function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element = {<Home/>}/>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
