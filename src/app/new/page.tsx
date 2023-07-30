import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const attachment = data.get("attachment")?.valueOf()
    if (typeof attachment !== "string" || attachment.length === 0) {
        throw new Error("Invalid Attachment")
    }

    const weapon = data.get("weapon")?.valueOf()
    if (typeof weapon !== "string" || weapon.length === 0) {
        throw new Error("Invalid Weapon")
    }

    const level = data.get("level")?.valueOf()
    if (typeof level !== "string" || level.length === 0) {
        throw new Error("Invalid level")
    }

    await prisma.todo.create({data: { attachment, weapon, level, complete: false}})
    redirect("/")
    console.log("------------------------------##OBS-----------#SERVER-CODE-------------------------------------------")
}

export default function Page() {
    return (
        <>
            <header className={`flex justify-between items-center mb-4`}>
                <h1 className={`text-2xl text-slate-200`}>New</h1>
            </header>

            <div className="flex my-4 justify-center">
                <div className="rounded-lg bg-white py-8 px-6">
                    <form action={createTodo}>
                        <input
                            type="text"
                            name="attachment"
                            placeholder="Attachment"
                            className={`mt-2 text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500`}/>
                        <input
                            type="text"
                            name="weapon"
                            placeholder="Weapon"
                            className={`mt-2 text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500`}/>
                        <input
                            type="text"
                            name="level"
                            placeholder="Level"
                            className={`mt-2 text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500`}/>
                        <div className={`flex gap-1 justify-end`}>
                            <Link
                                href=".."
                                className={`mt-2 border border-slate-700 text-black px-2 py-1 rounded hover:bg-slate-100 focus-within:bg-slate-400 outline-none`}>Cancel</Link>
                            <button
                                type="submit"
                                className={`mt-2 border border-slate-700 text-black px-2 py-1 rounded hover:bg-slate-100 focus-within:bg-slate-400 outline-none`}>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}