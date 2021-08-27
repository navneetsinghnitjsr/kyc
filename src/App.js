import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home';
import Course from './Component/Course';
import Allcourse from './Component/Allcourses';
import AddCourse from './Component/AddCourse';
import Header from './Component/Header';
import Menus from './Component/Menus';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Allcourses from './Component/Allcourses';

//01:07 min
function App() { 
  const btnHandle = () => {
     toast.success("Success",{position:"bottom-center"});
  };
  return (
    <div>
        
        <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
          {/*  md= medium screen */}
          <Menus />
          {/* {----------------} */}
          </Col>
          <Col md={8}>
          {/*  md= medium screen */}
          <Route path="/" component={Home} exact />
          <Route path="/add_courses" component={AddCourse} exact />
          <Route path="/view_course" component={Allcourses} exact />

          </Col>
        </Row>
      </Container>
      </Router>
    </div>

  );
}
export default App;
