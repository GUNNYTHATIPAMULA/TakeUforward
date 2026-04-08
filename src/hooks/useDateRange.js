import { useState } from "react";

const useDateRange = () => {
  const [startDate, setStart] = useState(null);
  const [endDate, setEnd] = useState(null);

  const selectDate = (d) => {
    if (!startDate || endDate) {
      setStart(d);
      setEnd(null);
    } else {
      if (d < startDate) {
        setEnd(startDate);
        setStart(d);
      } else {
        setEnd(d);
      }
    }
  };

  const isInRange = (d) => {
    return startDate && endDate && d > startDate && d < endDate;
  };

  return { startDate, endDate, selectDate, isInRange };
};

export default useDateRange;