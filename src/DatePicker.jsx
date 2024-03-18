import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <button className="date-picker-button" onClick={()=> setIsOpen(o=>!o)}>
        {value == "null" ? "Select a Date" : format(value, "MMM dd,yyyy")}
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
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  }

  //Show Next MOnth
  function showNextMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }

  return (
    <>
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
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div>
          {visibleDates.map((date) => (
            <button
              onClick={() => onChange(date)}
              className={`date ${
                  !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"}
                  ${isSameDay(date, value) && "selected"}
                  ${isToday(date) && "today"}
              }`}
              key={date.toDataString()} >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

