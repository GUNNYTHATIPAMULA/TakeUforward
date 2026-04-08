const useCalendar = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [];
  for (let i = 0; i < firstDay; i++) dates.push("");
  for (let i = 1; i <= totalDays; i++) dates.push(i);
  return { days, dates };
};

export default useCalendar;