// TrainerContext.js
import React from "react";

export const TrainerContext = React.createContext();

export const TrainerProvider = ({ children }) => {
  const [trainersNames, setTrainersNames] = React.useState([]);
  const [trainerAvailability, setTrainerAvailability] = React.useState(null);
  const [currentTrainer, setCurrentTrainer] = React.useState(null);

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
