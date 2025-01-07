import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  salmao: '#E66767',
  bege: '#FFEBD9',
  offwhite: '#FFF8F2',
  branco: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.offwhite};

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
