const ModalSubmitButton = ({ value = "Submit" }) => {
  return (
    <button type="submit" className="btn btn-primary text-white">
      {value}
    </button>
  );
};

export default ModalSubmitButton;
