type TodoItemProps = {
    id: string
    attachment: string
    weapon: string
    level: string
    complete: boolean
}

export function TodoItem({id, attachment, weapon, level, complete}: TodoItemProps) {
    return (

        <tr>
            <input id={id} type="checkbox" className={`cursor-pointer peer`}/>
            <td htmlFor={id} className={`peer-checked:line-through`}>{attachment}</td>
            <td htmlFor={id} className={`peer-checked:line-through`}>{weapon}</td>
            <td htmlFor={id} className={`peer-checked:line-through`}>{level}</td>

        </tr>
    )
}