const FormImageUpload = ({ name, type, onChange, accept }) => {
  return (
    <input
      className="text-white"
      type={type}
      name={name}
      onChange={onChange}
      accept={accept}
    />
  );
};

export default FormImageUpload;
