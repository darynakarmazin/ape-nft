import GridGallery from '../../components/GridGallery/GridGallery';
import MindSlider from '../../components/MindSlider/MindSlider';
import { MindMapSection, MindMapTitle } from './MindMap.styles';

function MindMap() {
  return (
    <MindMapSection id="m-map">
      <div className="content-container">
        <MindMapTitle>MindMap</MindMapTitle>
        <MindSlider />
        <GridGallery />
      </div>
    </MindMapSection>
  );
}

export default MindMap;
