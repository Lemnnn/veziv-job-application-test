const FormDescription = ({ label, value, onChange }) => {
  return (
    <label className="flex flex-col text-white font-bold text-xl">
      {label}
      <textarea
        className="bg-white resize-none h-[150px] rounded-lg text-black p-1 text-lg"
        value={value}
        onChange={onChange}
        maxLength="500"
      ></textarea>
    </label>
  );
};

export default FormDescription;
