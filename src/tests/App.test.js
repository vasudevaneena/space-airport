import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../store/store";
import Container from "../components/display/DisplayConsole";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Container />
    </Provider>
  );
});

describe("Container snapshot", () => {
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
