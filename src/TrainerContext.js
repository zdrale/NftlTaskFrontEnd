import React from "react";
import { useState } from "react";

export const TrainerContext = React.createContext();

export const TrainerProvider = ({ children }) => {
  const [trainersNames, setTrainersNames] = useState([]);
  const [trainerAvailability, setTrainerAvailability] = useState(null);
  const [currentTrainer, setCurrentTrainer] = useState(null);

  return (
    <TrainerContext.Provider
      value={{
        trainersNames,
        setTrainersNames,
        trainerAvailability,
        setTrainerAvailability,
        currentTrainer,
        setCurrentTrainer,
      }}
    >
      {children}
    </TrainerContext.Provider>
  );
};
