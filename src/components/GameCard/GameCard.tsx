import { Link } from "react-router-dom";

interface GameCardProps {
  content: Game;
}

const GameCard: React.FC<GameCardProps> = ({ content }) => {
  const { id, title, thumbnail, short_description, genre } = content;
  const link = `/game/${id}`;

  return (
    <Link to={link}>
      <img src={thumbnail} alt={`${title} thumbnail`} />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <p>{genre}</p>
    </Link>
  );
};

export default GameCard;
