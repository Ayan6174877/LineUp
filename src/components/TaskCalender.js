import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calender.css";

function TaskCalender({ cname, onChange, date }) {
  return (
    <div className="task-calender">
      <Calendar
        calendarType="ISO 8601"
        className={cname}
        onChange={(value) => onChange(new Date())}
        value={date}
      />
    </div>
  );
}

export default TaskCalender;
