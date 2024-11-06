import { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";

const FAQ = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Specify number[] type here

  const faqs = [
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
    {
      question: "Welcher Apple Pencil funktioniert mit diesem iPad?",
      answer1: "Das ultimative iPad Erlebnis mit der ",
      answer2: "Das ultimative iPad Erlebnis mit der ",
      answer3: "Das ultimative iPad Erlebnis mit der ",
    },
  ];

  const toggleAnswer = (index: number) => {
    // Specify index as number
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const toggleQuestions = () => {
    setIsQuestionsOpen(!isQuestionsOpen);
  };

  return (
    <div className="FAQ-firstContainer">
      <div className="FAQ">
        <div className="leftText">
          <h1
            onClick={toggleQuestions}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Fragen und Antworten
            <motion.svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transformOrigin: "center center",
              }}
              animate={{ rotate: isQuestionsOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <path
                d="M18.75 7.625L12 14.375L5.25 7.625"
                stroke="#86868A"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </h1>
          <hr />
        </div>
        {isQuestionsOpen && (
          <div className="FAQ-Container">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3
                  onClick={() => toggleAnswer(index)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {faq.question}
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      transformOrigin: "center center",
                    }}
                    animate={{
                      rotate: activeIndexes.includes(index) ? 180 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  >
                    <path
                      d="M18.75 7.625L12 14.375L5.25 7.625"
                      stroke="#86868A"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </h3>
                {activeIndexes.includes(index) && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0.3 }}
                    animate={{ maxHeight: 200, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0.3 }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{faq.answer1}</p>
                    <p>{faq.answer2}</p>
                    <p>{faq.answer3}</p>
                  </motion.div>
                )}
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
