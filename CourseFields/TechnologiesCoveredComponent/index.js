import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Text } from "@chakra-ui/react"
import './TechnologiesCoveredComponent.css'

const TechnologiesCovered=(props)=>{
    const techcoveredname=props.techcoveredname||"Technology";
    return(
        <>
        <div className="techcovereditem">
            {techcoveredname} <AiOutlineClose/>
        </div>
        </>
    )
}
export default TechnologiesCovered;