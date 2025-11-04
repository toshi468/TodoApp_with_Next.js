'use client';
import { useState } from "react";

export default function TodoInput({todos, setTodos}: TodoInputProps) {
    const [text, setText] = useState<string>("");
    const addTodo = async () => {
        if (!text) return;
            //Todo:もしtextがないときの処理をする
        
        const nextId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
        const newTodo = {
            id: nextId,
            text,
            completed: false,
        };
        try {
            const res = await fetch("/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });
            if (res.ok) {
                const newTodo = await res.json();
                setTodos((prev) => [...prev, newTodo]);
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