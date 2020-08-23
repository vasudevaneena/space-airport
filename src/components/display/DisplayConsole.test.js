import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure,  mount } from "enzyme";
import {Provider} from "react-redux";
import store from "../../store/store"
import DisplayConsole from "./DisplayConsole";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<Provider store={store}><DisplayConsole /></Provider>);
});

describe("component rendering", () => {
  it("should render one <DisplayConsole>", () => {
    expect(wrapper.find(".display-console")).toHaveLength(1);
  });
  it("should render one <ControlConsole>", () => {
    expect(wrapper.find("ControlConsole")).toHaveLength(1);
  });
  it("should render two <Buttons>", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });
  it("should render one <image>", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("should render one <input>", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

});



