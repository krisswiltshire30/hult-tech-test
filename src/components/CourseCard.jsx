import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white[0]};
  border-left: solid 2px ${(props) => props.theme.colors.orange[0]};
  margin-top: 60px;
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
`
const CardContent = styled.div`
  width: 100%;
`
const CardContentWrapper = styled.div`
  padding: 20px;
`

const Coursetitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 25px;
`

const TopicsTitle = styled.h5`
  margin-top: 5px;
`

const Coursetopics = styled.div`
  background-color: ${(props) => props.theme.colors.grey[4]};
  width: 100%;
`

const CoursetopicsWrapper = styled.div`
  border-top: solid ${(props) => props.theme.colors.black[0]};
  margin: 20px;
`

const CourseCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardContentWrapper>
          <span>Core</span>
          <Coursetitle>Marketing Course</Coursetitle>
          <p>Nisl litora anim sapiente ullam do? Ipsum rutrum dictumst aliquid dolores hendrerit, necessitatibus nisi. Nisi augue, cumque atque! Do, cupidatat.</p>
        </CardContentWrapper>
      </CardContent>
      <Coursetopics>
        <CoursetopicsWrapper>
          <TopicsTitle>Key Topics & Skills</TopicsTitle>
            
        </CoursetopicsWrapper>
      </Coursetopics>
    </CardContainer>
  )
}

export default CourseCard
