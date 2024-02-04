import {createStore} from "redux";

const counterReducer = (state, action) => {
    if(action.type === "on") {
        state = "on";
    } else {
        state = "off";
    }
    return state;
  };

export default createStore(counterReducer);
