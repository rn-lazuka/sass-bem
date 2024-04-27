import './MainPage.scss';
import { Article, Button, MainArticle } from '../../components';
import { articles } from '../../constants';

export const MainPage = () => {
  return (
    <main className="main">
      <MainArticle />
      <div className="main__articles">
        <p className="main__articles__title">Offers</p>
        <div className="main__articles__container">
          {articles.map((article, i, array) => (
            <Article
              key={article.title}
              title={article.title}
              description={article.description}
              img={article.image}
              isFullwidth={array.length - 1 === i || i === 0}
            />
          ))}
        </div>
        <div className="main__articles__description">
          <span>Embark on a space journey</span>
          <p>
            Travelling into space is one of the most exciting and unforgettable adventures that can
            change your life forever. And if you have ever dreamed of exploring stars, planets and
            galaxies, then our company is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all the secrets of the
            universe. We guarantee that every moment in space will be filled with incredible
            impressions, excitement and new discoveries. Our team of professionals takes care of
            your safety and comfort so that you can fully enjoy your adventure in space. We offer
            various options for space excursions.
          </p>
          <Button variant="text">Read more</Button>
        </div>
      </div>
    </main>
  );
};

