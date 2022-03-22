import {
  StyledLink,
  Img,
  Title,
  Details,
  Description,
  Genre,
  Icons,
  Icon,
} from "./styles";
import windowsIcon from "./../assets/icons/windows.svg";
import browserIcon from "./../assets/icons/browser.svg";
import { BROWSER, WINDOWS } from "./constants";

interface GameCardProps {
  content: Game;
}

const GameCard: React.FC<GameCardProps> = ({ content }) => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const icons = platform.split(", ").map((p) => {
    let icon = null;

    switch (p.trim()) {
      case BROWSER:
        icon = (
          <Icon
            key={`{$id}-browser`}
            alt="browser icon"
            title={p}
            src={browserIcon}
          />
        );
        break;
      case WINDOWS:
        icon = (
          <Icon
            key={`{$id}-windows`}
            alt="windows icon"
            title={p}
            src={windowsIcon}
          />
        );
        break;
      default:
        break;
    }
    return icon;
  });

  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <Img src={thumbnail} alt={`${title} thumbnail`} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        <Icons>{icons}</Icons>
      </Details>
    </StyledLink>
  );
};

export default GameCard;
