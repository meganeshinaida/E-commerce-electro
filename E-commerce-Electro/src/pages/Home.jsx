import Advertisement from "../components/Advertisement"
import ClientsReviews from "../components/ClientsReviews"
import Hero from "../components/Hero"
import OurPolicy from "../components/OurPolicy"
import PopularProduct from "../components/PopularProduct"
import ProductSwiperN from "../components/ProductSwiperN"

const Home = () => {
  return (
    <div>
    <Hero/>
    <ProductSwiperN/>
    <PopularProduct/>  
    <Advertisement/>
    <OurPolicy/>
   <ClientsReviews/>
 
    </div>
  )
}

export default Home
