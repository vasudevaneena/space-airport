import React from "react";
import DisplayConsole from "./display/DisplayConsole";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => {
  return (
    <Provider store={store}>
      <DisplayConsole />
    </Provider>
  );
};

export default App;
