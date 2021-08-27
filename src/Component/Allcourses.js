import React, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
    
    const [courses , setCourse] = useState([
        {title:"Java Course", description:"Object Oriented Programming"},
        {title:"C++ Course", description:"Object Oriented Programming"},
        {title:"Python Course", description:"Object Oriented Programming"},
        {title:"R Course", description:"Object Oriented Programming"},

        
    ])
    return(
        <div className="text-center">
            
            <h1>All Course</h1>
            <p>List of all Courses are as follows</p>
                
                {
                    courses.length>0? 
                    courses.map(
                            (item) =>
                            <Course course={item} />) : "No Courses"
                }
                
        </div>

    );

};

export default Allcourses;