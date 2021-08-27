import React from "react";
import { Jumbotron,Container,Button } from "reactstrap";
const Home = () =>{
    return(
            <div>
            <Jumbotron className="text-center bg-secondary">
                <h1 className="display">
                    MCA NITJSR
                </h1>
                <p>
                The Department of Computer Applications at the National Institute of Technology Jamshedpur, was formed in 1987. 
                Since its inception, the department has always been recognized all over the country for its excellence. 
                The Department has consistently produced quality professionals in the field of Computer & Network and strived for excellence in research and development. 
                MIS of NIT Jamshedpur is managed by Department of Computer Applications.
                </p>
                <Container>
                    <Button color="primary" outline>
                        Know More 
                    </Button>
                </Container>
            </Jumbotron>
                 
            </div>
    );
}

export default Home;