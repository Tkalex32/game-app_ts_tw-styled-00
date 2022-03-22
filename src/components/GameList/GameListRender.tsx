import GameCard from "../GameCard/GameCard";

interface GameListProps {
  err?: string;
  games: Game[];
}

const GameListRender: React.FC<GameListProps> = ({ err, games }) => {
  if (err) <p>Unable to fetch games</p>;
  if (games?.length === 0) <p>No games available</p>;

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard content={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameListRender;
