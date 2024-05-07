import { format } from "date-fns";
import "./App.css";
import Day from "./components/Day";
import getDays from "./utils/getDays";

function App() {
  const currentDate = new Date();
  const days = getDays(currentDate);

  return (
    <div className="layout">
      <div className="header">
        <button>&#8249;</button>
        <div>{format(currentDate, "yyyy 年 M 月")}</div>
        <button>&#8250;</button>
      </div>
      <div className="calendar">
        {days.map((day) => (
          <Day key={day.toString()} date={day} currentDate={currentDate} />
        ))}
      </div>
    </div>
  );
}

export default App;
