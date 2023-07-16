import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.detail) })
    return(
        <div className="p-20">
            <h4>Edit Page</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="_id" defaultValue={result._id.toString()}/>
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}