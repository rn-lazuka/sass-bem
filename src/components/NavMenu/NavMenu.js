import './NavMenu.scss'
import { navPaths } from '../../constants/routes';

export const NavMenu = () => {
  return (
    <nav className="nav-menu header__nav-menu--hidden nav-menu--hidden">
      {navPaths.map(({
          Icon,
          path,
          title
        }, i) =>
        <div  key={i} className="nav-menu__link">
          <a href={path}>
            {Icon && <Icon />}
            {title && <span>{title}</span>}
          </a>
        </div>
      )}
    </nav>
  );
};
