import "./App.css";
import "./assets/styles/_index.scss";
import CircleButton from "./components/buttons/CircleButton";
import RectangularButton from "./components/buttons/RectangularButton";
import RoundButton from "./components/buttons/RoundButton";

function App() {
  return (
    <div className="wrapper">
      <div className="card">
        <RectangularButton />
        <CircleButton>+</CircleButton>
        <RoundButton>ADD TASK</RoundButton>
      </div>
    </div>
  );
}

export default App;
