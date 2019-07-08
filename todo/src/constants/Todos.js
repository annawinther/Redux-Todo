import uuid from 'uuid';

const todos = [
  {
    id: uuid(),
    value: "Bake Cookies",
    completed: false,
  },
  {
    id: uuid(),
    value: "Walk the dog",
    completed: false,
  },
];

export default todos;