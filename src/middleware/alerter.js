import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

const alerter = (store) => (next) => (action) => {
  if (action.type === ADD_GOAL) {
    alert("That's a great goal!");
  }
  if (action.type === ADD_TODO) {
    alert(`Don't forget to ${action.todo.name}!`);
  }

  return next(action);
};

export default alerter;
