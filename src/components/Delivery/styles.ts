import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Form } from 'react-router-dom'

export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
`

export const FormContainer = styled.div``

export const InputGroup = styled.div`
  label {
    color: ${cores.bege};
    font-weight: bold;
    font-size: 14px;
    display: block;
  }
  input {
    margin: 8px 0;
    padding: 8px;
    width: 344px;
    max-width: 100%;
    border: none;
    background-color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    color: #4b4b4b;
  }

  &.cepNumero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;

    input {
      width: 155px;
      max-width: 100%;
      justify-content: center;
    }
  }
`
