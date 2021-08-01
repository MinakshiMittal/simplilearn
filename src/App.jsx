import { Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  RouteNotFound,
  CoursesListingPage,
  BuyCourse,
  OTPInput,
  CourseDetailsPage,
  Home,
} from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesListingPage />} />
        <Route path="/course/:courseId/buy-course" element={<BuyCourse />} />
        <Route path="/course/:courseId/payment/otp" element={<OTPInput />} />
        <Route
          path="/course-details/:courseId"
          element={<CourseDetailsPage />}
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
