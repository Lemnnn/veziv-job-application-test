import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [workList, setWorkList] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  async function getData() {
    await axios.get("http://localhost:3001/read").then((response) => {
      setWorkList(response.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const addToWorksList = async (e, image, title, link, description) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("description", description);

    await axios.post("http://localhost:3001/create", formData);
    getData();
  };

  const deleteWork = async (id) => {
    await axios.delete(`http://localhost:3001/delete/${id}`);
    getData();
  };

  const toggleHidden = async (id, body) => {
    await axios.patch(`http://localhost:3001/toggleHidden/${id}`, {
      hidden: body,
    });
    getData();
  };

  const handleCardSelect = (work) => {
    setSelectedCard(work);
  };

  const updateCard = async (e, id, title, link, description) => {
    e.preventDefault();

    const updatedData = {
      title,
      link,
      description,
    };

    console.log(id, updatedData);

    await axios.patch(`http://localhost:3001/update/${id}`, updatedData);
    getData();
  };

  return (
    <DataContext.Provider
      value={{
        workList,
        addToWorksList,
        deleteWork,
        toggleHidden,
        handleCardSelect,
        selectedCard,
        updateCard,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
