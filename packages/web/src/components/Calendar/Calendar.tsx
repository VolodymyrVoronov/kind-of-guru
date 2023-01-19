import InfiniteCalendar from "react-infinite-calendar";

import "react-infinite-calendar/styles.css";
import "./Calendar.css";

const Calendar = (): JSX.Element => {
  const today = new Date();
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 365
  );

  const onDateClick = (e: Date): void => {
    const selectedDate = e.toLocaleDateString();

    console.log(selectedDate);
  };

  const calendarHeight = window.innerHeight - 180;

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
