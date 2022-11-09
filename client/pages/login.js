import Nav from '../components/Nav'
import { Magic } from 'magic-sdk'
import { useUser } from '../lib/hooks'


export default function Login() {

    useUser({ redirectTo: "/", redirectIfFound: true})
    
    const handleSubmit = async (event) => {

        event.preventDefault()

        //const test = await new Magic('pk_live_AB43E76F9BEB7E71').auth.loginWithMagicLink({ email: event.target.email.value })
        try {
            const magic = new Magic('pk_live_AB43E76F9BEB7E71')
            const didToken = await magic.auth.loginWithMagicLink({
              email: event.target.email.value,
            })
            console.log(didToken);
            const res = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + didToken,
              },
              body: JSON.stringify({ email: event.target.email.value }),
            })
            console.log(res);
            if (res.status === 200) {
              Router.push('/profile')
            } else {
              throw new Error(await res.text())
            }
          } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            //setErrorMsg(error.message)
          }

        
    }
    
    return (

        <div className='relative h-screen bg-black'>
            <Nav />
            <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25'></div>
            <div className='relative grid justify-center px-10 py-10 content-center items-center grid-rows-2 gap-5'>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email'>
                            Email: 
                        </label>
                        <input name='email' type='email' /><button>Login</button>
                    </form>
                    <div className='relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur-3xl opacity-125'></div>
                        <h1 className="relative text-pink-700 text-3xl font-bold">
                            Login
                        </h1>
                        <form className='relative'>
                            <label className="block">
                                <span className="block text-sm font-medium text-pink-400">Email</span>
                                <input className="border-pink-600 border-2 " />
                            </label>

                            <label className="block">
                                <span className="block text-sm font-medium text-pink-400">Password</span>
                                <input type="password" className="border-pink-600 border-2" />

                            </label>
                            <button className="p-1 rounded-md bg-sky-100 hover:bg-sky-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-sky-300 text-pink-600">login</button>
                        </form>
                    </div>
                </section>

                <p className='text-pink-600'>OR</p>

                <section>
                    <div className='relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur-3xl opacity-125'></div>
                        <h1 className="relative text-3xl font-bold text-pink-700">Sign Up</h1>
                        <form className='relative'>

                            <label className="block">
                                <span className="relative block text-sm font-medium text-pink-400">User Name</span>
                                <input className="border-pink-600 border-2 " />
                            </label>
                            <label className="block">
                                <span className="block text-sm font-medium text-pink-400">Email</span>
                                <input className="border-pink-600 border-2 " />
                            </label>

                            <label className="block">
                                <span className="block text-sm font-medium text-pink-400">Password</span>
                                <input type="password" className="border-pink-600 border-2 " />

                            </label>
                            <button className="rounded-md p-1 bg-sky-100 hover:bg-sky-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-sky-300 text-pink-600">Sign Up</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>

    )
}