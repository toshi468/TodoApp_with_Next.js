'use client';
import { useState } from "react";

type TodoInputProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoInput({setTodos}: TodoInputProps) {
    const [text, setText] = useState<string>("");
    const addTodo = async () => {
        if (!text) return;

        try {
            const res = await fetch("/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });
            if (res.ok) {
                const newTodo = await res.json();
                setTodos((prev: Todo[]) => [...prev, newTodo]);
                setText("");
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }

    }

    return (
    <div>
        <input
        type="text"
        value={text}
        placeholder="Todoを入力"
        onChange={(e) => {setText(e.target.value)}}
        className="border p-2 rounded mr-2" />
        <button
        onClick={addTodo}
        className="
        bg-blue-500 text-white p-2 rounded
        hover:bg-blue-300
        ">追加</button>
    </div>
    );
}