import Link from 'next/link'
import Nav from '../../components/Nav'

const productData = [
    { name: "stickers", image: "/images/stickers.jpg" },
    { name: "mousepad", image: '/images/mousepad.jpg' },
    { name: 'keyboard', image: '/images/keyboard.jpg' },
    { name: "mic", image: '/images/mic.jpg' },
    { name: "monitor", image: '/images/monitor.jpg' },
    { name: 'headphones', image: '/images/headphones.jpg' }]


export default function Product() {
    return (
        <div>
            <Nav />
            <h1 className="text-center text-3xl font-bold p-5 ">
                Products
            </h1>
            <section className='grid grid-cols-3 gap-10  justify-center px-10 py-10 content-center items-center'>
                {productData.map((product) => {
                    return <section>
                        <Link href={`/products/${product.name}`}>
                            <div className='bg-purple-300 grid grid-rows-2 justify-center content-center items-center text-center'>
                                <img className='object-contain h-64 w-96' src={product.image}/>

                                <p>{product.name}</p>

                            </div>  
                            </Link>
                    </section>

                })}
            </section>
        </div>
    )
}