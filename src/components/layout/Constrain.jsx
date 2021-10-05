import PropTypes from "prop-types"
import styled from "styled-components"

const Constrain = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.layout.maxWidth};
`

Constrain.propTypes = {
  children: PropTypes.node,
}

export default Constrain
