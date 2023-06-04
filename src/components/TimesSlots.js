import React from "react";

function TimesSlots({ trainerAvailability }) {
  return (
    <div className="flex flex-col items-center">
      {trainerAvailability.map((availability) => (
        <div
          key={availability.name}
          className="bg-blue-500 hover:bg-blue-300 text-white w-1/5 text-xl rounded-md leading-9 cursor-pointer mb-4 mr-2"
        >
          Available At: {availability.availableAt} <br /> Available Until:
          {availability.availableUntil}
        </div>
      ))}
    </div>
  );
}

export default TimesSlots;
