import Nav from '../components/Nav'

export default function Cart() {
    return (
        <div className='bg-black'>
        <Nav />
        <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25'></div>
        <section className="h-screen justify-center px-10 py-10 content-center items-center grid-cols-2 gap-10 ">
          {/* <div className='absolute px-4 w-1/2 left-0'> */}
         
            <h1 className='text-pink-600 text-5xl text-center'>
              Cart Coming Soon
            </h1>
             </section>
             </div>
           
        
         
          
    )
}