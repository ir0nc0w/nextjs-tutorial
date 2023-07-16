'use client'

import { useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()

    return (
        <button onClick={()=>{ router.prefetch('/list/123') }}>Button</button>
    )
}