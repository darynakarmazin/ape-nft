import GridGallery from '../GridGallery/GridGallery';
import { MindMapSection, MindMapTitle } from './MindMap.styles';

function MindMap() {
  return (
    <MindMapSection id="m-map">
      <div className="content-container">
        <MindMapTitle>MindMap</MindMapTitle>
        <GridGallery />
      </div>
    </MindMapSection>
  );
}

export default MindMap;
