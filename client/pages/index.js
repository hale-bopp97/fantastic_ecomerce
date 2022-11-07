// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Nav/>
      
      <section className="h-screen grid justify-center px-10 py-10 content-center items-center grid-cols-2 gap-10 ">
        {/* <div className='absolute px-4 w-1/2 left-0'> */}
        <div className=''>
          <h1 className='text-5xl pb-3'>
            Welcome to Fantastic ecommerce
          </h1>
          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        {/*<div className='absolute w-1/2 px-4 right-0'>*/}
        <div className=''>
        <div>
            <img  src="/images/banner.jpg"></img>
            </div>
            
        </div>
      </section>
    </div>
  )
}
