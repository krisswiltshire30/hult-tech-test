import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Constrain from "./Constrain"
import Header from "./Header"

import { GlobalStyle } from "../../styles/global"
import theme from "../../styles/theme"

const PageContainer = styled.div`
   min-height: 100vh;
   margin-top: ${(props) => props.theme.layout.headerHeight};
   background: ${(props) => props.theme.layout.gradient};

 `

const Main = styled.main`
padding-top: 80px;
`

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageContainer>
                <Header/>
                <Main role="main">
                    <Constrain>{children}</Constrain>
                </Main>
            </PageContainer>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
