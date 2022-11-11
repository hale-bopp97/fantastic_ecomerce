import Link from 'next/link'


export default function Nav() {
   



    return (
        <nav className='bg-transparent p-2 sticky top-0 z-25'>
            <ul className='flex flex-wrap items-center justify-end text-xl'>
                <li className='px-1 text-sky-400 hover:text-pink-600'>
                    <a href='https://github.com/hale-bopp97/fantastic_ecomerce#readme'>Learn More</a>
                </li>
            </ul>
        </nav>
    )
}