import "./App.css";
import tw from "tailwind-styled-components";

function App() {
  return (
    <Container>
      <div className="text-red-500">TEST</div>
    </Container>
  );
}

export default App;

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-lime-400
`;
