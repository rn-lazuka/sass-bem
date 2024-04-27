import './Article.scss';
import { Button } from '../Button/Button';

export const Article = ({
  title,
  description,
  img,
  isFullwidth
}) => {
  return (
    <div
      className={`article ${isFullwidth && 'article--fullwidth'}`}
      style={{ background: `linear-gradient(0deg, #00000000, #0F1420C9), url(${img}) no-repeat center / cover` }}
    >
      <span className="article__title">{title}</span>
      <span className="article__description">{description}</span>
      <Button variant="outlined">Learn more</Button>
    </div>
  );
};
