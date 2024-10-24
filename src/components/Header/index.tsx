import { HeaderBackground, Logo, Slogan } from './styles'
import fundoHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <HeaderBackground style={{ backgroundImage: `url(${fundoHeader})` }}>
      <div>
        <Logo src={logo} alt="" />
      </div>
      <Slogan>
        Viva experiências gastronômicas <br /> no confoto da sua casa
      </Slogan>
    </HeaderBackground>
  </>
)

export default Header
