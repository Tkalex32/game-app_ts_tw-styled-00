import { BrowserRouter, Route, Routes } from "react-router-dom";
import FOF from "./components/FOF/FOF";
import Game from "./components/Game/Game";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="*" element={<FOF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
