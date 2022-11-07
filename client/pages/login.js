import Nav from '../components/Nav'

export default function Login() {
    return (

        <div>
            <Nav />
            <div className='h-screen grid justify-center px-10 py-10 content-center items-center grid-cols-2 gap-10 '>
                <section>
                    <h1 className="text-3xl font-bold">
                        Login Page
                    </h1>
                    <form>
                        <label class="block">
                            <span className="block text-sm font-medium text-slate-700">Email</span>
                            <input className="border-red-600 border-2 " />
                        </label>

                        <label class="block">
                            <span className="block text-sm font-medium text-slate-700">Password</span>
                            <input type="password" className="border-red-600 border-2 " />

                        </label>
                        <button>login</button>
                    </form>
                </section>

                <section>
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <form>

                        <label class="block">
                            <span className="block text-sm font-medium text-slate-700">User Name</span>
                            <input className="border-red-600 border-2 " />
                        </label>
                        <label class="block">
                            <span className="block text-sm font-medium text-slate-700">Email</span>
                            <input className="border-red-600 border-2 " />
                        </label>

                        <label class="block">
                            <span className="block text-sm font-medium text-slate-700">Password</span>
                            <input type="password" className="border-red-600 border-2 " />

                        </label>
                        <button>Sign Up</button>
                    </form>
                </section>
            </div>
        </div>

    )
}