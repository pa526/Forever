import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";


const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async() => {

    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-------------------Product Data--------------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/*-------------------Product Images--------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*-------------------Product Info--------------------- */}
        <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div>
                {productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border border-gray-200 py-2 px-4 mr-2 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5"/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery available</p>
              <p>Easy 30 days returns and exchange policy</p>
            </div>
        </div>
      </div>

      {/*-------------------Description & Review Section--------------------- */}
      <div className="mt-20">
        <div className="flex">
          <p className="border border-gray-200 px-5 py-3 text-sm">Description</p>
          <p className="border border-gray-200 px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
          <p> This product is thoughtfully designed to deliver the perfect combination of quality, durability, and everyday comfort. Made with premium materials and crafted with attention to detail, it is built to provide long-lasting performance while maintaining a stylish and modern appearance. Every element of this product is carefully created to ensure it meets high standards of reliability, functionality, and design, making it suitable for regular use in a variety of situations.</p>
          <p>Combining functionality with a clean and modern look, this product is an excellent addition to any collection. It is created to offer a seamless balance of comfort, usability, and lasting quality, making it suitable for both everyday use and special occasions. Designed to complement different needs and preferences, this product stands out for its practical features, refined finish, and dependable performance.</p>
        </div>
      </div>
      
      {/*-------------------Related Products--------------------- */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product