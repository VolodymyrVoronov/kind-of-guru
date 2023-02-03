import InfiniteCalendar from "react-infinite-calendar";

import getDateString from "../../helpers/getDateString";

import "react-infinite-calendar/styles.css";
import "./Calendar.css";

interface ICalendarProps {
  onDateClick: (e: string) => void;
}

const Calendar = ({ onDateClick: oDClick }: ICalendarProps): JSX.Element => {
  const today = new Date();
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 365
  );

  const onDateClick = (e: Date): void => {
    oDClick(getDateString(e));
  };

  const calendarHeight = window.innerHeight - 130 - 76;

  return (
    <div>
      <InfiniteCalendar
        onSelect={onDateClick}
        selected={today}
        minDate={lastWeek}
        locale={{
          weekStartsOn: 1,
        }}
        width="100%"
        height={calendarHeight}
        rowHeight={50}
      />
    </div>
  );
};

export default Calendar;
