import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  salmao: '#E66767',
  bege: '#FFEBD9',
  offwhite: '#FFF8F2',
  branco: '#fff'
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
    color: ${cores.salmao};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
