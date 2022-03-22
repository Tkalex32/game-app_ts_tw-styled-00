import axios from "axios";
import { useEffect, useState } from "react";
import GameListRender from "./GameListRender";

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${import.meta.env.VITE_API_HOST}/api`,
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_API_HOST as string,
          "x-rapidapi-key": import.meta.env.VITE_API_KEY as string,
        },
        params: {
          platform: "browser",
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, []);

  return <GameListRender games={games} err={err} />;
};

export default GameList;
