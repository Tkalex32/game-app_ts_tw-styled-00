import { Button, Card, Container, Text, Title } from "./styles";

const FOF = () => {
  return (
    <Container>
      <Card>
        <Title>404</Title>
        <Text>Page Could Not Be Found</Text>
        <Button type="button" to="/">
          Back To Home
        </Button>
      </Card>
    </Container>
  );
};

export default FOF;
