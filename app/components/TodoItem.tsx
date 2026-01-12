'use client';

import { Todo } from '../page';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`flex items-center gap-3 p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100 hover:translate-x-1 ${
        todo.completed ? 'opacity-60' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 cursor-pointer accent-purple-600"
      />
      <div className="flex-1">
        <div
          className={`text-base ${
            todo.completed
              ? 'line-through text-gray-500'
              : 'text-gray-800'
          }`}
        >
          {todo.text}
        </div>
        {todo.assignee && (
          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
              todo.completed
                ? 'bg-gray-400 text-white'
                : 'bg-purple-600 text-white'
            }`}
          >
            担当: {todo.assignee}
          </span>
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
      >
        削除
      </button>
    </li>
  );
}
