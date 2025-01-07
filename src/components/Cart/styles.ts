import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'
import remover from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
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

  ${ButtonContainer} {
    padding: 4px;
    margin-top: 8px;
    max-width: 100%;
    width: 100%;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.salmao};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`

export const CartItem = styled.li`
  display: flex;
  align-items: start;
  background-color: ${cores.bege};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  color: ${cores.salmao};
  position: relative;

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${remover});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const TotalPrice = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 14px;
    color: ${cores.bege};
  }
`
