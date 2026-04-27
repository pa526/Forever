import { assets } from "../assets/assets"

function Footer() {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div> 
                <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
                <p className="w-full md:w-2/3 text-gray-600 ">
                    We are a leading e-commerce platform dedicated to providing our customers with the best shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, while ensuring exceptional customer service.
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1 234-567-890</li>
                    <li>support@ecommerce.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2026@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer