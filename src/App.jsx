import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import ScrollTop from "./utils/ScrollTop";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <ScrollTop />
      </BrowserRouter>
    </>
  );
};

export default App;
