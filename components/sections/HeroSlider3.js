
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from "swiper"
export default function HeroSlider3() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h3n',
            prevEl: '.h3p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <>
            <section className="slider style_two  nav_position_one">


                <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel owl-themebanner_carousel  owl_nav_block owl_dots_none theme_carousel owl-theme">

                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_right">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Venda e Cessão de Precatórios
                                            </h1>
                                            <p className="animated _flipInY">
                                                Antecipe o valor dos seus precatórios com segurança e
                                                as melhores condições do mercado.
                                            </p>
                                            <div className="theme_btn_all color_one">
                                                <Link href="/precatorios" className="theme-btn one">Saiba mais</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px -70px' }}>
                                            <img src="/assets/images/sliders/slider-3-2.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Regularização Tributária
                                            </h1>
                                            <p className="animated _flipInY">
                                                Reduza seus débitos fiscais com soluções estratégicas
                                                de negociação junto à Fazenda Pública.
                                            </p>
                                            <div className="theme_btn_all color_one">
                                                <Link href="/tributaria" className="theme-btn one">Saiba mais</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/sliders/slider-3-3.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="slide-item-content content_left">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-3-bg.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                                        <div className="slider_content">
                                            <h1 className="animated _fadeInDownBig">
                                                Investidores Parceiros
                                            </h1>
                                            <p className="animated _flipInY">
                                                Invista em ativos judiciais com rentabilidade acima
                                                da média e respaldo jurídico completo.
                                            </p>
                                            <div className="theme_btn_all color_one">
                                                <Link href="/investimentos" className="theme-btn one">Saiba mais</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12 image_column">
                                        <div className="slider_image _flipInX" style={{ margin: '50px 0px 0px 50px' }}>
                                            <img src="/assets/images/boneco3dbg.jpg" className="img-fluid" alt="slider image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <div className="owl-prev h3p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h3n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
