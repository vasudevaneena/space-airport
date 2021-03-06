import {
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_FAILURE,
  FETCH_LANDING_PAD_SUCCESS,
  FETCH_LANDING_PAD_FAILURE,
} from "./actionTypesConstant";
import Moment from "moment";
import unsplash from "../service/unsplash";


export const fetchCapsulesSuccess = (response) => {
  return {
    type: FETCH_CAPSULES_SUCCESS,
    payload: response,
  };
};
export const fetchLandingPadFailure = (errors) => {
  return {
    type: FETCH_LANDING_PAD_FAILURE,
    payload: errors,
  };
};
export const fetchLandingPadSuccess = (response) => {
  return {
    type: FETCH_LANDING_PAD_SUCCESS,
    payload: response,
  };
};
export const fetchCapsulesFailure = (errors) => {
  return {
    type: FETCH_CAPSULES_FAILURE,
    payload: errors,
  };
};

export const fetchCapsules = (url) => {
  return (dispach) => {
    return unsplash
      .getApiData(url)
      .then((response) => {
        dispach(
          fetchCapsulesSuccess(
            response.sort(
              (a, b) =>
                new Moment(a.original_launch) - new Moment(b.original_launch)
            )
          )
        );
      })
      .catch((err) => {
        dispach(fetchCapsulesFailure(err.message));
      });
  };
};

export const fetchLandingPad = (url) => {
  let res;
  return (dispach) => {
    unsplash
      .getApiData(url)
      .then((response) => {
        res = {
          id: response.id,
          full_name: response.full_name,
          status: response.status,
          location: response.location,
        };
        dispach(fetchLandingPadSuccess(res));
      })
      .catch((err) => {
        dispach(fetchLandingPadFailure(err.message));
      });
  };
};
