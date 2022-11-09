import Nav from '../components/Nav'

export default function Login() {
    return (

        <div className='relative h-screen bg-black'>
            <Nav />
            <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25'></div>
            <div className='relative grid justify-center px-10 py-10 content-center items-center grid-rows-2 gap-5'>
                <section>
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