import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function About() {
    return (
        <div className='bg-black'>
            <Nav />
            <section className='grid grid-cols-5 gap-10 justify-center px-10 py-10 content-center items-center'>
                <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25'></div>
                <div className="relative h-screen justify-center px-10 py-20 hover:scale-125">
                    {/* <div className='absolute px-4 w-1/2 left-0'> */}
                    <a href='https://github.com/codentell'>
                    <img src='/images/profileLogo.png'></img>
                    <ul className='text-pink-600 text-5xl text-center'>
                        Drew Hoang
                        <p className='text-sky-300 text-lg text-center py-10'>Project Manager</p>
                    </ul>
                    </a>

                </div>
                <div className="relative h-screen justify-center px-10 py-20 hover:scale-125">
                    <a href='https://github.com/wrightw404'>
                        <img src='/images/profileLogo.png'></img>
                        <ul className='text-pink-600 text-5xl text-center'>
                            William Wright
                            <p className='text-sky-300 text-lg text-center py-10'>Frontend Development</p>
                        </ul>
                    </a>
                </div>
                <div className="relative h-screen justify-center px-10 py-20 hover:scale-125">
                    <a href='https://github.com/BT616'>
                        <img src='/images/profileLogo.png'></img>
                        <ul className='text-pink-600 text-5xl text-center'>
                            Brandon Turner
                            <p className='text-sky-300 text-lg text-center py-10'>Frontend Development</p>
                        </ul>
                    </a>
                </div>
                <div className="relative h-screen justify-center px-10 py-20 hover:scale-125">
                    <a href='https://github.com/hale-bopp97'>
                        <img src='/images/profileLogo.png'></img>
                        <ul className='text-pink-600 text-5xl text-center'>
                            Matthew Hendricks
                            <p className='text-sky-300 text-lg text-center py-10'>Backend Development</p>
                        </ul>
                    </a>
                </div>
                <div className="relative h-screen justify-center px-10 py-20 hover:scale-125">
                    <a href='https://github.com/Grunt395'>
                        <img src='/images/profileLogo.png'></img>
                        <ul className='text-pink-600 text-5xl text-center'>
                            Grant Lewandowski
                            <p className='text-sky-300 text-lg text-center py-10'>Backend Development</p>
                        </ul>
                    </a>
                </div>
            </section>

            <Footer />

        </div>




    )
}