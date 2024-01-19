import { useData } from "./DataContext";

const HiddenCard = ({ workid, hidden }) => {
  const { toggleHidden } = useData();

  return (
    <div className="w-fit h-[250px] p-2 border-4 border-black rounded-xl mx-auto my-2 bg-black flex flex-col items-center">
      <h1 className="text-white">This work is hidden</h1>
      <button className="bg-white" onClick={() => toggleHidden(workid, hidden)}>
        Unhide
      </button>
    </div>
  );
};

export default HiddenCard;
