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

// describe("Container snapshot", () => {
//   test("matches snapshot", () => {
   
//     expect(wrapper).toMatchSnapshot();
//   });
// });

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

// describe("Control console", () => {
//   wrapper = mount(<Provider store={store}><Container /></Provider>);
//   wrapper.update();
//   it("capsule button click",  () => {
//     wrapper.find("#test-button-cap").simulate("click");   
//     expect(wrapper.find("JSONPretty")).toHaveLength(1);
//   });
//   it("Landing Pad button click",  () => {
//     wrapper.find("#test-button-land").simulate("click");   
//     expect(wrapper.find("JSONPretty")).toHaveLength(1);
//   });
  
//   it("invalid characters in input", () => {
//     wrapper = mount(<Provider store={store}><Container /></Provider>);
//    // wrapper.instance().forceUpdate();
//     wrapper.update();
//     wrapper
//       .find("#test-input")
//       .simulate("change", { target: { value: "&%" } });
    
//     //expect(wrapper.state("test-input")).toEqual("&%");
//     expect(wrapper.find(".error")).toHaveLength(1);
//   });
// });


