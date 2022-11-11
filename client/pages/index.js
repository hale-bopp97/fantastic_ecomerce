// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-black'>
      <Nav />

      <section className="h-screen grid justify-center px-10 py-10 content-center items-center grid-cols-2 gap-10 ">
        {/* <div className='absolute px-4 w-1/2 left-0'> */}
        <div className='text-sky-200 '>
          <h1 className='text-pink-600 text-5xl pb-3'>
            Welcome to Fantastic 
            Ecommerce
          </h1>
          <p className='py-10'>
            A site where you can find anything
          </p>
        </div>
        {/*<div className='absolute w-1/2 px-4 right-0'>*/}
        <div className='relative'>
          <div className='absolute inset-0 from-pink-600 to-blue-700 bg-gradient-45 rounded-lg blur-xl'></div>
          <div className='relative'>
            <img className="rounded-xl" src="/images/banner.jpg"></img>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}
