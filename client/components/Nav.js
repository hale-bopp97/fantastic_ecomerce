import Link from 'next/link'
import { UserContext } from '../lib/UserContext';
import { useContext } from 'react';
import Router from 'next/router'

export default function Nav() {
    const [user] = useContext(UserContext);
    console.log(user);


    function deleteCookies() {
        var allCookies = document.cookie.split(';');
        
        // The "expire" attribute of every cookie is 
        // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
        for (var i = 0; i < allCookies.length; i++)
            document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();

        //displayCookies.innerHTML = document.cookie;

    }
    const logout = async (event) => {

        //event.preventDefault()

        //const test = await new Magic('pk_live_AB43E76F9BEB7E71').auth.loginWithMagicLink({ email: event.target.email.value })
        try {
            const res = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            })
            console.log(res);
            if (res.status === 200) {
                deleteCookies();
                Router.push('/')
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            //setErrorMsg(error.message)
        }


    }




    return (
        <nav className='bg-transparent p-2 sticky top-0 z-50'>
            <img className='object-scale-down h-24 w-12 object-left' src='/images/logo.png'></img>
            <ul className='flex flex-wrap items-center justify-end text-xl'>
                <li className='px-1 text-sky-400 hover:text-pink-600 hover:scale-75'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600 hover:scale-75'>
                    <Link href='/about'>About</Link>

                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600 hover:scale-75'>
                    <Link href='/products'>Products</Link>

                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600 hover:scale-75'>
                    { user.email ? <button onClick={logout}>Logout</button> : <Link href='/login'>Login</Link>}
                </li>
                <li className='px-1 text-sky-400 hover:text-pink-600 hover:scale-75'>
                    <Link href='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    )
}