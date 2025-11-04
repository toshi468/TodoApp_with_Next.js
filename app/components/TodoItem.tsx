"use client";
export default function TodoItem({todo, setTodos}: TodoItemProps) {

  const handleToggle = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        {return t.id === todo.id ? { ...t, completed: !t.completed } : t;}
      )
    );
  };

  return (
    <li onClick={handleToggle} className="cursor-pointer text-center hover:bg-gray-100 p-2 text-2xl"
    key={todo.id}>
        {todo.text} {todo.completed ? "✅" : ""}
    </li>
  );
}