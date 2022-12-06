import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>home</h1>;
};
export default App;
