import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollTop from "./Hooks/ScrollTop";
import Router from "./Routes/Router";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
        <ScrollTop />
      </BrowserRouter>
    </>
  );
};

export default App;
