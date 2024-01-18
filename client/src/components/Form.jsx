import FormImageUpload from "./FormImageUpload";
import FormInput from "./formInput";
import FormDescription from "./FormDescription";
import FormButton from "./FormButton";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  console.log("Adding work with:", title, link, description);

  const addToWorksList = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/create", {
      title: title,
      link: link,
      description: description,
    });
    setTitle("");
    setLink("");
    setDescription("");
  };

  return (
    <div className="w-[450px] h-screen p-10 flex flex-col justify-center top-0 bg-black rounded-tr-3xl rounded-br-3xl shadow-[0_0_30px_15px_rgba(0,0,0,0.7)] sticky">
      <form className="flex flex-col gap-2" onSubmit={addToWorksList}>
        <FormImageUpload label="Image:" />
        <FormInput
          label="Title:"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FormInput
          label="Link:"
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
