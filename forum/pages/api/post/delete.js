import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, resp) {
    let session = await getServerSession(req, resp, authOptions)
    let role = session.user.role
    let author = session.user.author
    let post = null
    let comp = -1
    console.log(session)
    if (session) {
        author = session.user.email
    }
    if (req.method == 'DELETE') {
        let result = JSON.parse(req.body)
        const db = (await connectDB).db("forum")

        if (author) {
            post = await db.collection('post').findOne({_id: new ObjectId(result._id)})
            if (post) {
                comp = post.author.localeCompare(author)
            }
        }

        if (!comp || role == 'admin') {
            result = await db.collection('post').deleteOne({_id: new ObjectId(result._id)})
            resp.status(200).json('Delete Done')
        }        

    }
}