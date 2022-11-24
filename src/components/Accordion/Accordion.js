import { useState } from "react";
import { faqs } from "./data";
import MyAccordion from "./MyAccordion";
import "./accordion.css";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
   <div className="container">
     <div className="accordion">
     <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <MyAccordion
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </div>
   </div>
  );
};

export default Accordion;