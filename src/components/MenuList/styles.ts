import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 0;
    align-items: center;
    max-width: 100%;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${cores.branco};
  display: none;
  align-items: center;
  z-index: 1000;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${ButtonContainer} {
    padding: 4px;
    margin-top: 8px;
    width: 218px;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.salmao};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: ${cores.salmao};
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  .container {
    max-width: 960px;
  }

  .closeButton {
    padding-top: 0px;
    width: 16px;
    height: 16px;
    object-fit: contain;
    cursor: pointer;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 180px;
      height: 180px;
    }
  }

  .title {
    padding-bottom: 16px;
    font-size: 18px;
  }

  .descricao {
    padding-bottom: 46px;
    font-size: 14px;
    line-height: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: center;
    }
  }

  .porcao {
    padding-bottom: 16px;
  }
`
