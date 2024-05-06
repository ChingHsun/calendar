import { useEffect, useState } from "react";
import { format, addMonths } from "date-fns";
import "./App.css";
import Day from "./components/Day";
import getDays from "./utils/getDays";

function App() {
  const [currentDateState, setCurrentDateState] = useState<Date>(new Date());

  const [days, setDays] = useState<Date[]>([]);

  const goToPreviousMonth = () => {
    setCurrentDateState((prevDate) => addMonths(prevDate, -1));
  };

  const goToNextMonth = () => {
    setCurrentDateState((prevDate) => addMonths(prevDate, 1));
  };

  useEffect(() => {
    setDays(getDays(currentDateState));
  }, [currentDateState]);

  return (
    <div className="layout">
      <div className="header">
        <button onClick={goToPreviousMonth}>&#8249;</button>
        <div>{format(currentDateState, "yyyy 年 M 月")}</div>
        <button onClick={goToNextMonth}>&#8250;</button>
      </div>
      <div className="calendar">
        {days.map((day) => (
          <Day key={day.toString()} date={day} currentDate={currentDateState} />
        ))}
      </div>
    </div>
  );
}

export default App;
