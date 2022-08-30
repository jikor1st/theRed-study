import { createStore } from "./redux.js";

// action type
const COUNTER = "count";

const middleware1 = (store) => (dispatch) => (action) => {
  if (action.type === "fetch") {
    setTimeout(() => {
      dispatch({
        type: "fetch-response",
        payload: [1, 2, 3],
      });
    }, 2000);
  } else {
    dispatch(action);
  }
};

function reducer(state, action) {
  if (action.type === COUNTER) {
    return { ...state, counter: action.payload.counter };
  }

  if (action.type === "fetch-response") {
    return { ...state, response: action.payload };
  }

  return state;
}

function listener() {
  console.log(store.getState());
}

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

const store = createStore(reducer, [middleware1]);

store.subscribe(listener);

// connect
function counter(data) {
  store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 1 });

store.dispatch(actionCreator("fetch"));
