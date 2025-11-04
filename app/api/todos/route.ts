import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

let todos: Todo[] = [
];

// GET /api/todos
export async function GET() {
    return NextResponse.json(todos);
}

// POST /api/todos
export async function POST(req: NextRequest) {
    const { id, text, completed } = await req.json();
    const newTodo = {
        id: id + 1,
        text: text,
        completed: completed,
    };
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
}
