import FormImageUpload from "./FormImageUpload";
import FormInput from "./formInput";
import FormDescription from "./FormDescription";
import FormButton from "./FormButton";
import { useEffect, useState } from "react";
import { useData } from "./DataContext";

const Form = () => {
  const { addToWorksList, selectedCard, updateCard, isEditing, setIsEditing } =
    useData();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  console.log(isEditing);

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  useEffect(() => {
    if (isEditing) {
      setLink(selectedCard.link);
      setDescription(selectedCard.description);
      setTitle(selectedCard.title);
    }
  }, [isEditing]);

  return (
    <div
      encType="multipart/form-data"
      className="w-[450px] h-screen p-10 flex flex-col justify-center top-0 bg-black rounded-tr-3xl rounded-br-3xl shadow-[0_0_30px_15px_rgba(0,0,0,0.7)] sticky"
    >
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          if (!isEditing) {
            addToWorksList(e, image, title, link, description);
            setTitle("");
            setLink("");
            setDescription("");
            setImage(null);
          } else {
            updateCard(e, selectedCard._id, title, link, description);
            setTitle("");
            setLink("");
            setDescription("");
            setIsEditing(false);
          }
        }}
      >
        <FormImageUpload
          type="file"
          label="Image:"
          name="image"
          accept="image/*"
          onChange={handleImage}
        />
        <FormInput
          label="Title:"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FormInput
          label="Link:"
          type="text"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <FormDescription
          label="Description:"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <FormButton label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
