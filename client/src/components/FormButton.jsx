const FormButton = ({ label, type, onClick }) => {
  return (
    <button
      className="w-full bg-white text-black rounded-lg p-2 border-none font-bold text-xl"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FormButton;
