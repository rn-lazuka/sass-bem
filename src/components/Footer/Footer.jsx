import './Footer.scss';
import rocket from '../../assets/images/rocket.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={rocket} alt="rocket" className="footer__container__img"/>
        <span>Exciting space adventure!</span>
      </div>
    </footer>
  );
};

