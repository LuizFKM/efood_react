import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
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
  }

  .title {
    padding-bottom: 16px;
    font-size: 18px;
  }

  .descricao {
    padding-bottom: 46px;
    font-size: 14px;
    line-height: 22px;
  }

  .porcao {
    padding-bottom: 16px;
  }
`
