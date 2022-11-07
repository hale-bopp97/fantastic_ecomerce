import { useRouter } from "next/router"

export default function ProductDetails() {
    const router = useRouter()
    const { id} = router.query
    return (
      <h1 className="text-3xl font-bold underline">
      Product Details { id }
      </h1>
    )
  }