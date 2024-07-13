const TriggerModal = ({ props }) => {
  const { triggerModal } = props;
  return (
    <button
      className="visibility-hidden"
      data-toggle="modal"
      data-target="#notificationModal"
      ref={triggerModal}
    ></button>
  );
};

export default TriggerModal;
