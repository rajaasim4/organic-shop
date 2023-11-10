import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollTop from "./Hooks/ScrollTop";
import Router from "./Routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ParallaxProvider } from "react-scroll-parallax";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ParallaxProvider>

          <BrowserRouter>
            <Router />
            <ScrollTop />
          </BrowserRouter>
        </ParallaxProvider>

      </Provider>
    </>
  );
};

export default App;
