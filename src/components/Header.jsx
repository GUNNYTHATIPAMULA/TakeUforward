import hero from "../assets/calender.jpg";
import { ChevronLeft,ChevronRight } from 'lucide-react';
const Header = ({ selectedDate, setSelectedDate }) => {
const Previousmonth = () => {
  const newDate = new Date(selectedDate);
  newDate.setMonth(newDate.getMonth() - 1);
  setSelectedDate(newDate);
};
const NextMonth = () => {
  const newDate = new Date(selectedDate);
  newDate.setMonth(newDate.getMonth() + 1);
  setSelectedDate(newDate);
};

  const month = selectedDate.toLocaleString("default", { month: "long" });
  const year = selectedDate.getFullYear();

  return (
    <div className="relative">
      <img src={hero} className="w-full h-[200px] object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-blue-500 clip-path-custom"></div>
      <div className="absolute bottom-4 right-4 text-white text-right">
        <p className="text-sm">{year}</p>
        <h2 className="text-xl font-bold">{month.toUpperCase()}</h2>
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={() => Previousmonth()} className=" px-2 rounded"><ChevronLeft /></button>
        <button onClick={() => NextMonth()} className="px-2 rounded"><ChevronRight /></button>
      </div>
    </div>
  );
};

export default Header;