import React, { useRef } from "react"
import styled from "styled-components"

const ToolBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey[0]};
  height: 100px;
  margin-top: 60px;
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

const ToolBar = () => {
    const DropDownRef = useRef()
    return (
        <ToolBarContainer>
            <ToolWrapper>
                <Label htmlFor={DropDownRef}>Course Type</Label>
                <Select ref={DropDownRef} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Please select</option>
                </Select>
            </ToolWrapper>
        </ToolBarContainer>
    )
}

export default ToolBar
