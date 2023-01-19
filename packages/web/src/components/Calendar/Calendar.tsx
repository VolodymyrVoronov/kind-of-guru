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

  return (
    <div>
      <InfiniteCalendar
        selected={today}
        minDate={lastWeek}
        locale={{
          weekStartsOn: 1,
        }}
        width={400}
        height={window.innerHeight}
        rowHeight={50}
      />
    </div>
  );
};

export default Calendar;
