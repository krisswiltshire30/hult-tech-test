import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonWrapper = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Button = styled.button`
    padding: 10px 20px 10px 20px;
    border: solid 1px ${(props) => props.theme.colors.grey[2]};
    background-color: ${(props) => props.theme.colors.beige[0]};
    color: ${(props) => props.theme.colors.grey[2]};
    border-radius: 30px;
    font-weight: bold;
    cursor: pointer;
`

const LoadMoreButton = (props) => {
    const { loadCount, setLoadCount, courses } = props

    const LoadMoreHandler = () => {
        if ((loadCount + 3) > courses.length || (loadCount + 3) >= courses.length) {
            setLoadCount(courses.length)
        } else {
            setLoadCount(loadCount + 3)
        }
    }
    return (
        <ButtonWrapper>
            <Button onClick={() => LoadMoreHandler()}>
                Load More
            </Button>
        </ButtonWrapper>
    )
}

LoadMoreButton.propTypes = {
    loadCount: PropTypes.number,
    setLoadCount: PropTypes.func,
    courses: PropTypes.array,
}

export default LoadMoreButton

