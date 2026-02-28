import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/owl.css"
import "../public/assets/css/flexslider.css"
import "../public/assets/css/font-awesome.min.css"
import "../public/assets/css/icomoon.css"
import "../public/assets/css/jquery.fancybox.min.css"
import "../public/assets/css/scss/elements/theme-css.css"
import "../public/assets/css/style.css"
import "../public/assets/css/woocommerce-layout.css"
import "../public/assets/css/woocommerce.css"
import "../public/assets/css/paypers-design-system.css"


function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        const handleStart = () => setLoading(true)
        const handleComplete = () => {
            setTimeout(() => setLoading(false), 400)
        }

        router.events.on("routeChangeStart", handleStart)
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)

        return () => {
            router.events.off("routeChangeStart", handleStart)
            router.events.off("routeChangeComplete", handleComplete)
            router.events.off("routeChangeError", handleComplete)
        }
    }, [router])

    return (
        <>
            {loading && <Preloader />}
            <Component {...pageProps} />
        </>
    )
} export default MyApp
