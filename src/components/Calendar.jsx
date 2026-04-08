import { useState } from "react";
import Header from "./Header";
import CalendarGrid from "./CalendarGrid";
import Notes from "./Notes";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-sm bg-white shadow-md rounded-md overflow-hidden">
        <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Notes selectedDate={selectedDate} />
          <CalendarGrid
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;