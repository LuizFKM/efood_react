import { ButtonContainer, ButtonLink } from './style'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant: 'cardRestaurante' | 'menuAndCheckout'
  className?: string
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant,
  className,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
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
