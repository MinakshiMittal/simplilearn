import { Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  RouteNotFound,
  CoursesListingPage,
  BuyCourse,
} from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesListingPage />} />
        <Route path="/course/:courseId/buy-course" element={<BuyCourse />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
