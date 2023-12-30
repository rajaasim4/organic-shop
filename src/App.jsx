import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  // console.clear()

  const style =
    "font-size:25px;color:#007d56;font-family:Arial;text-align:center";

  console.log(
    "%c Developed By Muhammad Asim Contact for More Website rajaasim4474@gmail.com",
    style
  );

  return (
    <>
      <Provider store={store}>
        <ParallaxProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ParallaxProvider>
      </Provider>
    </>
  );
};

export default App;
