import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import WidthCheckup from "./components/utils/WidthCheckup/WidthCheckup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={WidthCheckup(Home)} />
      </Routes>
    </Router>
  );
}

export default App;
