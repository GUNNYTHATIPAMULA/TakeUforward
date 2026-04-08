import Day from "./Day";
import useCalendar from "../hooks/useCalendar";
import useDateRange from "../hooks/useDateRange";

const CalendarGrid = ({ selectedDate, setSelectedDate }) => {
  const { days, dates } = useCalendar(selectedDate);
  const { selectDate } = useDateRange();

  return (
    <div className="w-full md:w-2/3">
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
        {days.map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-sm">
        {dates.map((date, i) => (
          <Day
            key={i}
            date={date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </div>

    </div>
  );
};

export default CalendarGrid;