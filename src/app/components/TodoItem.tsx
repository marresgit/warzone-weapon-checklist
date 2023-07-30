"use client"

import {prisma} from "@/db";

type TodoItemProps = {
    id: string
    attachment: string
    weapon: string
    level: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    handleDelete: (id: string) => void
}

export function TodoItem({id, attachment, weapon, level, toggleTodo, handleDelete, complete}: TodoItemProps) {


    return (
        <tr>
            <td>
                <label>
                    <input
                        id={id}
                        type="checkbox"
                        className={`cursor-pointer peer`}
                        defaultChecked={complete}
                        onChange={e => toggleTodo(id, e.target.checked)}
                    />
                </label>
            </td>
            <td
                htmlFor={id}
                className={`peer-checked:line-through peer-checked:text-slate-300`}>
                {attachment}
            </td>
            <td
                htmlFor={id}
                className={`peer-checked:line-through`}>
                {weapon}
            </td>
            <td htmlFor={id}
                className={`peer-checked:line-through`}>
                {level}
            </td>
            <td>
                <button
                    onClick={e => handleDelete(id)}
                    className={`bg-transparent bg-red-300 text-red-800 font-semibold py-1 px-4 border border-red-400 hover:bg-red-200 rounded`}>Delete
                </button>
            </td>
        </tr>
    )
}