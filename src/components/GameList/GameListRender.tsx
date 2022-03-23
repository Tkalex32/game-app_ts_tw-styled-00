import { ChangeEvent } from "react";
import GameCard from "../GameCard/GameCard";
import GameFilter from "../GameFilter/GameFilter";
import { List, ListItem } from "./styles";

interface GameListProps {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameListRender: React.FC<GameListProps> = ({
  err,
  games,
  onFilterChange,
}) => {
  if (err) <p>Unable to fetch games</p>;
  if (games?.length === 0) <p>No games available</p>;

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameListRender;
