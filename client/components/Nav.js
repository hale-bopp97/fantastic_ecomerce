import Link from 'next/link'

export default function Nav() {
    return (
        <nav className='bg-transparent p-2 sticky top-0 z-50'>
            <img className='object-scale-down h-24 w-12 object-left' src='/images/logo.png'></img>
            <ul className='flex flex-wrap items-center justify-end text-xl'>
                <li className='px-1 text-sky-400 hover:text-pink-600'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600'>
                    <Link href='/products'>Products</Link>

                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600'>
                    <Link href='/login'>Login</Link>
                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600'>
                    <Link href='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    )
}