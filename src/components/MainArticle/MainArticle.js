import './MainArticle.scss';
import earth from '../../assets/images/earth.png';
import { Button } from '../Button/Button';

export const MainArticle = () => {
  return (
    <div className="main-article">
      <div className="main-article__info">
        <h1 className="main-article__info__title">Discover the vast expanses of <span>space</span>
        </h1>
        <p className="main-article__info__text">Where the possibilities are <span>endless!</span>
        </p>
        <Button variant="contained">Learn More</Button>
      </div>
      <div className="main-article__image-container">
        <img src={earth} alt="earth" />
      </div>
    </div>
  );
};

