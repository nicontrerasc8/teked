import styled from "styled-components"
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css"
import InitNavBar from '../NavBarContainer/NavBarContainer';
import MathContainerData from "./MathData"
import {motion} from "framer-motion"
import LinkButton from "../../StyledComponents/Button/LinkButton"
import ScienceContainerData from "./ScienceData"
import LoadingContainer from "../../Components/LoadingContainer";
import { animationOne, animationTwo, animationThree, transitionOneSec, transitionTwoSecs } from "../../animations";
import SelectArea from "../HomeContainer/SelectArea/SelectArea";
import { StyledBackground } from "../../StyledComponents/StyledBackground";
 

const Title = styled.div`
margin-top:100px;
position: relative;
z-index: 2;
color:white;
text-align:center;
font-family: "Kufam", cursive;
font-size: 30px;
padding: 20px 10vw 0 10vw;
font-size: clamp(1.1rem, 2rem, 40px);
span{
    background-color: rgb(20,20,20);
    padding:5px;
}
`
const GridContainer = styled.div`
width: 90vw;
    margin-left: 5vw;
    margin-top: 15px;
    position: relative;
    z-index: 2;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`
const AreaArticle = styled.article`
margin: 20px 1%;
border-radius: 5px;
cursor: pointer;
    padding: 10px 5%;
    text-align: center;
    background-color: rgb(40,40,40);
    width: clamp(300px, 31%, 31%);
    color: white;
    box-shadow: 0 0 4px 0 rgba(255,255,255,.5);
    h2{
        text-align:center;
        padding: 10px 0;
        font-size: clamp(1rem, 1.5rem, 40px);
    }
    button{

    }
`
const ArticleTitle = styled.div`
text-align:center;
        padding: 10px 0;
        font-size: clamp(1rem, 1.5rem, 40px);
`
const ArticleDescription = styled.p`
font-size:15px;
opacity: .8;
margin-bottom: 10px;
`
const UnexistentDiv = styled.div`
width:100vw;
height:100vh;
position: relative;
z-index:2;
display:flex;
align-items:center;
justify-content:center;
`
const UnexistentP = styled.p`
font-size:18px;
padding: 20px 0;

`

const UnexistentContainer = () => {
    const [ChooseArea, setChooseArea] = useState(false)
   
   const showChooseArea = () => {
      setChooseArea(!ChooseArea)
   }
    return <UnexistentDiv>
               <SelectArea setAvailable={ChooseArea} change={showChooseArea}/>
    <AreaArticle>
    <UnexistentP>
        La categoria que seleccionaste no existe
    </UnexistentP>
    <LinkButton callback={showChooseArea} text="Elige una categoria" width="200px" className="non-transparent-button"/>
    </AreaArticle>
    </UnexistentDiv>
}


export const CategoryContainer = () => {
    const [data, setData] = useState([]);
    const [math, setMath] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [science, setScience] = useState(false)
    const [Unexistent, setUnexistent] = useState(false)
    const {cat} = useParams()
    useEffect(async () => {
        const MathData = await MathContainerData()
        const DataMath = JSON.parse(JSON.stringify(MathData))
        const ScienceData = await ScienceContainerData()
        const DataScience = JSON.parse(JSON.stringify(ScienceData))
        if (cat === "matematica"){
            setData(DataMath)
            setMath(true)
            setLoaded(true)
        }
        else if (cat === "ciencias"){
            setData(DataScience)
            setScience(true)
            setLoaded(true)
        }
        else{
            setData()
            setUnexistent(true)
            setLoaded(true)
        }

    }, [cat])
    
    return (
        <>
           {
              Loaded ?  
              <><StyledBackground/>
              <InitNavBar/>
              
{
    data ?
   <>
    <Title>
                  <span>
                  Categoria: {
                    math && "Matemática"
                  }{
                      science && "Ciencias"
                  }
                  </span>
              </Title>
              <motion.div transition={transitionTwoSecs} variants={animationOne} animate="in" exit="out" initial="out">
               <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transitionOneSec}>
               <GridContainer>
    {
        data.map(Data => {
            return <AreaArticle>
              <ArticleTitle>
                  {Data.title}
              </ArticleTitle>
              <ArticleDescription>
                  {Data.description}
              </ArticleDescription>
              <LinkButton path={`/categoria/` + cat + Data.link} width="140px" text="Elegir" ButtonColor={Data.color}/>
            </AreaArticle>  })
    }
</GridContainer>
               </motion.div>
            </motion.div>
            
   </>
  : 
  <UnexistentContainer/>
}
              </>
              : <LoadingContainer/> 
           }
        </>
    )
}
