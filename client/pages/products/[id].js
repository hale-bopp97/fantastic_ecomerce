import { useRouter } from "next/router"
import Nav from '../../components/Nav'

const productData = [
    { name: "stickers", image: "/images/stickers.jpg", description: 'corgi sticker', price: "3.99" }]


export default function ProductDetails() {
    const router = useRouter()
    const { id} = router.query
    return (
        <div>
            <Nav/>
      <h1 className="text-3xl font-bold underline">
      Product Details { id }
      </h1></div>
    )
  }