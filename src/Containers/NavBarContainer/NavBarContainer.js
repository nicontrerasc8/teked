import {useEffect, useState} from 'react'
import "./nav.css"
import {Link} from "react-router-dom"
import { MathLinks, ScienceLinks } from './Data/Data'
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { rgbToHex } from '@material-ui/core';

// Styled component named StyledButton
const Nav = styled.nav`
background-color: ${props => props.solid ? "rgb(36,36,36)" : "rgba(36, 36, 36, 0.5)"};
`
const MathLi = styled.li `
color: ${props => props.color ? props.color : "rgb(11,125,179)"};
border: 2px solid ${props => props.color ? props.color : "rgb(11,125,179)"};
transition: 1s;
box-shadow: inset 0 0 0 0 ${props => props.color ? props.color : "rgb(11,125,179)"};
background-color:rgba(250,250,250, .05);
&:hover{
   box-shadow: inset 0 0 5px 10px ${props => props.color ? props.color : "rgb(11,125,179)"}
}
`
const ScienceLink = styled(Link) `
display:flex;
flex-direction:column;
border:2px solid rgb(11,125,179);
border-radius:5px;
&:hover{
   box-shadow: inset 0 0 5px 10px ${props => props.color ? props.color : "rgb(11,125,179)"}
}
`
const ToggleLink = styled(Link) `
display:flex;
flex-direction:column;
border:2px solid ${props => props.color ? props.color : "rgb(11,125,179)"};
border-radius:5px;
`


const InitNavBar = () => {
   const matches = useMediaQuery('(max-width:950px)');
   const [navStatus, setNavStatus] = useState(false)
   const [navSolidColor, setNavSolidColor] = useState(false)

   const ChangeNavUseState = () => {
      setNavStatus(!navStatus)
      console.log(navStatus)
   }
   const [mathLinkData, setmathLinkData] = useState(MathLinks)
   const [scienceLinkData, setScienceLinkData] = useState(ScienceLinks)
   useEffect(()=>{
      const HandleScroll = () => {
          setNavSolidColor(window.scrollY > 10)
      }
      window.addEventListener("scroll", HandleScroll)

      return () => {
          window.removeEventListener("scroll", HandleScroll)
      }


  }, [])

   return ( <>
      <Nav solid={navSolidColor}>
         <Link to="/">
         <h1 className="logo">Tek<span>Ed</span></h1>
         </Link>
         <button onClick={ChangeNavUseState} className="nav-btn">
            Elige un tema
         </button>
      </Nav>
      <aside className={navStatus && "active"}>
      <nav>
         <Link to="/" className="toggle-logo">
         <h1 className="logo">Tek<span>Ed</span></h1>
         </Link>
         <button onClick={ChangeNavUseState} className="nav-btn">
            Volver <i className="fas fa-arrow-right"></i>
         </button>
      </nav>
      <div className="link-section">
         <article>
            <li>
               <h6>Matemática</h6>
            </li>
          {
             matches ?    <main>
             {
                 mathLinkData.map((data, idx) => {
                    return(
                     <span key={idx}>
                        <ToggleLink to={`/categoria/` + data.category + data.link} color={data.color}>
                     {data.text}
                     </ToggleLink>
                     </span>
                    )
                  })
             }
          </main>: <ul>
                {mathLinkData.map((data, idx) => {
               return(
                  <MathLi key={idx} className="no-image-link" color={data.color}>
                     <Link to={`/categoria/` + data.category + data.link}>
                       {data.text}
                     </Link>
                  </MathLi>
               )
            }) }
             </ul>
          }
         </article>
         <article>
            <li>
               <h6>Ciencias</h6>
            </li>
{
   matches ? 
  <main>
     {
         scienceLinkData.map((data, idx) => {
            return(
             <span key={idx}>
                <ToggleLink to={`/categoria/` + data.category + data.link} color={data.color}>
             {data.text}
             </ToggleLink>
             </span>
            )
          })
     }
  </main>
   : <ul>
   {scienceLinkData.map((data, idx) => {
       return(
          <li key={idx}>
             <ScienceLink to={`/categoria/` + data.category + data.link}>
                <img src={data.image}/>
               <p>{data.text}</p>
             </ScienceLink>
          </li>
       )
    })}
   </ul>
}
         </article>
      </div>
      </aside>
      </>
   )
}

export default InitNavBar
