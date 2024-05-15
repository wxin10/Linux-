import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/login" component={Login} />{" "}
          <Route path="/register" component={Register} />{" "}
          <PrivateRoute
            path="/dashboard/student"
            component={StudentDashboard}
          />{" "}
          <PrivateRoute
            path="/dashboard/teacher"
            component={TeacherDashboard}
          />{" "}
          <PrivateRoute path="/courses" component={CourseList} />{" "}
          <PrivateRoute path="/course/:id" component={CourseDetail} />{" "}
          <PrivateRoute path="/add-course" component={AddCourse} />{" "}
          <Route path="/" exact component={CourseList} />{" "}
        </Switch>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
