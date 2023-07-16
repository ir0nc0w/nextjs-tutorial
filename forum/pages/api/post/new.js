import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, resp) {
    let session = await getServerSession(req, resp, authOptions)
    console.log(session)
    if (session) {
        req.body.author = session.user.email
    }

    if (req.method == 'POST') {

        console.log(req.body)
        if (req.body.title == '') {
            return resp.status(500).json('no Title')
        } else if (req.body.content == '') {
            return resp.status(500).json('no Content')
        }

        const db = (await connectDB).db("forum")
        let result = await db.collection('post').insertOne(req.body)
        return resp.status(200).redirect(302, '/list')
    }
}