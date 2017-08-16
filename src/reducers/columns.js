import v4 from "uuid/v4";
import {
  ADD_COLUMN,
  REMOVE_COLUMN,
  MOVE_COLUMN_LEFT,
  MOVE_COLUMN_RIGHT
} from "../actions";

export default function columnsReducer(
  state = {
    columnById: { "6c8e6939-1aa6-43a1-80bd-0ba3da623611": { index: 1 } },
    columnOrderArray: [
      "6c8e6939-1aa6-43a1-80bd-0ba3da623631",
      "6c8e6939-1aa6-43a1-80bd-0ba3da623611"
    ]
  },
  { type, payload }
) {
  switch (type) {
    case ADD_COLUMN:
      const newColumnId = v4();

      return {
        columnById: {
          ...state.columnById,
          [newColumnId]: {
            ...payload,
            createdAt: new Date()
          }
        },
        columnOrderArray: [...state.columnOrderArray, newColumnId]
      };

    case REMOVE_COLUMN:
      const id = payload.id;
      const { [id]: columnToRemove, ...rest } = state.columnById;

      return {
        columnById: rest,
        columnOrderArray: state.columnOrderArray.filter(id => id !== payload)
      };

    case MOVE_COLUMN_LEFT:
      const index = state.columnOrderArray.indexOf(payload);
      if (index - 1 >= 0) {
        return {
          columnById: state.columnById,
          columnOrderArray: [
            ...state.columnOrderArray.slice(0, index - 1),
            payload,
            state.columnOrderArray[index - 1],
            ...state.columnOrderArray.slice(index + 1)
          ]
        };
      }
      return {
        columnById: state.columnById,
        columnOrderArray: state.columnOrderArray
      };

    case MOVE_COLUMN_RIGHT:
      const indexRight = state.columnOrderArray.indexOf(payload);
      if (state.columnOrderArray.length > indexRight + 1) {
        return {
          columnById: state.columnById,
          columnOrderArray: [
            ...state.columnOrderArray.slice(0, indexRight),
            state.columnOrderArray[indexRight + 1],
            payload,
            ...state.columnOrderArray.slice(indexRight + 2)
          ]
        };
      }
      return {
        columnById: state.columnById,
        columnOrderArray: state.columnOrderArray
      };

    default:
      return state;
  }
}

const addKeyValueToObject = (obj, key, value) => ({ ...obj, [key]: value });

export function getColumnsArray(state) {
  return state.columnOrderArray.map(id =>
    addKeyValueToObject(state.columnById[id], "id", id)
  );
}

export function getColumnIdByIndex(index) {
  return Object.keys(this.state.columns).find(
    id => this.state.columnById[id].index === index
  );
}
