import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CourseList from "./components/course/CourseList";
import CourseDetail from "./components/course/CourseDetail";
import AddCourse from "./components/course/AddCourse";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import TeacherDashboard from "./components/dashboard/TeacherDashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CourseList />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/student" element={<PrivateRoute><StudentDashboard /></PrivateRoute>} />
          <Route path="/dashboard/teacher" element={<PrivateRoute><TeacherDashboard /></PrivateRoute>} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/add-course" element={<PrivateRoute><AddCourse /></PrivateRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
