
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoInputProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

type TodoItemProps = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}