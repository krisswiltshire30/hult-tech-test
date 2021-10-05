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
 `

const Main = styled.main`
   padding-top: 80px;
   position: relative;
`

const BackgroundColor = styled.div`
   position: absolute;
   margin-top: 200px;
   min-height: 1200px;
   width: 100%;
   z-index: -1;
   background-color: ${(props) => props.theme.colors.beige[0]};
`

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageContainer>
                <Header/>
                <Main role="main">
                    <BackgroundColor/>
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
