import { useRef } from "react";

const MyAccordion = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer"><p>{answer}</p></div>
      </div>
    </li>
  );
};

export default MyAccordion;