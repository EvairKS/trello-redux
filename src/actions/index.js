export const ADD_COLUMN = "ADD_COLUMN ";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const MOVE_COLUMN_LEFT = "MOVE_COLUMN_LEFT";
export const MOVE_COLUMN_RIGHT = "MOVE_COLUMN_RIGHT";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const MOVE_TASK_UP = "MOVE_TASK_UP";
export const MOVE_TASK_DOWN = "MOVE_TASK_DOWN";

export function addColumn(name) {
  return { type: ADD_COLUMN, payload: { name } };
}

export function removeColumn(id) {
  return { type: REMOVE_COLUMN, payload: { id } };
}

export function moveColumnLeft(id) {
  return { type: MOVE_COLUMN_LEFT, payload: id };
}

export function moveColumnRight(id) {
  return { type: MOVE_COLUMN_RIGHT, payload: id };
}

export function addTask(name) {
  return { type: ADD_TASK, payload: { name } };
}

export function removeTask(taskId) {
  return { type: REMOVE_TASK, payload: taskId };
}

export function moveTaskUp(taskId) {
  return { type: MOVE_TASK_UP, payload: taskId };
}

export function moveTaskDown(taskId) {
  return { type: MOVE_TASK_DOWN, payload: taskId };
}
