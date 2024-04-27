import './Buttos.scss';

export const Button = ({
  onClick,
  children,
  variant = 'outlined'
}) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
