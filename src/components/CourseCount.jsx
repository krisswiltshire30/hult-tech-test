import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CourseCountWrapper = styled.div`
    ${(props) => props.theme.query.lg} {
        padding-left: 20px;
      }
`

const CourseCount = (props) => {
    const { courses } = props
    return (
        <CourseCountWrapper>
            <p>Showing <strong>{courses.length}</strong> results</p>
        </CourseCountWrapper>
    )
}

CourseCount.propTypes = {
    courses: PropTypes.array,
}

export default CourseCount

