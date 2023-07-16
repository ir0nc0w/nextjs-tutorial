import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler (req, resp) {
    if (req.method == 'POST') {
        if (!req.body.name) {
            resp.status(500).json('UserID is blank')
        } else if (!req.body.email) {
            resp.status(500).json('E-mail is blank')
        } else if (!req.body.password) {
            resp.status(500).json('Password is blank')
        } 

        let hash = await bcrypt.hash(req.body.password, 10)
        console.log(hash)
        console.log(req.body)
        req.body.password = hash

        let db = (await connectDB).db('forum')
        let result = await db.collection('user_cred').findOne({name: req.body.name})
        console.log(result)
        if (result)
            resp.status(500).json('Register Failed')
        else {
            await db.collection('user_cred').insertOne(req.body)
            resp.status(200).json('Register Complete')
        }

    }
}