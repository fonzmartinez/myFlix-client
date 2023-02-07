import { createRoot } from "react-dom/client";

import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return <MainView />
}

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
