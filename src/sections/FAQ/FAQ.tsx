import { useState } from 'react';
import { faqData } from '../../data/faqData';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';
import {
  FaqAnsver,
  FaqButton,
  FaqImg,
  FaqList,
  FaqListItem,
  FaqQuestion,
  FaqQuestionWrapper,
} from './FAQ.styled';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <Section id="faq">
      <ContentContainer>
        <Title>FAQ</Title>
        <FaqList>
          {faqData.map((item, index) => (
            <FaqListItem
              key={index}
              $active={openIndex === index ? 'active' : 'not active'}
            >
              <FaqImg
                src={item.image}
                alt="Monkey view"
                $active={openIndex === index ? 'active' : 'not active'}
                loading="lazy"
              />
              <FaqButton
                type="button"
                aria-label="Toggle answer"
                onClick={() => handleToggle(index)}
                $active={openIndex === index ? 'active' : 'not active'}
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
      </ContentContainer>
    </Section>
  );
}

export default FAQ;
