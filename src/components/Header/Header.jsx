import './Header.scss';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as LogoPlanet } from '../../assets/icons/logo-planet.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { NavMenu } from '../NavMenu/NavMenu';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoPlanet />
        <Logo />
      </div>
      <div className="header__desktop--visible">
      <NavMenu />
      </div>
      <div className="header__burger flex relative lg:hidden mr-[24px] cursor-pointer">
        <input id="menuToggle" className="header__burger__toggle" type="checkbox" />
        <label className="header__burger__label" htmlFor="menuToggle">
          <span className="header__burger__menu-icon"><MenuIcon /></span>
          <span className="header__burger__close-icon"><CloseIcon /></span>
        </label>
        <div className="header__burger__menu">
          <NavMenu/>
        </div>
      </div>
    </header>
  );
};

