import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ToolBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey[0]};
  height: 100px;
  margin-top: 60px;

  ${(props) => props.theme.query.lg} {
    width: auto;
    margin-right: 20px;
    margin-left: 20px;
  }
`

const ToolWrapper = styled.div`
  padding: 20px;
`

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.white[0]};
`
const Select = styled.select`
    display: block;
    width: 200px;
    height: 40px;
    padding: 10px 10px 10px 20px;
    border-radius: 3px;
`

const ToolBar = (props) => {
  const { setCourses, setLoadCount, data } = props

  const getCourses = (type) => {
    let courses = []
    if (type === "all") {
      setCourses(data)
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['course-type'] === type) {
          courses.push(data[i])
        }
      }
      setCourses(courses)
    }
  }

  return (
    <ToolBarContainer>
      <ToolWrapper>
        <Label>Course Type</Label>
        <Select defaultValue={'DEFAULT'} onClick={()=> setLoadCount(2)} onChange={(e) => getCourses(e.target.value)} >
          <option value="DEFAULT" disabled>Please select</option>
          <option value="all">All Course Types</option>
          <option value="core">Core</option>
          <option value="business-challenge">Business Challenge</option>
          <option value="capstone">Capstone</option>
          <option value="elective">Elective</option>
        </Select>
      </ToolWrapper>
    </ToolBarContainer>
  )
}

ToolBar.propTypes = {
  setCourses: PropTypes.func,
  setLoadCount: PropTypes.func,
  data: PropTypes.array,
  loadCount: PropTypes.number,
  courses: PropTypes.array,
}

export default ToolBar
