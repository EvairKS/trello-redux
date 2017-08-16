import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addColumn,
  removeColumn,
  moveColumnLeft,
  moveColumnRight,
  addTask,
  removeTask,
  moveTaskUp,
  moveTaskDown
} from "../actions";
import { getColumnsArray } from "../reducers/columns";

let totalColumns = 0;
let totalTasks = 0;

const Home = ({
  tasks,
  columns,
  addColumn,
  removeColumn,
  moveColumnLeft,
  moveColumnRight,
  addTask,
  removeTask,
  moveTaskUp,
  moveTaskDown
}) =>
  <div>
    <h1>Home</h1>

    <pre>
      {JSON.stringify(columns, null, 2)}
    </pre>

    <pre>
      {JSON.stringify(tasks, null, 2)}
    </pre>

    <button onClick={event => addColumn("Column number " + totalColumns++)}>
      ADD COLUMN
    </button>

    <button
      onClick={event => removeColumn("6c8e6939-1aa6-43a1-80bd-0ba3da623611")}
    >
      REMOVE COLUMN 1
    </button>

    <button onClick={event => addTask("Task number " + totalTasks++)}>
      ADD TASK
    </button>

    <button
      onClick={event => removeTask("da86102b-fe4d-481f-b442-7f3cf03c3f85")}
    >
      REMOVE TASK 1
    </button>

    <button
      onClick={event => moveColumnLeft("6c8e6939-1aa6-43a1-80bd-0ba3da623611")}
    >
      MOVE COLUMN TO LEFT
    </button>

    <button
      onClick={event => moveColumnRight("6c8e6939-1aa6-43a1-80bd-0ba3da623611")}
    >
      MOVE COLUMN TO RIGHT
    </button>

    <button
      onClick={event => moveTaskUp("da86102b-fe4d-481f-b442-7f3cf03c3f95")}
    >
      MOVE TASK UP
    </button>

    <button
      onClick={event => moveTaskDown("da86102b-fe4d-481f-b442-7f3cf03c3f95")}
    >
      MOVE TASK DOWN
    </button>
  </div>;

export default connect(
  state => ({
    columns: state.columns,
    tasks: state.tasks
  }),
  {
    addColumn,
    removeColumn,
    moveColumnLeft,
    moveColumnRight,
    addTask,
    removeTask,
    moveTaskUp,
    moveTaskDown
  }
)(Home);
