import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);
setDefaultLocale('uk'); 

const DateElements = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-64 mx-auto">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Виберіть дату"
        className="px-3 py-2 border-2 border-blue-800 rounded-md w-full text-blue-800"
      />
    </div>
  );
};

export default DateElements;
