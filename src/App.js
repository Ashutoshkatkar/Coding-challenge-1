import Step1 from "./Step1";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step2 from "./Step2";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Step1 />}></Route>
        <Route exact path="/step2" element={<Step2 />}></Route>
      </Routes>
    </Router>
  );
}
