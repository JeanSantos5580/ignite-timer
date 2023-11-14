import { Scroll, Timer as TimerIcon } from '@phosphor-icons/react'
import { HeaderContainer, HeaderButtons } from './styles'
import igniteLogo from '../../assets/ignite-logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" width={32} />
      <HeaderButtons>
        <NavLink to="/" title="Timer">
          <TimerIcon size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </HeaderButtons>
    </HeaderContainer>
  )
}
