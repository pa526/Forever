import { useContext, useEffect } from "react"
import { shopContext } from "../context/shopContext"
import Title from "./Title";

function Bestsellar() {

    const {products} = useContext(shopContext);
    const [bestsellar, setBestSellar] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((items) => (items.bestsellar));
        setBestSellar(bestProducts.slice(0, 5));
    }, []);

  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={"BEST"} text2={"SELLERS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Discover our top-selling products that are loved by customers!
            </p>
        </div>
    </div>
  )
}

export default Bestsellar