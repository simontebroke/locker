import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css";

const FAQ = ({ faqItems }: any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion custom-accordion">
      {faqItems.map((item: any, index: any) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span
                className={`arrow-icon ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                ▼
              </span>
            </button>
          </h2>
          {activeIndex === index && (
            <div className="accordion-collapse show">
              <div className="accordion-body">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
