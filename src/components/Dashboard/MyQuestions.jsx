import React from "react";
import SectionTitle from "./SectionTitle";
import MyQuestionItem from "./MyQuestionItem";

const MyQuestions = ({ questions }) => {
  return (
    <>
      <div className="card p-3">
        <div className="d-flex align-items-center justify-content-between mb-0">
          <SectionTitle value="My Questions" />
        </div>
      </div>
      {questions && questions.map((item) => <MyQuestionItem item={item} />)}
    </>
  );
};

export default MyQuestions;
