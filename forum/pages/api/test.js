import { connectDB } from "@/util/database"

export default async function handler(req, resp) {
    console.log(req.query)

    if (req.method == 'POST') {
        console.log('POST')
        let date = Date()
        return resp.status(200).json(date)
    } else if (req.method == 'GET') {
        console.log('GET')

        const db = (await connectDB).db("forum")
        let result = await db.collection('post').find().toArray()

        return resp.status(200).json(result)
    }

    return resp.status(200).json('Done')
}