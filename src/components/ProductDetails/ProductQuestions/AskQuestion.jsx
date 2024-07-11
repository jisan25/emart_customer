const AskQuestion = () => {
  return (
    <div className="row">
      <div className="col-md-9 pr-0">
        <input
          type="text"
          className="form-control"
          placeholder="Ask question about this product"
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary roboto-regular text-lead text-white">
          ASK QUESTION
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
