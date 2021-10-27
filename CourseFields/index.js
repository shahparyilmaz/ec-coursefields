import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import './CourseFields.css'
import { Button, ButtonGroup, Stack, HStack, Flex, Text, Radio, RadioGroup } from "@chakra-ui/react"
import { FaWhatsapp, FaDiscord, FaTwitter } from 'react-icons/fa'
import { AiOutlineUpload,AiOutlineClose  } from 'react-icons/ai'

// import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react"
import CourseRequirement from './CourseRequirementsComponent/index'
import TechnologiesCovered from './TechnologiesCoveredComponent/index'

function CourseFields() {
    const handleSubmit=()=>{
        return
    }
    const uploadCourseImage=(e)=>{
        e.preventDefault()
    }
    const [domain,setDomain]=useState("0")
    const domainChange=(e)=>{
        e.preventDefault()
        setDomain(e.target.value)
    }
    
    const [allCourseRequirements,setAllCourseRequirements]=useState([])
    const [courseRequirement,setCourseRequirement]=useState('')
    const input = document.getElementById('courserequirementsinput')
    // input.addEventListener("", function(event){
    //     console.log(event.keycode)
    //     if(event.keycode=="13"){
    //         event.preventDefault();
    //         allCourseRequirements.push(courseRequirement)
    //         setCourseRequirement('')
    //     }
    // })
    const addCourseItem=(event)=>{
        // console.log(event.keyCode)
        if(event.keyCode===13){
            // console.log('enter key pressed')
            event.preventDefault();
            if(courseRequirement!=''){
                const coursereqlist = allCourseRequirements;
                const updatedlist=coursereqlist.push(courseRequirement)
                // setAllCourseRequirements(updatedlist);
                setCourseRequirement('')
                // console.log(allCourseRequirements)
            }
        }
    }
    const deleteCourseRequirement=(coursereqname)=>{
        // console.log('delete')
        const coursereqlist = allCourseRequirements;
        const updatedlist=coursereqlist.filter((course)=>course!==coursereqname)
        setAllCourseRequirements(updatedlist)
        // console.log(allCourseRequirements)
    }
    const [allTechCovered,setAllTechCovered]=useState([])
    const [techCovered,setTechCovered]=useState('')
    const addTechItem=(event)=>{
        if(event.keyCode===13){
            // console.log('enter key pressed')
            event.preventDefault();
            if(techCovered!=''){
                const techlist = allTechCovered;
                const updatedlist=techlist.push(techCovered)
                setTechCovered('')
            }
        }
    }
    const deleteTechCovered=(techcoveredname)=>{
        // console.log('delete')
        const techlist = allTechCovered;
        const updatedlist=techlist.filter((course)=>course!==techcoveredname)
        setAllTechCovered(updatedlist)
        // console.log(allCourseRequirements)
    }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <div className="coursefieldsform">
            <Stack spacing="3" width="100%">
                <Text fontSize="xl" fontWeight="700" marginTop="2">Course Fields</Text>
                <form action="" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                    <FormControl id="coursetitle" border="0px">
                        <FormLabel for="coursetitle" fontSize="70%">Course Title</FormLabel>
                        <Input for="coursetitle" name="coursetitle" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Name" fontSize="80%" />
                    </FormControl>
                    <FormControl id="coursedescription" border="0px">
                        <FormLabel for="coursedescription" fontSize="70%">Course Description</FormLabel>
                        <Textarea for="coursedescription" name="coursedescription" rows="5" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Course Description" fontSize="80%"></Textarea>
                        {/* <Input type="textField" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Course Description" fontSize="80%" /> */}
                    </FormControl>
                    <FormControl id="courseimage" border="0px">
                        <FormLabel for="courseimage" fontSize="70%">Course Image</FormLabel>
                        <HStack spacing="2">
                            <Input width="80%" for="courseimage" name="courseimage" type="" src="../images/parallax.png" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Course Image" fontSize="80%" />
                            <Button width="20%" backgroundColor="#d5e9ff" onClick={uploadCourseImage}><AiOutlineUpload size="80%"/></Button>
                        </HStack>
                    </FormControl>
                    <FormControl id="domain" border="0px">
                        <FormLabel for="domain" fontSize="70%">Domain</FormLabel>
                        <RadioGroup onChange={setDomain} value={domain}>
                        <HStack display="flex" justifyContent="space-evenly">
                            <Radio size="sm" _hover={{cursor:"pointer"}} value="1">Engineering</Radio>
                            <Radio size="sm" _hover={{cursor:"pointer"}} value="2">Non-Engineering</Radio>
                            <Radio size="sm" _hover={{cursor:"pointer"}} value="3">Both</Radio>
                        </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl id="industry" border="0px">
                        <FormLabel for="industry" fontSize="70%">Industry</FormLabel>
                        {/* <Input for="industry" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Name" fontSize="80%" /> */}
                        <Select placeholder="Choose Domain" color="rgb(151, 151, 151)" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" fontSize="80%">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl id="courselink" border="0px">
                        <FormLabel for="courselink" fontSize="70%">Course link (zoom link)</FormLabel>
                        <Input for="courselink" name="courselink" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter the title of the coure" fontSize="80%" />
                    </FormControl>
                    <FormControl id="courserequirements" border="0px">
                        <FormLabel for="courserequirements" fontSize="70%">Course Requirements</FormLabel>
                        <Input id="courserequirementsinput" onKeyDown={(event)=>addCourseItem(event)} for="courserequirements" name="courserequirements" 
                        value={courseRequirement} onChange={(e)=>setCourseRequirement(e.target.value)} on type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter your course requirements" fontSize="80%" />
                        <div class="courserequirements">
                            {allCourseRequirements.map((coursereqname)=>{
                                return (
                                    <div className="coursereqitem" onClick={()=>deleteCourseRequirement(coursereqname)}>
                                        {coursereqname} <AiOutlineClose/>
                                    </div>
                                )
                                // <CourseRequirement coursereqname={coursereqname} onClick={()=>deleteCourseRequirement(coursereqname)} />
                            })}
                        </div>
                    </FormControl>
                    <FormControl id="mentorname" border="0px">
                        <FormLabel for="mentorname" fontSize="70%">Mentor Name</FormLabel>
                        <Input for="mentorname" name="mentorname" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter the course mentor's name" fontSize="80%" />
                    </FormControl>
                    <FormControl id="mentorqualifications" border="0px">
                        <FormLabel for="mentorqualifications" fontSize="70%">Mentor Qualifications</FormLabel>
                        <Input for="mentorqualifications" name="mentorjobprofile" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter the course mentor's qualification" fontSize="80%" />
                    </FormControl>
                    <FormControl id="mentorjobprofile" border="0px">
                        <FormLabel for="mentorjobprofile" fontSize="70%">Mentor Job Profile</FormLabel>
                        <Input for="mentorjobprofile" name="mentorjobprofile" type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter the course mentor's job profile" fontSize="80%" />
                    </FormControl>
                    <FormControl id="mentordetails" border="0px">
                        <FormLabel for="mentordetails" fontSize="70%">Mentor Details</FormLabel>
                        <Textarea for="mentordetails" name="mentordetails" rows="5" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Write details on work history" fontSize="80%"></Textarea>
                    </FormControl>
                    <HStack spacing="3">
                        <FormControl id="difficulty" border="0px">
                            <FormLabel for="difficulty" fontSize="70%">Difficulty</FormLabel>
                            <Select placeholder="Difficulty" color="rgb(151, 151, 151)" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" fontSize="80%">
                            <option value="option1">Easy</option>
                            <option value="option2">Intermediate</option>
                            <option value="option3">Hard</option>
                            </Select>
                        </FormControl>
                        <FormControl id="assignments" border="0px">
                            <FormLabel for="assignments" fontSize="70%">Assignments</FormLabel>
                            <Input for="assignments" type="number" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="0" fontSize="80%" />
                        </FormControl>
                    </HStack>
                    <HStack spacing="3">
                        <FormControl id="coursefee" border="0px">
                            <FormLabel for="coursefee" fontSize="70%">Course Fee</FormLabel>
                            <Select placeholder="Course Fee" color="grey" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" fontSize="80%">
                            <option value="option1">structure 1</option>
                            <option value="option2">structure 2</option>
                            <option value="option3">structure 3</option>
                            </Select>
                        </FormControl>
                        <FormControl id="cosr" border="0px">
                            <FormLabel for="cost" fontSize="70%">Cost</FormLabel>
                            <Input for="cost" name="cost" type="number" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="0" fontSize="80%" />
                        </FormControl>
                    </HStack>
                    <FormControl id="technologiescovered" border="0px">
                        <FormLabel for="technologiescovered" fontSize="70%">Technologies Covered</FormLabel>
                        <Input id="technologiescoveredinput" onKeyDown={(event)=>addTechItem(event)} for="technologiescovered" name="technologiescovered" value={techCovered} 
                        onChange={(e)=>setTechCovered(e.target.value)} on type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Enter covered technologies" fontSize="80%" />
                        <div class="technologiescovered">
                            {allTechCovered.map((techcoveredname)=>{
                                return(
                                    <div className="techcovereditem" onClick={()=>deleteTechCovered(techcoveredname)}>
                                        {techcoveredname} <AiOutlineClose/>
                                    </div>
                                    // <TechnologiesCovered techcoveredname={tech} onClick={()=>console.log('delete')}/>
                                )
                            })}
                        </div>
                    </FormControl>

                    <Button borderRadius="0.6rem" colorScheme="blue" mr={3} onClick={handleSubmit}>
                        Upload
                    </Button>
                    </Stack>
                </form>

                {/* <Checkbox defaultIsChecked>Checkbox</Checkbox> */}
            
             {/* <Text marginTop="3" fontSize="md" fontWeight="700">Untill we prepare a platform to help you , you can join in our community and start learning!</Text> */}

            </Stack>
        </div>
    </>
  )
}

export default function CourseFieldsfunction(){
    return(
        <div className="coursefieldscontainer">
            {/* <div className="preregistertitle"><h2></h2></div> */}
            <CourseFields/>
        </div>
    )
}