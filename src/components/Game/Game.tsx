import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  ErrorContainer,
  Text,
  Title,
  Container,
  InfoWrapper,
  Info,
  InfoBox,
  InfoBoxBox,
  InfoText,
  DescContainer,
  Description,
  DescSwitch,
  InfoImgContainer,
  SectionTitle,
  Thumbnail,
  BackButton,
} from "./styles";

const Game = () => {
  const [game, setGame] = useState<GameDetail | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [isReadMore, setIsReadMore] = useState(true);
  let params = useParams();

  useEffect(() => {
    axios
      .get("/game", {
        baseURL: `https://${import.meta.env.VITE_API_HOST}/api`,
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_API_HOST as string,
          "x-rapidapi-key": import.meta.env.VITE_API_KEY as string,
        },
        params: {
          id: params.id,
        },
      })
      .then((res) => setGame(res.data))
      .catch((e) => setError(e.message));
    window.scrollTo(0, 0);
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {error.length > 0 ? (
        <ErrorContainer>
          <Card>
            <Title>404</Title>
            <Text>Game Could Not Be Found</Text>
            <Button type="button" to="/">
              Back To Home
            </Button>
          </Card>
        </ErrorContainer>
      ) : (
        <Container>
          <img src={game?.thumbnail} alt={game?.title} />
          <Title>{game?.title}</Title>
          <DescContainer>
            <Description>{game?.description.slice(0, 300)}</Description>
            <Description $isReadMore={isReadMore} onClick={toggleReadMore}>
              {game?.description.slice(300)}
            </Description>
            <DescSwitch onClick={toggleReadMore}>
              {isReadMore ? "+ Read More" : "- Read Less"}
            </DescSwitch>
          </DescContainer>
          <InfoWrapper>
            <Info>
              <SectionTitle>Additional Information</SectionTitle>
              <InfoBox>
                <InfoBoxBox>
                  <InfoText>Developer</InfoText>
                  <InfoText>{game?.developer}</InfoText>
                </InfoBoxBox>
                <InfoBoxBox>
                  <InfoText>Publisher</InfoText>
                  <InfoText>{game?.publisher}</InfoText>
                </InfoBoxBox>
              </InfoBox>
              <InfoBox>
                <InfoBoxBox>
                  <InfoText>Release Date</InfoText>
                  <InfoText>{game?.release_date}</InfoText>
                </InfoBoxBox>
                <InfoBoxBox>
                  <InfoText>Platform</InfoText>
                  <InfoText>{game?.platform}</InfoText>
                </InfoBoxBox>
              </InfoBox>
              <InfoBox>
                <InfoBoxBox>
                  <InfoText>Genre</InfoText>
                  <InfoText>{game?.genre}</InfoText>
                </InfoBoxBox>
              </InfoBox>
            </Info>
            {!game?.minimum_system_requirements ? (
              <Info>
                <SectionTitle>
                  Minimum System Requirements (Browser)
                </SectionTitle>
                <InfoBox>
                  <InfoBoxBox>
                    <InfoText>
                      {game?.title} is a browser based game and should run
                      smoothly on practically any PC with a updated web-browser.
                      <br />
                      <br />
                      If you have old hardware or software, you may still be
                      able to play {game?.title}, but your game experience may
                      suffer. For the best gameplay experience, we recommend the
                      latest versions of Firefox, Chrome, or Internet Explorer.
                    </InfoText>
                    <InfoText></InfoText>
                  </InfoBoxBox>
                </InfoBox>
              </Info>
            ) : (
              <Info>
                <SectionTitle>
                  Minimum System Requirements (Windows)
                </SectionTitle>
                <InfoBox $isCol={true}>
                  <InfoBoxBox>
                    <InfoText>OS</InfoText>
                    <InfoText>{game?.minimum_system_requirements.os}</InfoText>
                  </InfoBoxBox>
                  <InfoBoxBox>
                    <InfoText>Processor</InfoText>
                    <InfoText>
                      {game?.minimum_system_requirements.processor}
                    </InfoText>
                  </InfoBoxBox>
                </InfoBox>
                <InfoBox $isCol={true}>
                  <InfoBoxBox>
                    <InfoText>Memory</InfoText>
                    <InfoText>
                      {game?.minimum_system_requirements.memory}
                    </InfoText>
                  </InfoBoxBox>
                  <InfoBoxBox>
                    <InfoText>Storage</InfoText>
                    <InfoText>
                      {game?.minimum_system_requirements.storage}
                    </InfoText>
                  </InfoBoxBox>
                </InfoBox>
                <InfoBox $isCol={true}>
                  <InfoBoxBox>
                    <InfoText>Graphics</InfoText>
                    <InfoText>
                      {game?.minimum_system_requirements.graphics}
                    </InfoText>
                  </InfoBoxBox>
                </InfoBox>
              </Info>
            )}
          </InfoWrapper>
          <Info>
            <SectionTitle>{game?.title} Screenshots</SectionTitle>
            <InfoImgContainer>
              {game?.screenshots.map((image) => (
                <Thumbnail
                  src={image.image}
                  alt={`${game.title} thumbnail`}
                  key={image.id}
                />
              ))}
            </InfoImgContainer>
          </Info>
          <BackButton type="button" to="/">
            Back To Home
          </BackButton>
        </Container>
      )}
    </>
  );
};

export default Game;
