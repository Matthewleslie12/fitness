import React, {useState} from "react";
import {
  getStartDate,
  generateWeekDates,
  goToPreviousWeek,
  goToNextWeek,
} from "./CalendarLogic";

const Calendar = () => {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const startDate = getStartDate(currentDate);

  const handlePreviousWeek = () => {
    setCurrentDate(goToPreviousWeek(currentDate));
  };

  const handleNextWeek = () => {
    setCurrentDate(goToNextWeek(currentDate));
  };

  const weekDates = generateWeekDates(startDate, 1)[0];

  return (
    <div className=" pt-4">
      {/* <div className="flex justify-between mb-4 ">
        <button onClick={handlePreviousWeek} className="cursor-pointer">
          Previous Week
        </button>

        <button onClick={handleNextWeek} className="cursor-pointer">
          Next Week
        </button>
      </div> */}
      <h1 className="text-lg mb-4 px-4">
        {startDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        })}
      </h1>

      <div className="grid grid-cols-7">
        {daysOfWeek.map((day, index) => (
          <div key={index}></div>
        ))}
        {weekDates.map((date, index) => {
          const dayAbbreviation = daysOfWeek[index];
          const dateNumber = date.getDate();
          const isCurrentDate = date.toDateString() === today.toDateString();

          return (
            <div
              key={index}
              className={`p-1 border text-center justify-center  flex flex-col rounded-xl w-11 h-11 text-xs cursor-pointer  ${
                isCurrentDate ? "bg-black text-white" : "bg-neon text-black "
              }`}
            >
              <div className="">{dayAbbreviation}</div>
              <div>{dateNumber}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
