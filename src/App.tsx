import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
