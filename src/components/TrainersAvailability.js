import React, { useContext } from "react";
import { TrainerContext } from "../TrainerContext";
import TimesSlots from "./TimesSlots";

function TrainersAvailability() {
  const { trainerAvailability, currentTrainer } = useContext(TrainerContext);

  const trainerNotAvailable = "Trainer not available for today.";
  const trainerNotSelected = "Please select a coach from the list!";

  return (
    <div className="pt-10 ">
      <h1 className="text-3xl mb-10 text-red-500 ">
        Coach's {currentTrainer} Availability
      </h1>

      {trainerAvailability && trainerAvailability.length > 0 ? (
        <TimesSlots trainerAvailability={trainerAvailability} />
      ) : (
        <p className="text-3xl text-red-500">
          {currentTrainer ? trainerNotAvailable : trainerNotSelected}
        </p>
      )}
    </div>
  );
}

export default TrainersAvailability;
