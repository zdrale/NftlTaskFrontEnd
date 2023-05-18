import React, { useEffect, useContext } from "react";
import {
  getTrainersFullNames,
  getTrainersAvailability,
} from "../services/TrainersService";
import { TrainerContext } from "../TrainerContext";

function Trainer() {
  const {
    trainersNames,
    setTrainersNames,
    setCurrentTrainer,
    setTrainerAvailability,
  } = useContext(TrainerContext);

  useEffect(() => {
    getTrainersFullNames().then((response) => setTrainersNames(response));
  }, []);

  const handleClick = (trainer) => {
    getTrainersAvailability(trainer).then((response) =>
      setTrainerAvailability(response)
    );
    setCurrentTrainer(trainer);
  };

  return (
    <div className="text-center flex flex-col items-center ">
      {trainersNames.map((trainer) => {
        return (
          <div
            key={trainer}
            onClick={() => handleClick(trainer)}
            className="bg-blue-100 h-8 flex items-center justify-center mt-2 w-8/12 rounded-md cursor-pointer hover:bg-sky-500 text-indigo-800"
          >
            {trainer}
          </div>
        );
      })}
    </div>
  );
}

export default Trainer;
