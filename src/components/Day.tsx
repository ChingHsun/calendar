import { format, isSameDay, isSameMonth, isWithinInterval } from "date-fns";
import { FC } from "react";
import "./Day.css";
import { DateRange } from "../App";

interface DayProps {
  date: Date;
  currentDate: Date;
  onDayClick: (date: Date) => void;
  dateRange: DateRange | null;
}

const Day: FC<DayProps> = ({ date, currentDate, onDayClick, dateRange }) => {
  const isCurrentMonth = isSameMonth(date, currentDate);
  const isCurrentDay = isSameDay(date, currentDate);
  const isSelected = dateRange && isWithinInterval(date, dateRange);

  const dayClassName = `day ${isCurrentDay ? "currentDay" : ""} ${
    isSelected ? "active" : ""
  }`;

  return (
    <button
      className={dayClassName}
      disabled={!isCurrentMonth}
      onClick={() => onDayClick(date)}
    >
      {format(date, "d")}日
    </button>
  );
};

export default Day;
