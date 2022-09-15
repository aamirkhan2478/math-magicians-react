import Navbar from "../__mock__/Navbar";
import renderer from "react-test-renderer";

it("renders navbar correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
