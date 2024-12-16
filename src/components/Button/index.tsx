import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './style'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string | ReactNode
}

const Button = ({ type, title, to, onclick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
