import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollTop from "./Hooks/ScrollTop";
import Router from "./Routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <Router />
          <ScrollTop />
        </BrowserRouter>

      </Provider>
    </>
  );
};

export default App;
