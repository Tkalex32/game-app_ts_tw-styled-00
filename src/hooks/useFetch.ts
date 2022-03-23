import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (params: Filter): Resp => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");
  const { platform, genre, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${import.meta.env.VITE_API_HOST}/api`,
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_API_HOST as string,
          "x-rapidapi-key": import.meta.env.VITE_API_KEY as string,
        },
        params: {
          platform,
          category: genre,
          "sort-by": sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, sortBy]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
