"use client";
import TodoItem from "../components/TodoItem";

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <>
      <div className="flex justify-center items-start gap-32 h-full">
        {/* 未完了タスク */}
        <div className="flex flex-col h-[60vh]">
          <h2 className="text-4xl font-bold mb-4">未完了タスク</h2>
          <ul className="flex flex-col flex-1 overflow-y-auto">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
              ))}
          </ul>
        </div>
        {/* 仕切り線 */}
        <div className="w-px bg-gray-300 h-full"></div>
        {/* 完了タスク */}
        <div className="flex flex-col h-[60vh]">
          <h2 className="text-4xl font-bold mb-4">完了タスク✅</h2>
          <ul className="flex flex-col flex-1 overflow-y-auto">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
