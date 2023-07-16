import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { getSession, useSession } from "next-auth/react"

export default async function Write() {
    let session = await getServerSession(authOptions)
    console.log(session)
    if (session == null) {
        return (
        <div> <h3>Please Login...</h3> </div>
        )
    } else {
        return (
        <div className="p-20">
            <h4>Fill Content</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="Title"/>
                <input name="content" placeholder="Content"/>
                <button type="submit">Button</button>
            </form>
        </div>
        )
    }
}