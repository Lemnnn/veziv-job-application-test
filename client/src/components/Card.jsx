import { FaTrashAlt, FaEye } from "react-icons/fa";
import { useData } from "./DataContext";

const Card = ({ work }) => {
  const {
    deleteWork,
    toggleHidden,
    handleCardSelect,
    isEditing,
    setIsEditing,
  } = useData();

  return (
    <div className="p-2 border-4 border-black rounded-xl h-fit mx-auto my-2">
      <div className="flex flex-col p-3 gap-2">
        <img
          className="h-[150px] object-contain"
          src={`http://localhost:3001/images/${work.image}`}
          alt="Uploaded"
        />

        <h1 className="text-center font-extrabold text-2xl w-[300px] break-all">
          {work.title}
        </h1>
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          className="text-center italic text-blue-700 w-[300px] break-all"
        >
          {work.link}
        </a>
        <p className="text-sm w-[300px] text-justify break-all">
          {work.description}
        </p>
        <div className="flex gap-2 pt-2">
          <button
            className="p-2 rounded-full border-2 border-black"
            onClick={() => toggleHidden(work._id, !work.hidden)}
          >
            <FaEye />
          </button>
          <button
            className="flex-1 border-2 border-black rounded-lg"
            onClick={() => {
              handleCardSelect(work);
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button
            className="bg-red-600 p-2 rounded-full border-2 border-black"
            onClick={() => deleteWork(work._id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
