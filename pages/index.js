import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Newsteller2 from "@/components/sections/Newsteller2"
import Cta from "@/components/sections/Cta"
import FunFacts from "@/components/sections/FunFacts"
import HeroSlider3 from "@/components/sections/HeroSlider3"
import Service4 from "@/components/sections/Service4"
import Process3 from "@/components/sections/Process3"

export default function Home() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <HeroSlider3 />
                <Service4 />
                <About2 />
                <Cta />
                <FunFacts />
                <Process3 />
                <Newsteller2 />
            </Layout>
        </>
    )
}
