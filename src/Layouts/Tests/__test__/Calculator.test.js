import Calculator from "../../Components/Calculator";
import renderer from "react-test-renderer";

it("renders calculator correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
