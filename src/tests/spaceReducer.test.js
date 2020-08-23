import reducer from "../redux/spaceReducer";
import * as types from "../redux/actionTypesConstant";

//testing reducer without mocking the API data
describe("space reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      error: "",
    });
  });

  it("should handle FETCH_CAPSULES_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.FETCH_CAPSULES_SUCCESS,
      })
    ).toEqual({
      loading: false,
      data: undefined,
      error: "",
    });
  });
  it("should handle FETCH_CAPSULES_FAILURE", () => {
    expect(
      reducer([], {
        type: types.FETCH_CAPSULES_FAILURE,
      })
    ).toEqual({
      loading: false,
      data: [],
      error: undefined,
    });
  });
  it("should handle FETCH_LANDING_PAD_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.FETCH_LANDING_PAD_SUCCESS,
      })
    ).toEqual({
      loading: false,
      data: undefined,
      error: "",
    });
  });
  it("should handle FETCH_LANDING_PAD_FAILURE", () => {
    expect(
      reducer([], {
        type: types.FETCH_LANDING_PAD_FAILURE,
      })
    ).toEqual({
      loading: false,
      data: [],
      error: undefined,
    });
  });
});
