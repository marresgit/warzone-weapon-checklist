import Link from "next/link";
import {prisma} from "@/db";
import {TodoItem} from "@/app/components/TodoItem";


export default async function Home() {
    const todos = await prisma.todo.findMany()

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
            <div className="flex my-4 justify-center">
                <div className={`bg-amber-700`}>tjena</div>
                <div className={`rounded-lg bg-white py-8 px-6`}>

                    <h1 className={`text-2xl font-bold mb-10 text-center`}>Muzzle</h1>

                    <table className={`table-auto text-slate-950`}>
                        <thead>
                        <tr>
                            <th className={`pr-16 pb-2`}></th>
                            <th className={`pr-16 pb-2`}>Attachement</th>
                            <th className={`pr-16 pb-2`}>Weapon</th>
                            <th className={`pr-16 pb-2`}>Level</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.map(todo => (

                            <TodoItem key={todo.id} {...todo} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
