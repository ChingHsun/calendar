import { format, isSameDay, isSameMonth } from "date-fns";
import { FC } from "react";
import "./Day.css";

interface DayProps {
  date: Date;
  currentDate: Date;
}

const Day: FC<DayProps> = ({ date, currentDate }) => {
  const isCurrentMonth = isSameMonth(date, currentDate);
  const isCurrentDay = isSameDay(date, currentDate);

  const dayClassName = `day $ ${isCurrentDay ? "currentDay" : ""}`;

  return (
    <button className={dayClassName} disabled={!isCurrentMonth}>
      {format(date, "d")}日
    </button>
  );
};

export default Day;
