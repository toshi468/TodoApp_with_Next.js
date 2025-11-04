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
    <li onClick={handleToggle} className="bg-white shadow-md rounded-lg p-4 mb-2 cursor-pointer text-center hover:bg-gray-100 text-2xl transition-shadow"
    key={todo.id}>
        {todo.text} {todo.completed ? "✅" : ""}
    </li>
  );
}