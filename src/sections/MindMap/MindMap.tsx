import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import GridGallery from '../../components/GridGallery/GridGallery';
import MindSlider from '../../components/MindSlider/MindSlider';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';

function MindMap() {
  return (
    <Section id="m-map">
      <ContentContainer>
        <Title>Mind Map</Title>
        <MindSlider />
        <GridGallery />
      </ContentContainer>
    </Section>
  );
}

export default MindMap;
