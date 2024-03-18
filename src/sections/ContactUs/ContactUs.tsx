import ContactForm from '../../components/ContactForm';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';
import { AddSharp } from '../../img/icons/Icons';
import { MindText, MindWrapper } from './ContactUs.styled';

function Mint() {
  return (
    <Section id="mint">
      <ContentContainer>
        <Title>Are you in?</Title>
        <MindWrapper>
          <AddSharp />
          <MindText>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </MindText>
          <ContactForm />
        </MindWrapper>
      </ContentContainer>
    </Section>
  );
}

export default Mint;
