import v4 from "uuid/v4";
import {
  ADD_TASK,
  REMOVE_TASK,
  MOVE_TASK_UP,
  MOVE_TASK_DOWN
} from "../actions";
import columns from "./columns";
let taskIndex = 0;
export default function tasksReducer(
  state = {
    taskById: {
      "da86102b-fe4d-481f-b442-7f3cf03c3f85": {
        name: "Task number -1",
        taskCreatedAt: new Date()
      }
    },
    taskOrderArray: [
      "da86102b-fe4d-481f-b442-7f3cf03c3f85",
      "da86102b-fe4d-481f-b442-7f3cf03c3f95"
    ]
  },
  { type, payload }
) {
  switch (type) {
    case ADD_TASK:
      const newTaskId = v4();

      return {
        taskById: {
          ...state.taskById,
          [newTaskId]: { ...payload, createdAt: new Date() }
        },
        taskOrderArray: [...state.taskOrderArray, newTaskId]
      };

    case REMOVE_TASK:
      const taskId = payload.taskId;
      const { [taskId]: taskToRemove, ...other } = state.taskById;
      return {
        taskById: other,
        taskOrderArray: state.taskOrderArray.filter(
          taskId => taskId !== payload.taskId
        )
      };

    case MOVE_TASK_UP:
      const index = state.taskOrderArray.indexOf(payload);

      if (index - 1 >= 0) {
        return {
          taskById: state.taskById,
          taskOrderArray: [
            ...state.taskOrderArray.slice(0, index - 1),
            payload,
            state.taskOrderArray[index - 1],
            ...state.taskOrderArray.slice(index + 1)
          ]
        };
      }
      return {
        taskById: state.taskById,
        taskOrderArray: state.taskOrderArray
      };

    case MOVE_TASK_DOWN:
      const indexDown = state.taskOrderArray.indexOf(payload);
      if (state.taskOrderArray.length > indexDown + 1) {
        return {
          taskById: state.taskById,
          taskOrderArray: [
            ...state.taskOrderArray.slice(0, indexDown),
            state.taskOrderArray[indexDown + 1],
            payload,
            ...state.taskOrderArray.slice(indexDown + 2)
          ]
        };
      }
      return {
        taskById: state.taskById,
        taskOrderArray: state.taskOrderArray
      };

    default:
      return state;
  }
}
