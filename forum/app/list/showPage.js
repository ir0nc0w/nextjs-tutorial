'use client'

import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

export default function ListItem({result}) {
    return (
        result.map((a, i)=>
            <div>
                {
                <div className="list-item" key={i}>
                    <Link href={'list/' + result[i]._id.toString()}>
                        <h4>{result[i].title}</h4>
                    </Link>
                    <Link href={'edit/' + result[i]._id.toString()}>✍️</Link>
                    <span onClick={(e)=>{
                        fetch('/api/post/delete', {
                           method: 'DELETE',
                           body: JSON.stringify({
                               _id: result[i]._id.toString()
                           })
                        })
                        .then((r)=>{
                           if (r.status == 200) {
                               return r.json()
                           } else {
                               // 서버가 에러코드 전송시 실행할 코드
                           }
                        })
                        .then((result)=>{
                           // 성공시 실행할 코드
                           e.target.parentElement.style.opacity = 0
                           setTimeout(()=>{
                               e.target.parentElement.style.display = 'none'
                           }, 1000)
                        }).catch((error) => {
                           // 인터넷 문제로 실패시 실행할 코드
                           console.log(error)
                        });
                        // fetch('/api/test?name=myung&age=20')
                    }}>🗑️</span>
                    <p>{result[i].content}</p>
                </div>
                }
            </div>

        )
    )
}