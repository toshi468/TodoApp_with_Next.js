"use client";
import { useState, useEffect } from "react";
import TodoInput from "../app/components/TodoInput";
import TodoList from "../app/components/TodoList";

export default function MainPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/todos");
        if (!res.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <h2 className="flex justify-center mt-20 text-6xl">Todoリスト</h2>
      <div className="flex-1 mt-10">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div className="flex justify-center mb-30 mt-10">
        <TodoInput setTodos={setTodos} />
      </div>
    </div>
  );
}
