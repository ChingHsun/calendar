import { format } from "date-fns";
import "./App.css";
import Day from "./components/Day";
import getDays from "./utils/getDays";
import { useState } from "react";

export interface DateRange {
  start: Date;
  end: Date;
}

function App() {
  const currentDate = new Date();
  const days = getDays(currentDate);

  const [dateRange, setDateRange] = useState<DateRange | null>(null);

  const handleDayClick = (date: Date) => {
    if (!dateRange) {
      setDateRange({ start: date, end: date });
    } else {
      if (date < dateRange.start) {
        setDateRange((prev) => prev && { ...prev, start: date });
      } else {
        setDateRange((prev) => prev && { ...prev, end: date });
      }
    }
  };

  return (
    <div className="layout">
      <div className="header">
        <button>&#8249;</button>
        <div>{format(currentDate, "yyyy 年 M 月")}</div>
        <button>&#8250;</button>
      </div>
      <div className="calendar">
        {days.map((day) => (
          <Day
            key={day.toString()}
            date={day}
            currentDate={currentDate}
            onDayClick={handleDayClick}
            dateRange={dateRange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
