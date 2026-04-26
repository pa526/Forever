import Bestsellar from "../components/Bestsellar"
import Hero from "../components/Hero"
import { LatestCollection } from "../components/LatestCollection"

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection />
        <Bestsellar/>
    </div>
  )
}

export default Home