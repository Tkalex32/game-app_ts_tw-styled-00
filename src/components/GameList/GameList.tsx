import { ChangeEvent, useCallback, useState } from "react";
import useFetch from "../../hooks/useFetch";
import GameListRender from "./GameListRender";

const GameList = () => {
  const [filter, setFilter] = useState<Filter>({});
  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback(
    (e: ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;

      setFilter((current) => ({
        ...current,
        [form.name]: form.value,
      }));
    },
    []
  );

  return (
    <GameListRender games={games} err={error} onFilterChange={onFilterChange} />
  );
};

export default GameList;
