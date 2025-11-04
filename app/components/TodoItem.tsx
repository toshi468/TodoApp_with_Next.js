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
    <li onClick={handleToggle} className={`
    bg-white shadow-md rounded-lg p-4 mb-2 cursor-pointer
    text-center  text-2xl
    hover:bg-gray-100 hover:animate-pulse
    transition-all duration-500
    ease-in-out ${todo.completed ? "translate-x" : "translate-x-0"}`}
    key={todo.id}>
        {todo.text} {todo.completed ? "✅" : ""}
    </li>
  );
}