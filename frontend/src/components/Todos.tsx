interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface TodoProps {
    todos: Todo[];
}

export function Todos({todos}:TodoProps){
    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm">
                    {todo.completed==true?"Completed":"Mark as done"}
                </button>
            </div>
        })}
    </div>
}