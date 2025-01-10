import { FormContainer } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Form = ({ children, title }: Props) => (
  <FormContainer>
    <h3>{title}</h3>
    {children}
  </FormContainer>
)

export default Form
