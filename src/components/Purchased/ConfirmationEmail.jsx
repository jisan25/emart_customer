import { MdOutlineEmail } from "react-icons/md";

const ConfirmationEmail = () => {
  return (
    <div className="card p-3 mb-3">
      <div className="d-flex align-items-center gap-2">
        <MdOutlineEmail className="icon-lead" />

        <p className="mb-0">
          We've sent you a confirmation email to shihabunjisan@gmail.com with
          the details of your order.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationEmail;
