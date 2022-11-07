import Link from 'next/link'

export default function Nav() {
    return (
        <nav className='bg-gray-200 p-2'>
            <ul className='flex flex-wrap items-center justify-end text-xl'>
                <li className='px-1  hover:text-sky-400'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-1'>
                    <Link href='/products'>Products</Link>

                </li>
                <li className='px-1'>
                    <Link href='/login'>Login</Link>
                </li>
                <li className='px-1'>
                    <Link href='/cart'>Cart</Link>
                </li>


            </ul>
        </nav>
    )
}