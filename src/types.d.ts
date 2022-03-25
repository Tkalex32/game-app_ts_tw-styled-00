interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface GameDetail extends Game {
  status: string;
  description: string;
  minimum_system_requirements: SysReq;
  screenshots: ScreenShot[];
}

type SysReq = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

type ScreenShot = {
  id: number;
  image: string;
};

type Filter = {
  platform?: string;
  genre?: string;
  sortBy?: string;
};

type Resp = {
  games: Game[];
  error: string;
};

interface DescriptionProps {
  $isReadMore?: boolean;
}

interface InfoBoxProps {
  $isCol?: boolean;
}
