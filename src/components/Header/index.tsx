import fundoHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import { HeaderBackground, Logo, Slogan } from './styles'

const Header = () => (
  <>
    <HeaderBackground style={{ backgroundImage: `url(${fundoHeader})` }}>
      <div>
        <Logo src={logo} alt="logo" />
      </div>
      <Slogan>
        Viva experiências gastronômicas <br /> no confoto da sua casa
      </Slogan>
    </HeaderBackground>
  </>
)

export default Header
