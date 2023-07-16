import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, resp) {
    let session = await getServerSession(req, resp, authOptions)
    if (session) {
        req.body.author = session.user.email
    } else {
        return resp.status(500).redirect(302, '/list')
    }
    
    if (req.method == 'POST') {
        let edit = { title: req.body.title, content : req.body.content, author : req.body.author }
        if (req.body.title == '') {
            return resp.status(500).json('no Title')
        } else if (req.body.content == '') {
            return resp.status(500).json('no Content')
        }

        const db = (await connectDB).db("forum")
        await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)},
            {$set : edit})
        return resp.status(200).redirect(302, '/list')
    }
}