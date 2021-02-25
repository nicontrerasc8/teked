import styled from "styled-components"
import {useState, useEffect} from 'react'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import { ArticleList } from "./ArticleList"
import { useParams } from "react-router-dom"
import {motion} from "framer-motion"
import { EcologiaData, ZoologiaData } from "./Data"
import { animationOne, animationThree, transitionOneSec, transitionTwoSecs } from "../../animations"

const Head = styled.h2`
margin-top: 100px;
position:relative;
padding: 20px 10vw 0 10vw;
z-index:1;
text-align: center;
color: white;
font-size: 30px;
font-family: "Kufam", cursive;
span{
    background-color: rgb(20,20,20);
    padding:5px;
}
`

export default function ScienceAreaContainer() {
    const [data, setData] = useState([])
    const {area} = useParams()
    const [zoo, setZoo] = useState(ZoologiaData)
    const [eco, setEco] = useState(EcologiaData)
    const [zooText, setZooText] = useState(false)
/*     const [zooText, setZooText] = useState(false)
    const [zooText, setZooText] = useState(false)
    const [zooText, setZooText] = useState(false)
    const [zooText, setZooText] = useState(false) */
    useEffect(async () => {
        if (area === "zoologia"){
            setData(zoo)
            setZooText(true)
        }
        else if (area === "ecologia"){
            setData(eco)
        }
        else{
            setData()
        }

    }, [area])
    
    return (
        <>
        <StyledBackground/>
         <InitNavBar/> 
         <Head>
                <span>
                    { zooText && "Zoología" }
                </span>
            </Head>
            <motion.div transition={transitionTwoSecs} variants={animationOne} animate="in" exit="out" initial="out">
               <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transitionOneSec}>
                  <ArticleList articles={data}/>
               </motion.div>
            </motion.div>
        </>
    )
}
