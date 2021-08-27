import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title}){
    return(
        <div>
        <Card className="my-1 bg-success"> 
            <CardBody>
            <h1 className="text-center my-2">Welcome to MCA NIT JSR</h1>
            </CardBody>
        </Card>
            
            {/* {my: margin} */}
        </div>

    );
}
export default Header; 