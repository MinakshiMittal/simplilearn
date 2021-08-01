import { Routes, Route } from "react-router-dom";
import { Login, SignUp, RouteNotFound } from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
