import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useUID } from "react-uid";

const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white[0]};
  border-left: solid 2px ${(props) => props.theme.colors.orange[0]};
  margin-top: 20px;
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  ${(props) => props.theme.query.lg} {
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  ${(props) => props.theme.query.md} {
    border-left: none;
    border-top: solid 2px ${(props) => props.theme.colors.orange[0]};
    grid-template-rows: 1fr 1fr; 
  }
`
const CardContent = styled.div`
  width: 100%;
  ${(props) => props.theme.query.md} {
    grid-column: 1 /  span 2;
  }
`
const CardContentWrapper = styled.div`
  padding: 30px 20px;
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
  ${(props) => props.theme.query.md} {
    grid-column: 1 /  span 2;
  }
`

const CoursetopicsWrapper = styled.div`
  border-top: solid ${(props) => props.theme.colors.black[0]};
  margin: 30px;
`
const Topic = styled.p`
  border-top: solid 1px ${(props) => props.theme.colors.grey[4]};
  padding-top: 10px;
  width: 100%;
`

const CourseCard = (props) => {
  const uid = useUID();
  const { title, courseType, description, topicsArr } = props
  const TopicsHandler = (topics) => {
    let courseTopics = []
    for (let i = 0; i < topics.length; i++) {
      courseTopics.push(<Topic key={i}>{topics[i]}</Topic>)
    }
    return courseTopics
  }

  const Capitalize = (str) => {
    let Capitalize = str.replace(/(^|[\s-])\S/g, (match) => {
      return match.toUpperCase();
    });
    return Capitalize.replace("-", " ");
  }

  return (
    <CardContainer key={uid}>
      <CardContent>
        <CardContentWrapper>
          <span>{Capitalize(courseType)}</span>
          <Coursetitle>{title}</Coursetitle>
          <p>{description}</p>
        </CardContentWrapper>
      </CardContent>
      <Coursetopics>
        <CoursetopicsWrapper>
          <TopicsTitle>Key Topics & Skills</TopicsTitle>
          {TopicsHandler(topicsArr)}
        </CoursetopicsWrapper>
      </Coursetopics>
    </CardContainer>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string,
  courseType: PropTypes.string,
  description: PropTypes.string,
  topics: PropTypes.array,
}


export default CourseCard
