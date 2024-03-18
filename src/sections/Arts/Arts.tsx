import CollectionSlider from '../../components/CollectionSlider/CollectionSlider';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';

function Arts() {
  return (
    <Section id="arts">
      <ContentContainer>
        <Title>COLLECTION</Title>
        <CollectionSlider />
      </ContentContainer>
    </Section>
  );
}

export default Arts;
