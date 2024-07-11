const CardHeading = ({ value = "Card Heading" }) => {
  return (
    <div className="card-header bg-white-smoke box-shadow-small">
      <h5 className="mb-0 roboto-medium text-lead text-dark">{value}</h5>
    </div>
  );
};

export default CardHeading;
