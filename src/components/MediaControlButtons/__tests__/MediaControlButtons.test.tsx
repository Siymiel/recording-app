import { render } from '../../../tests/test-utils'; 
import MediaControlButtons from '../MediaControlButtons';
import { ButtonLabels } from '../types';


describe('MediaControlButtons Component', () => {
  test('renders all media control buttons correctly', () => {
    render(<MediaControlButtons activeButton={ButtonLabels.Stop} onButtonClick={() => {}} />);
  });
});
