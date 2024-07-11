const ModalClose = ({modalRef}) => {
  return (
    <button
      type="button"
      className="close"
      data-dismiss="modal"
      aria-label="Close"
      ref={modalRef}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

export default ModalClose;
