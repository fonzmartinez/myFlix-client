import React from "react";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

import Container from "react-bootstrap/Container";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);



/*  import { createRoot } from "react-dom/client";

import { MainView } from "./components/main-view/main-view";

// 3.4  import Container from "react-bootstrap/Container";

//import "bootstrap/dist/css/bootstrap.min.css";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return
  // <Container>
  <MainView />
  // </Container>
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);   */
