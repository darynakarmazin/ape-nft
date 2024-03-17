import CollectionSlider from '../../components/CollectionSlider/CollectionSlider';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';

function Arts() {
  return (
    <Section id="arts">
      <div className="content-container">
        <Title>COLLECTION</Title>
        <CollectionSlider />
      </div>
    </Section>
  );
}

export default Arts;
