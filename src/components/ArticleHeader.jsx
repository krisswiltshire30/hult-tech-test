import React from "react"
import styled from "styled-components"


const Container = styled.div`
  width: auto;

  ${(props) => props.theme.query.lg} {
    padding-left: 20px;
    padding-right: 20px
  }
`

const Description = styled.p`
    width: 50%;
    ${(props) => props.theme.query.md} {
        width: 100%
  }
`

const ArticleHeader = () => {
    return (
        <Container >
            <span>Hult / Courses</span>
            <h1>Courses</h1>
            <Description>Nisl litora anim sapiente ullam do? Ipsum rutrum dictumst aliquid dolores hendrerit, necessitatibus nisi. Nisi augue, cumque atque! Do, cupidatat.</Description>
        </Container>
    )
}

export default ArticleHeader
