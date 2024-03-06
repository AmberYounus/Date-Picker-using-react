import { format } from "date-fns";
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
export default DatePicker;
