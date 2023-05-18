import React from "react";
import TrainersList from "./components/TrainersList";
import TrainersAvailability from "./components/TrainersAvailability";
import { TrainerProvider } from "./TrainerContext";

function App() {
  return (
    <div className="flex text-center h-screen">
      <TrainerProvider>
        <TrainersList />
        <div className="w-full bg-cyan-100">
          <TrainersAvailability />
        </div>
      </TrainerProvider>
    </div>
  );
}

export default App;
