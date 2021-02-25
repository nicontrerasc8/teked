import React from 'react'
import styled from "styled-components"

const StyledArticle = styled.article`
background-color: rgb(30,30,30);
color: white;
text-align: center;
margin: 0 1%;
padding: 20px 3%;
border-radius: 5px;
box-shadow: 0 0 5px white;
width: clamp(300px, 31%, 31%);
`
const StyledList = styled.div`
width: 90vw;
position: relative;
display: flex;
flex-wrap:wrap;
z-index: 3;
margin-left: 5vw;
margin-top: 30px;
`

const Article = ({article}) => {
    return<StyledArticle> 
    <h2>
        {article.title}
    </h2>
    </StyledArticle>
}

export const ArticleList = ({articles}) => {
    return (
        <StyledList>
            {
                articles && 
                articles.map((data, idx) => {
                    return <Article article={data} key={idx}/>
                }) 
            }
        </StyledList>
    )
}
