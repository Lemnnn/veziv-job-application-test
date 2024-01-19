const FormInput = ({ label, type, value, onChange }) => {
  return (
    <label className="flex flex-col gap-1 text-white font-bold text-xl">
      {label}
      <input
        className="w-full bg-white text-black px-1 py-[2px] rounded-lg h-[40px] text-lg"
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default FormInput;
