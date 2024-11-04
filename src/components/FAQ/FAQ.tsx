// src/Faq.js
import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You will receive a tracking number via email once your order has shipped.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries worldwide.",
    },
  ];

  const toggleAnswer = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
              style={{ marginLeft: "10px" }}
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M18.75 7.625L12 14.375L5.25 7.625"
                stroke="#86868A"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </h3>
          {activeIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
