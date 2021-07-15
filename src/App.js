import "./App.css";
import img from "./assets/icons/plus.svg";
import "./assets/styles/_index.scss";
import CircleButton from "./components/buttons/CircleButton";
import RectangularButton from "./components/buttons/RectangularButton";
import DefaultCheckbox from "./components/checkboxes/DefaultCheckbox";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  let today = new Date(Date.now());
  let formatedDate = `${days[today.getDay()]}, ${
    monthNames[today.getMonth()]
  } ${today.getDate()}`;
  return (
    <div className="wrapper">
      <div className="card">
        <div className="left">
          <div className="header">
            <p>TODO-LIST</p>
            <CircleButton>
              <img
                width={25}
                height={25}
                src={img}
                style={{ color: "white" }}
              />
            </CircleButton>
          </div>
          <div className="row">
            <RectangularButton hasShadow={true}>TODAY</RectangularButton>
            <p>SCHEDULE TASKS</p>
          </div>
          <div className="container">
            <p>CATEGORIES</p>
            <div className="row">
              <RectangularButton>EVERY-DAY</RectangularButton>
              <RectangularButton>WORK</RectangularButton>
            </div>
            <div className="row">
              <RectangularButton>HOME</RectangularButton>
              <RectangularButton>OTHER</RectangularButton>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="right">
          <p>TASKS</p>
          <span className="date">{formatedDate}</span>
          <DefaultCheckbox>buy food stuff</DefaultCheckbox>
          <DefaultCheckbox>walk the dog</DefaultCheckbox>
          <DefaultCheckbox>call the doctor</DefaultCheckbox>
          <DefaultCheckbox>fix bathroom door</DefaultCheckbox>
        </div>
        {/* <RectangularButton />
        
        <RoundButton> ADD TASK </RoundButton>
        <DefaultCheckbox>dasdas</DefaultCheckbox> */}
      </div>
    </div>
  );
}

export default App;
