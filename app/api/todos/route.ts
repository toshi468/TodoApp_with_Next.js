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
    const { text } = await req.json();
    const newTodo = {
        id: todos.length + 1,
        text,
        completed: false,
    };
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
}
