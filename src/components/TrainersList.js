import Trainer from "./Trainer";

function TrainersList() {
  return (
    <div className="bg-blue-500 w-1/6 pt-9 ">
      <h1 className="text-center text-white text-3xl mb-3">
        Available Trainers
      </h1>
      <Trainer />
    </div>
  );
}

export default TrainersList;
