import { createRoot } from 'react-dom/client';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
