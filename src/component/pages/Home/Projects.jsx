/* eslint-disable no-unused-vars */
import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [idCardProject, setIdCardProject] = useState(0)
    
    
   
    
    const projectCard = [
        {
          
            heading:"Keo Coffi",
            id:1,
            image:"https://raw.githubusercontent.com/mdazharul869/Keofi/main/readme-images/desktop.png"
        },
        {
          
            heading:" NFT Master-MarketPlace",
            id:2,
            image:"https://raw.githubusercontent.com/mdazharul869/naft-nift-marketplace-master/main/website-demo-image/desktop.png"
        },
        {
          
            heading:"DailyShop-Ecommarce",
            id:3,
            image:"https://raw.githubusercontent.com/mdazharul869/all-img/main/4e4dcf2f-d718-4ab3-b4f9-8b06c5d592a5.png"
        },
        {
          
            heading:"Organic-vagetable E-commarce",
            id:4,
            image:"https://raw.githubusercontent.com/mdazharul869/organic-vegetables/main/readme-images/desktop.png"
        },
        {
          
            heading:"Doctor -Ofiicial",
            id:5,
            image:"https://raw.githubusercontent.com/mdazharul869/doctor-master/main/readme-images/desktop.png"
        },
        {
          
            heading:"Coffi",
            id:6,
            image:"https://raw.githubusercontent.com/mdazharul869/Keofi/main/readme-images/desktop.png"
        }
    ]
  return (
    <div>
           <section className="projects section" id="projects">
            <h3 className="section__subtitle">
                My <span>Jobs</span>
            </h3>

            <h2 className="section__title">
              
                Recent Projects
            </h2>
            <div className="projects__conatiner container grid">

                {
                    projectCard && projectCard.map((el, index)=>{
                        return(
                            <article key={index} className="projects__card">
                            <img className="projects__img" src={el.image} alt="project-img" />
                            <div className="projects__model">
                                <span className="projects__subtitle">Web</span>

                           
        
                                <h2 className="projects__title">{el.heading}</h2>
                                <div onClick={ ()=> setIdCardProject(el.image)}>
                                <Box onClick={onOpen}  cursor={"pointer"} href="#" className="projects__button">
                                    View demo <i className="ri-external-link-line"></i>
                                </Box>
                                </div> 
                            </div>
                        </article>
                        )
                    })
                }


            </div>
         
         </section>

         <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size={{base:"xl", md:"4xl"}}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody  w={"90%"} h={"98%"}>
             
             <Image src={idCardProject} w={"full"} h={"full"} alt={"name"} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onClose} variant='ghost'><Link to={"/"}>Vew Demo Project</Link></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Projects
