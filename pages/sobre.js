import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Paypers - Sobre</title>
            </Head>

            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Sobre a Paypers">
                {/*-about-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Sobre a Paypers</div>
                                            <h2>Estrutura, Técnica e Compromisso com Segurança Jurídica</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <h2>Quem Somos</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Atuamos na estruturação de operações envolvendo precatórios e passivos tributários, com abordagem técnica, transparente e orientada a resultados. A Paypers não é apenas intermediadora — é uma plataforma de estruturação financeira baseada em tecnologia.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all style_two">
                                                <div className="icon_content icon_imgs">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Missão</Link></h3>
                                                        <p>Gerar liquidez e eficiência financeira por meio de estrutura jurídica sólida.</p>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all style_two">
                                                <div className="icon_content icon_imgs">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Posicionamento</Link></h3>
                                                        <p>Tecnologia e estratégia para transformar ativos judiciais em oportunidades.</p>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/boneco_paypers02.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/paypers01.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Tecnologia e estratégia para transformar ativos judiciais em oportunidades</h6>
                                        <p>/ Paypers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-about end-*/}

                {/*-structure-*/}
                <section className="service-section-two bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container pd_zero">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Nossa Estrutura</div>
                                        <h2>Como Operamos</h2>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="row gutter_15px">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-dollar"><i /></span>
                                            <small className="nom">01</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Plataforma digital própria</Link></h2>
                                            <p>Tecnologia para estruturar e monitorar operações com eficiência.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-pharmacy"><i /></span>
                                            <small className="nom">02</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Estrutura jurídica especializada</Link></h2>
                                            <p>Equipe técnica focada em compliance e segurança operacional.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-service"><i /></span>
                                            <small className="nom">03</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Processo transparente</Link></h2>
                                            <p>Atendimento consultivo com foco em eficiência e liquidez.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </section>
                {/*-structure end-*/}

                {/*-compliance-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Segurança & Compliance</div>
                                            <h2>Governança e Transparência</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box text-center">
                                        <p>Operações conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas. Governança e transparência são pilares fundamentais da nossa atuação.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-compliance end-*/}

                {/*-cta-*/}
                <section className="call-to-action bg_op_1" style={{ backgroundImage: 'url(/assets/images/cal-to-action.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-12">
                                <div className="title_all_box style_one dark_color light_color">
                                    <div className="title_sections">
                                        <div className="before_title">Pronto para estruturar sua operação?</div>
                                        <h2>Fale agora com nosso time especializado</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                        Iniciar Conversa no WhatsApp<i className="icon-right-arrow-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </section>
                {/*-cta end-*/}
            </Layout>
        </>
    )
}
