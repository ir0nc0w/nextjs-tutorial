import { connectDB } from '@/util/database'

export const revalidate = 60;

export default async function Home() {

  // await fetch('/URL', {cache : 'force-cache'})

  return (
    <div>
      Hello
    </div>
  )
}
