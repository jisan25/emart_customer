const CustomerQuestion = ({ question }) => {
  return (
    <div className="d-flex gap-4">
      <span className="badge badge-primary h-2 px-2 pt-1 mt-2">Q</span>
      <div>
        <p className="mbc-1 text-dark text-lead-plus roboto-regular">
          {question.title}
        </p>
        <p className="d-flex align-items-center">
          <span className="text-dark text-lead roboto-regular">
            {question.customer && question.customer.full_name}
          </span>
          <span className="text-x-small">&nbsp;- 01 Apr 2024</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerQuestion;
