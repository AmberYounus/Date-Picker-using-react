import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";

function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <button>
        {value == "null" ? "Select a Date" : format(value, "MM do,yyy")}
      </button>
      {isOpen && <DatePickerModal value={value} onChange={onChange} />}
    </div>
  );
}
function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });
  //Show Previous MOnth 
  function showPreviousMonth() {
  setVisibleMonth(currentMonth => {
    return addMonths(currentMonth, -1);
  });
  }
  //Show Next MOnth 
  function showNextMonth() {
    setVisibleMonth(currentMonth => {
      return addMonths(currentMonth, +1);
    });
  }
}
return (
  <div className="date-picker">
    <div className="header">
      <button onClick={showPreviousMonth}>&larr;</button>
    </div>
    <div>{format(visibleMonth, "MMMM -yyyy")}</div>
    <button onClick={showNextMonth}>&rarr;</button>
    <div>
      <div>Mon</div>
      <div>Tues</div>
      <div>wed</div>
      <div>Thurs</div>
      <div>Frid</div>
      <div>Sat</div>
      <div>SUn</div>
    </div>
  </div>
);
export default DatePicker;
