import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.detail) })
    return(
        <div>
            <h4>Detail Page</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}