
import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About2() {
    return (
        <>
            <section className="about-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_one">
                                <div className="image one">
                                    <img src="/assets/images/about/about-5.jpg" className="img" alt="image" />
                                </div>
                                <div className="image two">
                                    <img src="/assets/images/projects/project-detail-img-2.jpg" className="img" alt="image" />
                                    <div className="video_box">
                                        <VideoBox />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 pd_left_40">
                            <div className="pd_left_20">
                                <div className="title_all_box style_two  dark_color">
                                    <div className="title_sections two">
                                        <div className="before_title">Por que escolher nossa estrutura?</div>
                                        <h2>Transformamos Precatórios e Créditos Tributários em Liquidez Estratégica</h2>
                                        <div className="description_box">
                                            <p>Estruturação jurídica, segurança operacional e soluções sob medida para
                                                empresas e investidores que querem antecipar resultados com segurança.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="extra_content authour_box_two dark_color">
                                    <div className="authour_box_content two">
                                        <div className="image">
                                            <img src="/assets/images/app-icon.png" className="img-fluid authour_image" alt="authour Image" />
                                        </div>
                                        <div className="text">
                                            <h6>Diego Cavalcante, <span>Fundador e CEO da Paypers</span></h6>
                                            <p>Atuamos na estruturação, intermediação e aquisição de precatórios, além da
                                                construção de estratégias em transação tributária.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">Fale com um Especialista</Link>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                    </div>
                                    <div className="txt_content">
                                        <h3>
                                            <Link href="#" >Análise Técnica</Link>
                                        </h3>
                                        <p>Recebemos a documentação e realizamos avaliação jurídica e financeira.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="icon_box_all style_one">
                                <div className="icon_content icon_centers ">
                                    <div className="icon">
                                        <span className="icon-bow-and-arrow" />
                                    </div>
                                    <div className="txt_content">
                                        <h3><Link href="#" >Formalização e Execução</Link></h3>
                                        <p>Modelamos a operação conforme perfil e necessidade.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
