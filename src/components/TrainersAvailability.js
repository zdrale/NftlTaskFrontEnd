import React, { useContext } from "react";
import { TrainerContext } from "../TrainerContext";

function TrainersAvailability() {
  const { trainerAvailability, currentTrainer } = useContext(TrainerContext);
  const handleClick = () => {
    alert("Are you sure you want to book this trainer?");
  };
  const trainerNotAvailable = "Trainer not available for today.";
  const trainerNotSelected = "Please select a trainer from the list";

  return (
    <div className="pt-10 ">
      <h1 className="text-3xl mb-10 text-red-500 ">
        Coach's {currentTrainer} Availability
      </h1>

      {trainerAvailability && trainerAvailability.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {trainerAvailability.map((availability) => (
            <div
              key={availability.name}
              className="bg-blue-500 hover:bg-blue-300 text-white w-1/5 text-xl rounded-md cursor-pointer mb-4 mr-2"
              onClick={handleClick}
            >
              Available At: {availability.availableAt} Available Until:
              {availability.availableUntil}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-3xl text-red-500">
          {currentTrainer ? trainerNotAvailable : trainerNotSelected}
        </p>
      )}
    </div>
  );
}

export default TrainersAvailability;
