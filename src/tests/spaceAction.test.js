import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../redux/spaceAction";
import * as types from "../redux/actionTypesConstant";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_CAPSULES_SUCCESS when fetching capsules has been done",async () => {
    // fetchMock.getOnce('/spaceApi/getCapsules', {
    //   body: { capsule_serial: 'C101',capsule_id: 'dragon1' },
    //   headers: { 'content-type': 'application/json' }
    // })

    const expectedActions = [{ type: types.FETCH_CAPSULES_SUCCESS }];
    const store = mockStore({ capsules: [] });
    console.log("store", store);
    return await store.dispatch(
        actions.fetchCapsules("http://localhost:9000/spaceApi/getCapsules")
      )
      .then(() => {
        // return of async actions
        expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
        
      });
  });

  it("creates FETCH_LANDING_PAD_SUCCESS when fetching landingpads have been done", () => {
    const expectedActions = [{ type: types.FETCH_LANDING_PAD_SUCCESS }];
    const store = mockStore({ landingpads: [] });
   
    return store.dispatch(actions.fetchLandingPad("http://localhost:9000/spaceApi/getLandpads/LZ-4"))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      });
  });

 
});
