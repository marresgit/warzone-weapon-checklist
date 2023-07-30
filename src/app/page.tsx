import Link from "next/link";
import {prisma} from "@/db";
import {TodoItem} from "@/app/components/TodoItem";

function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
    "use server"
    console.log(id)
    await prisma.todo.update({where: { id }, data: { complete }})
}

async function handleDelete(id: string) {
    "use server"
    console.log(id)
    await prisma.todo.delete({where: {id}})
}

export default async function Home() {
    const todos = await getTodos()

    return (
        <>
            <header className={`flex justify-between items-center mb-4`}>
                <h1 className={`text-2xl text-slate-200`}>Todos</h1>
                <Link
                    className={`border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-green-700 focus-within:bg-slate-400 outline-none`}
                    href={"/new"}>
                    New
                </Link>
            </header>

            <div className="flex my-10">
                <div className={`rounded-lg bg-white py-8 px-6 w-full`}>

                    <h1 className={`text-2xl font-bold mb-10`}>Muzzle</h1>

                    <table className={`table-auto text-slate-950 bg-white w-full`}>
                        <thead>
                        <tr>
                            <th className={`pr-16 pb-2 text-left`}></th>
                            <th className={`pr-16 pb-2 text-left`}>Attachement</th>
                            <th className={`pr-16 pb-2 text-left`}>Weapon</th>
                            <th className={`pr-16 pb-2 text-left`}>Level</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.map(todo => (

                            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} handleDelete={handleDelete} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
