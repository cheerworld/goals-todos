import checker from "./checker";
import alerter from "./alerter";
import logger from "./logger";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, checker, alerter, logger);
