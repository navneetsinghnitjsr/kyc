import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course = ({course}) =>{
    return( 
        <card className="text-center">
            <CardBody > 
            
                <CardSubtitle ><b>{course.title}</b></CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center" >
                        <Button color="warning" outline>Update</Button> &nbsp;&nbsp;
                        <Button color="danger ml-3" outline>Delete</Button>
                    </Container>
                    <hr />    
            </CardBody>
        </card>
    );
}
export default Course;