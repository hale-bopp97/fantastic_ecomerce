import { useRouter } from "next/router"
import Nav from '../../components/Nav'
import { QUERY_PRODUCT } from "../../utils/queries"
import { useQuery } from '@apollo/client'


const productData = [
    { name: "stickers", image: "/images/stickers.jpg", description: 'corgi sticker', price: "3.99" }]


export default function ProductDetails() {
    const router = useRouter()
    const { id} = router.query
    const { loading, data} = useQuery(QUERY_PRODUCT, {variables: {id: id}})
    const productDetails = data?.product || {}
    console.log(productDetails)
    return (
        <div>
            <Nav/>
      <h1 className="text-3xl font-bold underline">
      Product Details 
      <ul>
        <li>{productDetails.name}</li>
        <li><img src={productDetails.image}></img></li>
        <li>{productDetails.description}</li>
        <li>${productDetails.price}</li>
        <button>Buy Now</button>
      </ul>
      </h1></div>
    )
  }