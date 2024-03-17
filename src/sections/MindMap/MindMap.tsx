import GridGallery from '../../components/GridGallery/GridGallery';
import MindSlider from '../../components/MindSlider/MindSlider';
import { Section } from '../../components/Section/Section.styled';
import { Title } from '../../components/Title/Title.styled';

function MindMap() {
  return (
    <Section id="m-map">
      <div className="content-container">
        <Title>MindMap</Title>
        <MindSlider />
        <GridGallery />
      </div>
    </Section>
  );
}

export default MindMap;
