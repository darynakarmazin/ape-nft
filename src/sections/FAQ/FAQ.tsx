import { useState } from 'react';
import faqData from '../../data/faqData.json';
import {
  FaqAnsver,
  FaqButton,
  FaqList,
  FaqListItem,
  FaqQuestion,
  FaqQuestionWrapper,
  FaqSection,
  FaqTitle,
} from './FAQ.styled';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <FaqSection id="faq">
      <div className="content-container">
        <FaqTitle>FAQ</FaqTitle>
        <FaqList>
          {faqData.map((item, index) => (
            <FaqListItem key={index}>
              <FaqButton
                type="button"
                aria-label="Toggle answer"
                onClick={() => handleToggle(index)}
              >
                {item.queue}
              </FaqButton>
              <FaqQuestionWrapper>
                <FaqQuestion onClick={() => handleToggle(index)}>
                  {item.question}
                </FaqQuestion>
                {openIndex === index && <FaqAnsver>{item.answer}</FaqAnsver>}
              </FaqQuestionWrapper>
            </FaqListItem>
          ))}
        </FaqList>
      </div>
    </FaqSection>
  );
}

export default FAQ;
