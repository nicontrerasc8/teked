import React,{useEffect, useState} from 'react'
import "./Home.css"
import styled from "styled-components";
import img from "./LandingBackground.png"
import {motion} from "framer-motion"
import SelectArea from "./SelectArea/SelectArea"
import { animationOne, animationThree, animationTwo, transitionTwoSecs, transitionOneSec } from '../../animations';
import LinkButton from '../../StyledComponents/Button/LinkButton';
import InitNavBar from '../NavBarContainer/NavBarContainer';
import LoadingContainer from '../../Components/LoadingContainer';

const Landing = styled.div `
height: 100vh;
background-image: url(${img});
`
const Container = styled.div `display: flex;
justify-content: center;
align-items: center;
padding: 20px 7vw;
color: white;
grid-gap: 10px;
height: 100%;
font-family: "Kufam", cursive;
`
const HomeContainer = () => {

   const [ChooseArea, setChooseArea] = useState(false)
   const [Loading, setLoading] = useState(true)
   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000);
   }, [])
   const showChooseArea = () => {
      setChooseArea(!ChooseArea)
   }

   return (
            Loading ? <LoadingContainer/> :  <div>
            <InitNavBar/>
            <Landing>
            {/* <SelectArea setAvailable={ChooseArea} change={showChooseArea}/> */}
               <Container>
                  <motion.div initial="out" transition={transitionTwoSecs} animate="in" exit="out" variants={animationOne} className="message">
                     <h3>Aprende matemáticas <br/> a tu propio ritmo.</h3>
                     <p style={{marginBottom:"20px"}}>TekEd es una plataforma online donde estudiantes pueden reforzar sus conocimientos y aprender algo nuevo en matemáticas.</p>
                     <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transitionOneSec}>
                     <LinkButton path="/matematica" fontSize="calc(10px + 1vh)" width="clamp(220px, 30%, 30%)" text="Empieza dando click aquí"/>
                     </motion.div>
                  </motion.div>
               </Container>
            </Landing>
            </div>
   )
}

export default HomeContainer