import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Text } from "@chakra-ui/react"
import './CourseRequirementsComponent.css'

const CourseRequirement=(props)=>{
    const coursereqname=props.coursereqname||'course';
    return(
        <>
        <div className="coursereqitem">
            {coursereqname} <AiOutlineClose/>
        </div>
        </>
    )
}
export default CourseRequirement;