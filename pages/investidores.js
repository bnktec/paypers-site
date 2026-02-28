import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function Investidores() {
    return (
        <>
            <Head>
                <title>Paypers - Investidores</title>
            </Head>

            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Investidores">
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
                                            <div className="before_title">Investidores</div>
                                            <h2>Por que ativos judiciais?</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Ativos judiciais como precatórios representam créditos com lastro do poder público, oferecendo uma classe de ativos alternativa com características únicas: previsibilidade de pagamento, baixa correlação com o mercado financeiro tradicional e potencial de retorno estruturado.</p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="theme_btn_all color_one">
                                        <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn five">Falar com Investimentos<i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/boneco_paypers01.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/cell01.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Diversificação com lastro jurídico e previsibilidade de retorno</h6>
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

                {/*-services-*/}
                <section className="service-section-two bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container pd_zero">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">O que oferecemos</div>
                                        <h2>Soluções para Investidores</h2>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="row gutter_15px">
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-dollar"><i /></span>
                                            <small className="nom">01</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Análise jurídica detalhada</Link></h2>
                                            <p>Due diligence completa com parecer técnico e avaliação de risco.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-pharmacy"><i /></span>
                                            <small className="nom">02</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Estruturação contratual</Link></h2>
                                            <p>Contratos sob medida com segurança jurídica em todas as etapas.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-service"><i /></span>
                                            <small className="nom">03</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Modelagem de risco</Link></h2>
                                            <p>Análise quantitativa e qualitativa para decisões fundamentadas.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <span className="icon-dollar"><i /></span>
                                            <small className="nom">04</small>
                                            <h2><Link href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>Acompanhamento processual</Link></h2>
                                            <p>Monitoramento contínuo e relatórios de evolução das operações.</p>
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
                {/*-services end-*/}

                {/*-profile-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Perfil do Investidor</div>
                                            <h2>Para quem é</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Voltado para investidores qualificados que buscam diversificação com lastro jurídico e previsibilidade de retorno. Empresários, profissionais liberais e investidores de ativos alternativos que desejam retorno estruturado, segurança jurídica e operações com transparência.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Segurança e Governança</div>
                                            <h2>Rigor técnico em cada operação</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Todas as operações são conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-profile end-*/}

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
                                        <div className="before_title">Oportunidades</div>
                                        <h2>Solicite acesso às oportunidades disponíveis</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="theme_btn_all color_one">
                                    <Link href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" className="theme-btn three">
                                        Falar com Investimentos<i className="icon-right-arrow-long" />
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
