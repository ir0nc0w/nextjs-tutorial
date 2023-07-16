import { connectDB } from "@/util/database"

export default async function handler(req, resp) {
    if (req.method == 'POST') {
        console.log(req.body)
        if (req.body.user == '') {
            return resp.status(500).json('no User ID')
        } else if (req.body.password == '') {
            return resp.status(500).json('no Password')
        }

        const db = (await connectDB).db("forum")
        
        let check = await db.collection('userInfo').findOne({user:req.body.user})
        if (check) {
            return resp.status(500).json('UserID already exists')
        }

        // let result = await db.collection('userInfo').insertOne(req.body)
        return resp.status(200).redirect(302, '/list')
    }
}