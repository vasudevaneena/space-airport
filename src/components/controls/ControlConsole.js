import React from "react";

import "./ControlConsole.scss";
import Rocket from "../../assets/rocket.PNG";

const ControlConsole = ({
  onCapuslesClick,
  onLandingClick,
  valid,
  inputChange,
  inputError,
}) => {
  return (
    <>
     
        <div className="control-console">
          <div className="row margin-row">
            <div className="col-md-3 center-align">
              <button id="test-button-cap" onClick={onCapuslesClick}>Capsules</button>
            </div>
            <div className="col-md-3 img-border center-align">
              <img src={Rocket} alt="Rocket" />
            </div>
            <div className="col-md-6 center-align">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      name="lpad"
                      maxLength="15"
                      onChange={inputChange}
                      id="test-input"
                    ></input>
                  </div>
                  {!valid ? (
                    <div className="error">
                      <span>{inputError}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-4">
                  {valid ? (
                    <button id="test-button-land" onClick={onLandingClick}>Landing Pad</button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};
export default ControlConsole;
