import { useState, useEffect } from "react";

const Day = ({ date, selectedDate, setSelectedDate, isStart, isEnd }) => {
    const [hasNote, setHasNote] = useState(false);

    useEffect(() => {
        if (!date) return;
        const key = `note-${date.getDate?.() || date}`;
        setHasNote(!!localStorage.getItem(key));
    }, [date]);
    if (!date) return <div className="" />;
    const dayNumber = typeof date === 'number' ? date : date.getDate();
    const currentDate = new Date();
    const isCurrentDate = currentDate.getDate() === dayNumber &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getFullYear() === selectedDate.getFullYear();

    const isSelected = selectedDate &&
        selectedDate.getDate() === dayNumber &&
        selectedDate.getMonth() === selectedDate.getMonth();

    return (
        <button
            onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), dayNumber))}
            className={`
        relative p-2 rounded-lg text-center transition-all duration-200
        hover:scale-105
      `}
        >
            <span className={`
        relative z-10 text-sm font-medium
        ${isStart || isEnd ? "text-white" : "text-gray-700"}
      `}>
                {dayNumber}
            </span>
            {isSelected && !isStart && !isEnd && (
                <div className="absolute inset-0 border-1 border-blue-500 rounded-lg pointer-events-none"></div>
            )}
            {isCurrentDate && !isSelected && !isStart && !isEnd && (
                <div className="absolute inset-0 border-2 border-dotted border-gray-400 rounded-lg pointer-events-none"></div>
            )}
        </button>
    );
};

export default Day;