import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import DisplayConsole from "../display/DisplayConsole";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <DisplayConsole />
    </Provider>
  );
});

describe("Control console", () => {
  wrapper = mount(
    <Provider store={store}>
      <DisplayConsole />
    </Provider>
  );
  wrapper.update();
  it("capsule button click", () => {
    wrapper.find("#test-button-cap").simulate("click");
    expect(wrapper.find(".display-console")).toHaveLength(1);
  });
  it("Landing Pad button click", () => {
    wrapper.find("#test-button-land").simulate("click");
    console.log("hii", wrapper.debug());
    expect(wrapper.find(".display-console")).toHaveLength(1);
  });

  it("invalid characters in input", () => {
    wrapper = mount(
      <Provider store={store}>
        <DisplayConsole />
      </Provider>
    );

    wrapper.update();
    wrapper.find("#test-input").simulate("change", { target: { value: "&%" } });
    expect(wrapper.find(".error")).toHaveLength(1);
  });
});
