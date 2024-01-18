import axios from "axios";
import { useEffect, useState } from "react";

const Works = () => {
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setWorkList(response.data);
    });
  }, [workList]);

  return (
    <div className="grid grid-cols-3 w-full pt-5 pr-7 gap-5 pb-5">
      {workList.toReversed().map((_work) => {
        return (
          <div
            className="p-2 border-4 border-black rounded-xl h-fit"
            key={_work._id}
          >
            <div className="flex flex-col p-3 gap-2">
              <div className="bg-black w-[300px] h-[200px] rounded-xl"></div>
              <h1 className="text-center font-extrabold text-2xl w-[300px] break-all">
                {_work.title}
              </h1>
              <a
                href={_work.link}
                target="_blank"
                rel="noreferrer"
                className="text-center italic text-blue-700 w-[300px] break-all"
              >
                {_work.link}
              </a>
              <p className="text-sm w-[300px] text-justify break-all">
                {_work.description}
              </p>

              <button>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
