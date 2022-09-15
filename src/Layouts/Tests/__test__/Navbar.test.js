import renderer from 'react-test-renderer';
import Navbar from '../__mock__/Navbar';

it('renders navbar correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
