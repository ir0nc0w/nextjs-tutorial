import { connectDB } from "@/util/database"
import ListItem from "./showPage"

export const dynamic = 'force-dynamic'

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    // result : object types in an array

    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}