import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";

import "./DisplayConsole.scss";
import ControlConsole from "../controls/ControlConsole";
import { fetchCapsules, fetchLandingPad } from "../../redux/spaceAction";

const Container = () => {
  let { apiData } = useSelector((state) => ({
    apiData: state.data,
  }));
  const [errorMessage, setErrorMessage] = useState();
  const [valid, setValid] = useState(true);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const capsulesCall = () => {
    dispatch(fetchCapsules("/spaceApi/getCapsules"));
  };

  const validateInput = (e) => {
    const value = e.target.value;
    const validInput = /[#$%&]/.test(value);
    if (validInput) {
      setErrorMessage("# $ % & are not valid");
      setValid(false);
    } else {
      setValid(true);
      setInput(value);
    }
  };

  const filterLandingPad = () => {
    if (input) {
      dispatch(fetchLandingPad("/spaceApi/getLandpads/" + input.toUpperCase()));
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mobile-view">
          {apiData.data.length===0 ? (
           <div className="col-md-12 display-console">
          
         </div>
          ) : (
            <div className="col-md-12 display-console">
              <JSONPretty id="json-pretty" data={apiData.data}></JSONPretty>
            </div>
          )}
          <ControlConsole
            onCapuslesClick={capsulesCall}
            onLandingClick={filterLandingPad}
            valid={valid}
            inputChange={validateInput}
            inputError={errorMessage}
          />
        </div>
      </div>
    </>
  );
};
export default Container;
