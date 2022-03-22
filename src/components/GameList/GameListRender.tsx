import GameCard from "../GameCard/GameCard";
import { List, ListItem } from "./styles";

interface GameListProps {
  err?: string;
  games: Game[];
}

const GameListRender: React.FC<GameListProps> = ({ err, games }) => {
  if (err) <p>Unable to fetch games</p>;
  if (games?.length === 0) <p>No games available</p>;

  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>
          <GameCard content={game} />
        </ListItem>
      ))}
    </List>
  );
};

export default GameListRender;
