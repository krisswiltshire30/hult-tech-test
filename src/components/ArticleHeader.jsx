import React from "react"
import styled from "styled-components"



const Container = styled.header`
  width: 100%;
`

const ArticleHeader = () => {
    return (
        <Container >
            <span>Hult/Courses</span>
            <h1>Courses</h1>
            <p>Nisl litora anim sapiente ullam do? Ipsum rutrum dictumst aliquid dolores hendrerit, necessitatibus nisi. Nisi augue, cumque atque! Do, cupidatat.</p>
        </Container>
    )
}

export default ArticleHeader
