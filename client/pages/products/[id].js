import { useRouter } from "next/router"
import Nav from '../../components/Nav'
import { QUERY_PRODUCT } from "../../utils/queries"
import { useQuery } from '@apollo/client'
import { DirectiveLocation } from "graphql"


const productData = [
    { name: "stickers", image: "/images/stickers.jpg", description: 'corgi sticker', price: "3.99" }]


export default function ProductDetails() {
    const router = useRouter()
    const { id } = router.query
    const { loading, data } = useQuery(QUERY_PRODUCT, { variables: { id: id } })
    const productDetails = data?.product || {}
    console.log(productDetails)
    return (



        <div className="relative h-screen bg-black">
            <Nav />
            <div className="absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25"></div>


            <h1 className="relative h-96 text-3xl text-sky-400 font-bold justify-center content-center items-center text-center p-40">
                {productDetails.name}
            </h1>

            <section>
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur-2xl opacity-50"></div>
                    <div className="relative bg-black rounded-lg relative grid grid-flow-col grid-cols-3 flex items-center">

                        <div className="relative col-span-2">
                            <img className="rounded-xl object-contain h-64 w-96" src={productDetails.image}></img>
                        </div>
                        <div className="relative p-8">
                            <ul>
                                <p className="font-bold underline text-sky-400">Description</p>
                                <li className="text-sky-400">{productDetails.description}</li>
                                <p className="text-sky-400 font-bold underline">Price</p>
                                <li className="text-sky-400">${productDetails.price}</li>
                                <button className="rounded-lg bg-sky-300 hover:scale-125 hover:bg-sky-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-pink-600 p-1">Buy Now</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
