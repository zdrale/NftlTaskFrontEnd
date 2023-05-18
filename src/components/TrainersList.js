import React, { useContext } from "react";
import Trainer from "./Trainer";
import { TrainerContext } from "../TrainerContext";

function TrainersList() {
  const { setTrainerAvailability } = useContext(TrainerContext);
  const { trainersNames } = useContext(TrainerContext);

  return (
    <div className="bg-blue-500 w-1/6 pt-9 ">
      <h1 className="text-center text-white text-3xl mb-3">
        Available Trainers
      </h1>
      <Trainer
        setTrainerAvailability={setTrainerAvailability}
        trainersNames={trainersNames}
      />
    </div>
  );
}

export default TrainersList;
