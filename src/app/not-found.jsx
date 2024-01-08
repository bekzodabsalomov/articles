import Link from "next/link"
import { headers } from 'next/headers'


async function notFound() {
    const headersList = headers()
    const domain = headersList.get('host')
  return (
    <div className='text-center items-center text-2xl mt-36 text-red-700 font-semibold'>
        <h1>Not Found: {domain}</h1>
        <p>Oshqovoq bunaqa sahifa yoq!!!</p>
    <div className="mt-10">
    <Link className="font-bold text-green-600  hover:text-orange-600 hover:underline " href="/">Go Home Oshqovoq</Link>

    </div>
    </div>
  )
}

export default notFound