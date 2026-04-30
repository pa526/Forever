import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt=""/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to our store — your one-stop destination for quality, style, and convenience. We believe shopping should be simple, enjoyable, and trustworthy, which is why we bring together a carefully selected collection of products designed to match your everyday needs and lifestyle.</p>
          <p>At our core, we are committed to creating a smooth and reliable shopping experience for every customer. We focus on quality products, secure shopping, fast delivery, and customer satisfaction at every step. </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission is to make online shopping simple, reliable, and enjoyable for everyone. We aim to provide high-quality products at affordable prices while ensuring a smooth and secure shopping experience for our customers. By combining convenience, trust, and value, we strive to create a platform where people can shop with confidence and ease.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Quality assurance is at the heart of everything we do. From product selection to packaging and delivery.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Convenience is at the core of our shopping experience. With easy navigation, secure checkout, multiple payment options, and reliable delivery.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Exceptional customer service is at the heart of our brand. We believe great service goes beyond solving problems.</p>
        </div>
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About