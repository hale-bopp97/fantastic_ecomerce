import Link from 'next/link'
import Nav from '../../components/Nav'
import { QUERY_PRODUCTS } from '../../utils/queries'
import { useQuery } from '@apollo/client'



// const productData = [
//     { name: "stickers", image: "/images/stickers.jpg" },
//     { name: "mousepad", image: '/images/mousepad.jpg' },
//     { name: 'keyboard', image: '/images/keyboard.jpg' },
//     { name: "mic", image: '/images/mic.jpg' },
//     { name: "monitor", image: '/images/monitor.jpg' },
//     { name: 'headphones', image: '/images/headphones.jpg' }]





export default function Product() {
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    console.log(data)
    const productData = data?.products || []
    console.log(productData)
   

    return (
        <div> {loading ? <div>loading...</div> :
            <div className='bg-black'>
                <Nav />
                <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur-2xl opacity-25'></div>
                    <h1 className="relative text-sky-400 text-center text-3xl font-bold p-5">
                        Products
                    </h1>
                </div>
                <section className='grid grid-cols-3 gap-10 justify-center px-10 py-10 content-center items-center'>
                    {productData.map((product) => {
                        return <section>
                            <Link href={`/products/${product._id}`}>
                                <div className='relative'>
                                    <div className='absolute inset-0 from-pink-600 to-blue-600 bg-gradient-120 rounded-lg blur-lg group-hover:opacity-100 transition duration-1000'></div>
                                    <div className='relative rounded-3xl hover:scale-75 bg-black grid grid-rows-2 justify-center content-center items-center text-center'>
                                        <img className='p-2 object-contain h-64 w-96' src={product.image} />

                                        <h4 className='font-bold text-xl text-sky-300'>{product.name}</h4>
                                    </div>

                                </div>
                            </Link>
                        </section>

                    })}
                </section>
            </div>}
        </div>
    )
}