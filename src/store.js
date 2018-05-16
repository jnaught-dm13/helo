import { createStore } from "redux";
import reducer from "./component/ducks/reducer";

const store = createStore(reducer);

export default store;
