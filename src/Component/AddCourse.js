//import { Button } from 'bootstrap';
import React, { Fragment } from 'react';
import {Button, Container, Form, FormGroup, Input} from "reactstrap";
const AddCourse=()=>{
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
            <FormGroup>
                <label for="userId  ">Course ID</label><br/>
                <Input type="text" 
                placeholder="Enter Here" 
                name="userid" 
                id="userId" 
                />
            </FormGroup>
            <FormGroup>
                <label for="title  ">Course title</label><br/>
                <Input type="text" 
                placeholder="Enter title Here"  
                id="title" 
                />
            </FormGroup>
            <FormGroup>
            <label for="textarea">description</label>
            <Input type="textarea" name="textarea" id="textarea" style={{height: 150}}/>
            </FormGroup>
            </Form>
            <Container className="text-center">
            <Button color="success" >AddCourse</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="warning " >Cancel</Button>
            </Container>

        </Fragment>
    );
};

export default AddCourse;